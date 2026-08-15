// app.js — CREATOR-OS front end. A faithful, interconnected mirror of the Creator OS product.
// Thin skin over the verbs/model: the 18 backing sources in their native views + clickable
// detail pages. No business logic here — every gate lives server-side.

/* ---------------- helpers ---------------- */
const $ = (s, r = document) => r.querySelector(s);
const api = {
  get: (p) => fetch(p).then(r => { if (!r.ok) throw new Error('load failed: ' + p); return r.json(); }),
  post: (p, b) => fetch(p, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b || {}) })
    .then(async r => { const j = await r.json(); if (!r.ok) throw new Error(j.error || 'request failed'); return j; }),
};
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const money = (v) => '$' + Number(v || 0).toLocaleString('en-US');
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fmtDate = (d) => { if (!d) return '—'; const m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? `${MONTHS[+m[2] - 1]} ${+m[3]}, ${m[1]}` : esc(d); };
const todayISO = () => new Date().toISOString().slice(0, 10);
const pretty = (k) => String(k).replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
const chip = (v, cls = '') => v ? `<span class="chip ${cls}">${esc(v)}</span>` : '';
const link = (entity, id, label, cls = '') => `<a class="${cls}" href="#/d/${entity}/${id}">${esc(label)}</a>`;
const toast = (m, err = false) => { const t = $('#toast'); t.innerHTML = m; t.classList.toggle('err', err); t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, err ? 5200 : 3000); };

const HABITS = [['deep_work_8h', 'Deep work 8h'], ['read_20p', 'Read 20p'], ['running_30min', 'Run 30min'], ['workout_40min', 'Workout 40min'], ['meditation_15min', 'Meditate 15min'], ['journaling', 'Journal'], ['sleep_8h', 'Sleep 8h']];
const ICON = { content: '▶', platform: '◫', sponsorship: '◆', affiliate: '❖', contact: '◐', topic: '§', growth: '↗', project: '▤', task: '✔', note: '✎', resource: '⚒', bookmark: '▭', account: '▣', income: '＋', expense: '－' };
const TITLE_FIELD = { content: 'content_title', platform: 'name', sponsorship: 'sponsor_name', affiliate: 'name', contact: 'full_name', topic: 'category_name', growth: 'objective', project: 'project_name', task: 'name', note: 'topic_title', resource: 'name', bookmark: 'bookmark', account: 'name', income: 'name', expense: 'name' };
const SECTION_OF = { content: 'content', platform: 'platforms', sponsorship: 'sponsorships', affiliate: 'contacts/affiliates', contact: 'contacts', topic: 'topics', growth: 'growth', project: 'projects', task: 'projects/tasks', note: 'notes', resource: 'notes/tools', bookmark: 'topics/bookmarks', account: 'finance', income: 'finance', expense: 'finance' };
const REL_ENTITY = { platforms: 'platform', platform: 'platform', content: 'content', sponsorships: 'sponsorship', growth: 'growth', bookmarks: 'bookmark', tasks: 'task', notes: 'note', subtasks: 'task', incomes: 'income', expenses: 'expense' };
const MONEY_KEYS = ['amount', 'total_amount', 'cost', 'entry_amount', 'balance', 'income', 'expense'];
const DATE_KEYS = ['creation_date', 'published_date', 'meeting_date', 'due_date', 'date', 'date_start', 'date_end', 'reminder'];
const CHIP_KEYS = ['status', 'payment', 'content_type', 'type', 'priority', 'relationship', 'quarter', 'payment_method', 'category', 'month'];

/* ---------------- shared bits ---------------- */
const head = (title, callout) => `<div class="head"><h1>${esc(title)}</h1>${callout ? `<div class="callout"><span class="i">ℹ</span><div>${callout}</div></div>` : ''}</div>`;
const subtabs = (items, active) => `<div class="subtabs">${items.map(t => `<a class="subtab ${t.k === active ? 'active' : ''}" href="#${t.href}">${t.label}</a>`).join('')}</div>`;
const progressBar = (p) => { p = Math.max(0, Math.min(100, Number(p) || 0)); return `<div class="progress"><div class="bar"><span style="width:${p}%"></span></div><span class="pct">${p}%</span></div>`; };
const mini = (act, id, label, extra = '') => `<button class="btn mini" data-act="${act}" data-id="${id}" ${extra}>${label}</button>`;

/* ---------------- content board ---------------- */
const CONTENT_ORDER = ['Idea', 'Planning', 'Research', 'Filming', 'Editing', 'Ready to Publish', 'Published'];
const laneDot = (st) => st === 'Published' ? 'dot' : ['Idea', 'Planning'].includes(st) ? 'dot hollow' : 'dot half';
function contentCard(c) {
  const nextIsPublish = c.status === 'Ready to Publish';
  const actions = c.status === 'Published' ? '' :
    mini('c-advance', c.id, (nextIsPublish ? '<span class="gate"></span>' : '') + 'Advance →') + mini('c-schedule', c.id, '◷ Schedule');
  return `<article class="card">
    <div class="card-top">${chip(c.content_type, 'soft')}<span class="idle">${c.published_date ? fmtDate(c.published_date) : 'no date'}</span></div>
    <h4>${link('content', c.id, c.content_title)}</h4>
    <div class="meta">${esc(c.topic || 'no topic')} · ${esc(c.platforms || 'no platform')}${Number(c.task_total) ? ` · ${c.task_done}/${c.task_total} tasks` : ''}</div>
    ${actions ? `<div class="card-actions">${actions}</div>` : ''}</article>`;
}
function contentBoard(items) {
  return `<div class="board">${CONTENT_ORDER.map(st => {
    const inLane = items.filter(c => c.status === st);
    const cls = st === 'Published' ? 'lane terminal' : 'lane';
    return `<section class="${cls}"><div class="lane-head"><span class="name"><span class="${laneDot(st)}"></span>${st}</span><span class="sum">${inLane.length}</span></div><div class="lane-body">${inLane.map(contentCard).join('') || '<div class="empty">—</div>'}</div></section>`;
  }).join('')}</div>`;
}

/* ---------------- sponsorship board ---------------- */
const SPONSOR_LANES = ['Inbox', 'Negotiations', 'Agree', 'Completed', 'Canceled'];
const STALL_DAYS = { Inbox: 7, Negotiations: 5, Agree: 10 };
function sponsorCard(s) {
  const stalled = STALL_DAYS[s.status] != null && Number(s.quiet_days) > STALL_DAYS[s.status];
  const deal = ['Completed', 'Canceled'].includes(s.status) ? '' :
    mini('s-advance', s.id, (s.status === 'Agree' ? '<span class="gate"></span>' : '') + 'Advance →') + mini('s-cancel', s.id, 'Cancel');
  const pay = s.payment === 'Pay' ? '' : mini('s-pay', s.id, (s.payment === 'In progress' ? '<span class="gate"></span>' : '') + '$ ' + (s.payment === 'Inbox' ? 'Start payment' : 'Mark paid'));
  const mismatch = (s.status === 'Canceled' && s.payment === 'Pay') || (s.status === 'Completed' && s.payment === 'Inbox');
  return `<article class="card">
    <div class="card-top"><span class="val">${s.amount != null ? money(s.amount) : '—'}</span><span class="idle ${stalled ? 'hot' : ''}">${s.quiet_days}d quiet</span></div>
    <h4>${link('sponsorship', s.id, s.sponsor_name)}</h4>
    <div class="meta">${esc(s.contact || s.contact_details || '—')} · ${esc(s.platform || 'no platform')}</div>
    <div class="paychip ${mismatch ? 'warn' : ''}">payment: ${esc(s.payment)}${mismatch ? ' ⚠' : ''}</div>
    ${(deal + pay) ? `<div class="card-actions">${deal}${pay}</div>` : ''}</article>`;
}
function sponsorBoard(items) {
  return `<div class="board">${SPONSOR_LANES.map(st => {
    const inLane = items.filter(s => s.status === st);
    const sum = inLane.reduce((a, s) => a + Number(s.amount || 0), 0);
    const cls = ['Completed', 'Canceled'].includes(st) ? 'lane terminal' : st === 'Inbox' ? 'lane' : 'lane';
    const d = st === 'Completed' ? 'dot' : st === 'Canceled' ? 'dot hollow' : st === 'Inbox' ? 'dot hollow' : 'dot half';
    return `<section class="${cls}"><div class="lane-head"><span class="name"><span class="${d}"></span>${st}</span><span class="sum">${inLane.length} · ${money(sum)}</span></div><div class="lane-body">${inLane.map(sponsorCard).join('') || '<div class="empty">—</div>'}</div></section>`;
  }).join('')}</div>`;
}

/* ---------------- section renderers ---------------- */
async function renderDashboard() {
  const [r, counts, content] = await Promise.all([api.get('/api/report'), api.get('/api/counts'), api.get('/api/content')]);
  const m = [
    ['Weighted deals', money(r.sponsorships.weighted)],
    ['Won', money(r.sponsorships.won)],
    ['Month balance', money(r.money.balance)],
    ['Habits today', r.habits.today == null ? '—' : r.habits.today + '%'],
  ];
  const flags = [];
  r.sponsorships.stalled.forEach(s => flags.push(`⚑ <b>${esc(s.sponsor_name)}</b> quiet ${s.quiet_days}d in ${s.status} — ${money(s.amount)} at risk`));
  r.sponsorships.mismatches.forEach(s => flags.push(`⚠ <b>${esc(s.sponsor_name)}</b> ${s.status} but payment ${s.payment}`));
  r.calendar.ready_no_date.forEach(c => flags.push(`◷ <b>${esc(c.content_title)}</b> is Ready to Publish with no date`));
  r.growth.filter(g => g.behind).forEach(g => flags.push(`↘ <b>${esc(g.objective)}</b> at ${g.progress}% — behind pace`));
  const dbs = [['contents', 'Content', 'content'], ['platforms', 'Platforms', 'platforms'], ['sponsorships', 'Sponsorships', 'sponsorships'], ['topics', 'Topics', 'topics'], ['bookmarks', 'Bookmarks', 'topics/bookmarks'], ['growth', 'Goals', 'growth'], ['projects', 'Projects', 'projects'], ['tasks', 'Tasks', 'projects/tasks'], ['notes', 'Notes', 'notes'], ['resources', 'Tools', 'notes/tools'], ['contacts', 'Contacts', 'contacts'], ['affiliates', 'Affiliates', 'contacts/affiliates'], ['accounts', 'Accounts', 'finance'], ['habit_days', 'Habit days', 'habits']];
  const todays = r.pipeline.todays_work;
  $('#main').innerHTML =
    `<div class="metrics">${m.map(([k, v]) => `<div class="metric"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('')}</div>`
    + (flags.length ? `<div class="flags">${flags.map(f => `<div class="flag">${f}</div>`).join('')}</div>` : '')
    + `<div class="db-grid">${dbs.map(([k, l, route]) => `<a class="db-card" href="#/${route}"><div class="n">${counts[k] ?? 0}</div><div class="l">${l}</div></a>`).join('')}</div>`
    + `<h3 class="sec-h">Today's Work</h3>`
    + (todays.length ? `<table class="slim"><thead><tr><th>Task</th><th>Priority</th><th>Due</th><th>Ties to</th><th></th></tr></thead><tbody>${todays.map(t =>
        `<tr><td>${link('task', t.id, t.name)}</td><td>${chip(t.priority)}</td><td>${fmtDate(t.due_date)}</td><td>${esc(t.content || t.project || '—')}</td><td>${mini('t-done', t.id, '✔ Done')}</td></tr>`).join('')}</tbody></table>`
      : '<div class="empty">Nothing due. The calendar is the boss now.</div>')
    + `<h3 class="sec-h">Content Pipeline</h3>` + contentBoard(content);
}

async function renderInbox(args) {
  const items = await api.get('/api/inbox');
  const kinds = ['all', 'content', 'task', 'note', 'sponsorship'];
  const active = kinds.includes(args[0]) ? args[0] : 'all';
  const tabs = subtabs(kinds.map(k => ({ k, label: k === 'all' ? 'All' : pretty(k) + 's', href: '/inbox' + (k === 'all' ? '' : '/' + k) })), active);
  const filtered = active === 'all' ? items : items.filter(i => i.kind === active);
  const body = `<div class="inbox">${filtered.map(it =>
    `<a class="inbox-item" href="#/d/${it.kind}/${it.id}"><span class="chip">${it.kind}</span><div class="body"><h4>${esc(it.title)}</h4><p>captured ${fmtDate(it.since)}</p></div></a>`).join('') || '<div class="empty">Inbox zero. Capture is honest and drained (INV-6).</div>'}</div>`;
  $('#main').innerHTML = head('Inbox', 'Everything sitting in a capture state — content ideas, tasks, notes, sponsor leads — awaiting triage to a real home.') + tabs + body;
}

async function renderPlatforms() {
  const ps = await api.get('/api/platforms');
  $('#main').innerHTML = head('Platforms', 'The hub — every piece, deal, goal and bookmark reports back to a channel. Counts derive on read (INV-7).')
    + `<table><thead><tr><th>Platform</th><th>URL</th><th>Engagement</th><th class="num">Content</th><th class="num">Deals</th><th class="num">Goals</th><th class="num">Bookmarks</th></tr></thead><tbody>${ps.map(p =>
      `<tr><td>${link('platform', p.id, p.name)}</td><td class="dim">${esc(p.url || '—')}</td><td class="dim">${esc(p.engagement_metrics || '—')}</td><td class="num">${p.content_count}</td><td class="num">${p.sponsorship_count}</td><td class="num">${p.goal_count}</td><td class="num">${p.bookmark_count}</td></tr>`).join('')}</tbody></table>`;
}

async function renderContent() {
  const items = await api.get('/api/content');
  $('#main').innerHTML = head('Content Schedule', 'The production line — one gated step at a time; <b>Published is earned</b>: a date and a platform, or the move is refused (INV-3).') + contentBoard(items);
}

async function renderCalendar(args) {
  const items = await api.get('/api/content');
  const byDay = {}; let anchor = todayISO();
  items.forEach(c => { const d = String(c.published_date || '').slice(0, 10); if (d) (byDay[d] = byDay[d] || []).push(c); });
  const [Y, M] = args[0] ? args[0].split('-').map(Number) : anchor.split('-').map(Number);
  const unscheduled = items.filter(c => c.status === 'Ready to Publish' && !c.published_date);
  $('#main').innerHTML = head('Content Calendar', 'The consistency instrument — planned and published pieces by date. Gaps and undated Ready pieces are the two silent failures.')
    + (unscheduled.length ? `<div class="flags">${unscheduled.map(c => `<div class="flag">◷ <b>${esc(c.content_title)}</b> is Ready to Publish with no date ${mini('c-schedule', c.id, 'Schedule')}</div>`).join('')}</div>` : '')
    + calendarHTML(Y, M, byDay);
}
function calendarHTML(Y, M, byDay) {
  const startDow = new Date(Date.UTC(Y, M - 1, 1)).getUTCDay();
  const days = new Date(Date.UTC(Y, M, 0)).getUTCDate();
  const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let cells = dow.map(d => `<div class="dow">${d}</div>`).join('');
  for (let i = 0; i < startDow; i++) cells += `<div class="cell out"></div>`;
  for (let d = 1; d <= days; d++) {
    const key = `${Y}-${String(M).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const evs = (byDay[key] || []).map(c => `<a class="ev ${c.status === 'Published' ? 'done' : ''}" href="#/d/content/${c.id}">${esc(c.content_title)}</a>`).join('');
    cells += `<div class="cell ${key === todayISO() ? 'today' : ''}"><div class="dnum">${d}</div>${evs}</div>`;
  }
  const prev = M === 1 ? [Y - 1, 12] : [Y, M - 1], next = M === 12 ? [Y + 1, 1] : [Y, M + 1];
  const hr = (a) => `${a[0]}-${String(a[1]).padStart(2, '0')}`;
  return `<div class="cal-head"><h3>${MONTHS[M - 1]} ${Y}</h3><div class="cal-nav"><a class="btn mini" href="#/calendar/${hr(prev)}">‹ Prev</a><a class="btn mini" href="#/calendar/${hr(next)}">Next ›</a></div></div><div class="cal">${cells}</div>`;
}

async function renderSponsorships() {
  const items = await api.get('/api/sponsorships');
  $('#main').innerHTML = head('Sponsorships', 'One record, TWO machines — the deal pipeline and the payment tracker move independently (INV-1); <b>Pay is earned</b> only by an agreed deal with an amount (INV-4). Stalls are surfaced, never auto-written.') + sponsorBoard(items);
}

async function renderTopics(args) {
  const tab = args[0] === 'bookmarks' ? 'bookmarks' : 'topics';
  const tabs = subtabs([{ k: 'topics', label: 'Topics', href: '/topics' }, { k: 'bookmarks', label: 'Bookmarks', href: '/topics/bookmarks' }], tab);
  let body;
  if (tab === 'topics') {
    const ts = await api.get('/api/topics');
    body = `<table class="slim"><thead><tr><th>Topic</th><th class="num">Content</th><th class="num">Bookmarks</th></tr></thead><tbody>${ts.map(t =>
      `<tr><td>${link('topic', t.id, t.category_name)}</td><td class="num">${t.content_count}</td><td class="num">${t.bookmark_count}</td></tr>`).join('')}</tbody></table>`;
  } else {
    const bs = await api.get('/api/bookmarks');
    body = `<table><thead><tr><th>Bookmark</th><th>Type</th><th>Status</th><th>Topic</th><th>Author</th><th></th></tr></thead><tbody>${bs.map(b =>
      `<tr><td>${link('bookmark', b.id, b.bookmark)}</td><td>${chip(b.type, 'soft')}</td><td>${chip(b.status)}</td><td>${esc(b.topic || '—')}</td><td class="dim">${esc(b.author || '—')}</td><td>${b.status !== 'Archive' ? mini('b-next', b.id, '→') + mini('b-archive', b.id, 'Archive') : ''}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#main').innerHTML = head('Topics & Bookmarks', 'The content taxonomy and the saved-resource review line.') + tabs + body;
}

async function renderGrowth() {
  const gs = await api.get('/api/growth');
  $('#main').innerHTML = head('Growth & Goals', 'Current vs Target per platform. <code>current</code> is overwritten in place — the source keeps no history, and the model says so.')
    + `<table><thead><tr><th>Objective</th><th>Platform</th><th>Quarter</th><th class="num">Current</th><th class="num">Target</th><th>Progress</th><th></th></tr></thead><tbody>${gs.map(g =>
      `<tr class="${Number(g.progress) < 50 ? 'behind' : ''}"><td>${link('growth', g.id, g.objective)}</td><td>${esc(g.platform)}</td><td>${chip(g.quarter, 'soft')}</td><td class="num">${Number(g.current).toLocaleString()}</td><td class="num">${Number(g.target).toLocaleString()}</td><td>${progressBar(g.progress)}</td><td>${mini('g-update', g.id, 'Update')}</td></tr>`).join('')}</tbody></table>`;
}

async function renderNotes(args) {
  const tab = args[0] === 'tools' ? 'tools' : 'notes';
  const tabs = subtabs([{ k: 'notes', label: 'Notes', href: '/notes' }, { k: 'tools', label: 'Tools & Resources', href: '/notes/tools' }], tab);
  let body;
  if (tab === 'notes') {
    const ns = await api.get('/api/notes');
    body = `<table><thead><tr><th>Note</th><th>Status</th><th>Date</th><th>Tags</th><th>Ties to</th><th></th></tr></thead><tbody>${ns.map(n =>
      `<tr><td>${link('note', n.id, n.topic_title)}</td><td>${chip(n.status)}</td><td>${fmtDate(n.date)}</td><td>${(n.tags || []).map(t => chip(t, 'soft')).join(' ')}</td><td class="dim">${esc(n.content || n.affiliate || '—')}</td><td>${n.status !== 'Reviewed' ? mini('n-reviewed', n.id, '✔ Reviewed') : ''}</td></tr>`).join('')}</tbody></table>`;
  } else {
    const rs = await api.get('/api/resources');
    body = `<table class="slim"><thead><tr><th>Tool</th><th>Type</th><th>Purpose</th><th class="num">Cost /mo</th></tr></thead><tbody>${rs.map(r =>
      `<tr><td>${link('resource', r.id, r.name)}</td><td>${chip(r.type, 'soft')}</td><td class="dim">${esc(r.purpose || '—')}</td><td class="num">${money(r.cost)}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#main').innerHTML = head('Notes & Tools', 'Captured thinking on its review line, and the tool stack with its real monthly cost.') + tabs + body;
}

async function renderProjects(args) {
  const tab = args[0] === 'tasks' ? 'tasks' : 'projects';
  const tabs = subtabs([{ k: 'projects', label: 'Projects', href: '/projects' }, { k: 'tasks', label: 'Tasks', href: '/projects/tasks' }], tab);
  let body;
  if (tab === 'projects') {
    const ps = await api.get('/api/projects');
    body = `<table><thead><tr><th>Project</th><th>Status</th><th>Tasks</th><th>Progress</th><th>Dates</th><th></th></tr></thead><tbody>${ps.map(p =>
      `<tr><td>${link('project', p.id, p.project_name)}${p.archive ? ' ' + chip('archived', 'soft') : ''}</td><td>${chip(p.status)}</td><td>${p.task_done}/${p.task_total}</td><td>${progressBar(p.progress)}</td><td class="dim">${fmtDate(p.date_start)} → ${fmtDate(p.date_end)}</td><td>${p.status !== 'Completed' ? mini('p-next', p.id, '→') : ''}</td></tr>`).join('')}</tbody></table>`;
  } else {
    const ts = await api.get('/api/tasks');
    body = `<table><thead><tr><th>Task</th><th>Status</th><th>Priority</th><th>Due</th><th>Ties to</th><th></th></tr></thead><tbody>${ts.map(t =>
      `<tr><td>${link('task', t.id, t.name)}</td><td>${chip(t.status)}</td><td>${chip(t.priority, 'soft')}</td><td>${fmtDate(t.due_date)}</td><td class="dim">${esc(t.content || t.project || '—')}</td><td>${t.status !== 'Completed' ? mini('t-done', t.id, '✔ Done') : ''}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#main').innerHTML = head('Projects & Tasks', 'The delivery spine — a project\'s progress is the share of its tasks completed, derived on read (INV-7).') + tabs + body;
}

async function renderFinance() {
  const m = await api.get('/api/money');
  const cur = m.months[0] || { income: 0, expense: 0, balance: 0 };
  $('#main').innerHTML = head('Finance Tracker', 'The micro-ledger — every entry keeps its account, category and TRUE month (the period derives from the date, INV-9); balances always derive from the rows (INV-7).')
    + `<div class="metrics">${[['This month in', money(cur.income)], ['This month out', money(cur.expense)], ['Month balance', money(cur.balance)]].map(([k, v]) => `<div class="metric"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('')}</div>`
    + `<h3 class="sec-h">Accounts</h3><div class="db-grid">${m.accounts.map(a => `<a class="db-card" href="#/d/account/${a.id}"><div class="n">${money(a.balance)}</div><div class="l">${esc(a.name)} · ${esc(a.type || '')}</div></a>`).join('')}</div>`
    + `<h3 class="sec-h">Months</h3><table class="slim"><thead><tr><th>Month</th><th class="num">Income</th><th class="num">Expense</th><th class="num">Balance</th></tr></thead><tbody>${m.months.map(mo =>
      `<tr><td>${esc(mo.name)}</td><td class="num">${money(mo.income)}</td><td class="num">${money(mo.expense)}</td><td class="num">${money(mo.balance)}</td></tr>`).join('')}</tbody></table>`
    + `<h3 class="sec-h">Recent Entries</h3><table><thead><tr><th>Entry</th><th>Kind</th><th class="num">Amount</th><th>Date</th><th>Account</th><th>Category</th></tr></thead><tbody>${m.entries.map(e =>
      `<tr><td>${link(e.kind, e.id, e.name)}</td><td>${chip(e.kind, e.kind === 'income' ? '' : 'soft')}</td><td class="num">${money(e.amount)}</td><td>${fmtDate(e.date)}</td><td class="dim">${esc(e.account)}</td><td class="dim">${esc(e.category || '—')}</td></tr>`).join('')}</tbody></table>`;
}

async function renderContacts(args) {
  const tab = args[0] === 'affiliates' ? 'affiliates' : 'contacts';
  const tabs = subtabs([{ k: 'contacts', label: 'Contacts', href: '/contacts' }, { k: 'affiliates', label: 'Affiliates', href: '/contacts/affiliates' }], tab);
  let body;
  if (tab === 'contacts') {
    const cs = await api.get('/api/contacts');
    body = `<table class="slim"><thead><tr><th>Contact</th><th>Relationship</th><th>Email</th><th>Reminder</th><th class="num">Deals</th></tr></thead><tbody>${cs.map(c =>
      `<tr><td>${link('contact', c.id, c.full_name)}</td><td>${chip(c.relationship, 'soft')}</td><td class="dim">${esc(c.contact_information || '—')}</td><td>${fmtDate(c.reminder)}</td><td class="num">${c.sponsorship_count}</td></tr>`).join('')}</tbody></table>`;
  } else {
    const as = await api.get('/api/affiliates');
    body = `<table><thead><tr><th>Program</th><th class="num">Commission</th><th class="num">Lifetime total</th><th>Method</th><th>Fav</th></tr></thead><tbody>${as.map(a =>
      `<tr><td>${link('affiliate', a.id, a.name)}</td><td class="num">${a.commission_rate != null ? a.commission_rate + '%' : '—'}</td><td class="num">${money(a.total_amount)}</td><td>${chip(a.payment_method, 'soft')}</td><td class="check">${a.favorite ? '★' : '—'}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#main').innerHTML = head('Contacts & Affiliates', 'People and programs — a single lifetime total per affiliate is all the source keeps, and the model is honest about it.') + tabs + body;
}

async function renderHabits() {
  const days = await api.get('/api/habits?days=14');
  const header = `<tr><th>Day</th>${HABITS.map(([, l]) => `<th class="hh">${l}</th>`).join('')}<th>Progress</th></tr>`;
  const rows = days.map(d => `<tr class="${d.date === todayISO() ? 'today-row' : ''}">
    <td>${fmtDate(d.date)}${d.date === todayISO() ? ' ' + chip('today') : ''}</td>
    ${HABITS.map(([k]) => `<td class="tick"><button class="tickbtn ${d[k] ? 'on' : ''}" data-act="h-tick" data-date="${d.date}" data-habit="${k}" data-val="${d[k] ? 'false' : 'true'}">${d[k] ? '✔' : '·'}</button></td>`).join('')}
    <td>${progressBar(d.progress)}</td></tr>`).join('');
  $('#main').innerHTML = head('Habits Tracker', 'One row per day (INV-8) — ticks merge into the date\'s row, never duplicate it. The 7 habits are instance schema (policy.habits.set).')
    + `<table class="habits"><thead>${header}</thead><tbody>${rows}</tbody></table>`;
}

/* ---------------- detail page ---------------- */
function propsHTML(entity, rec) {
  const skip = new Set(['id', TITLE_FIELD[entity], 'body', 'task_total', 'task_done', 'created_at']);
  const rows = [];
  for (const [k, v] of Object.entries(rec)) {
    if (skip.has(k) || k.endsWith('_id')) continue;
    if (v === null || v === undefined || v === '') continue;
    let val;
    if (MONEY_KEYS.includes(k)) val = money(v);
    else if (DATE_KEYS.includes(k)) val = fmtDate(v);
    else if (k === 'progress') val = progressBar(v);
    else if (k === 'quiet_days') val = `${v} days`;
    else if (typeof v === 'boolean') val = `<span class="check">${v ? '✔ Yes' : '— No'}</span>`;
    else if (k === 'tags' && Array.isArray(v)) val = v.map(t => chip(t, 'soft')).join(' ');
    else if (CHIP_KEYS.includes(k)) val = chip(v);
    else val = esc(v);
    rows.push([pretty(k), val]);
  }
  return rows.length ? `<div class="props">${rows.map(([k, v]) => `<div class="pk">${k}</div><div class="pv">${v}</div>`).join('')}</div>` : '';
}
async function renderDetail(entity, id) {
  const data = await api.get(`/api/detail/${entity}/${id}`);
  const rec = data.record, rels = data.relations || {};
  const title = rec[TITLE_FIELD[entity]] || 'Untitled';
  const bodyText = rec.body ? `<div class="body-text">${esc(rec.body)}</div>` : '';
  const relSections = Object.entries(rels).map(([k, arr]) => {
    const ent = REL_ENTITY[k] || k;
    const chips = arr.map(r => `<a class="relchip" href="#/d/${ent}/${r.id}"><span class="ic">${ICON[ent] || '•'}</span>${esc(r.name)}</a>`).join('');
    return `<div class="rel"><h3>${pretty(k)}<span class="c">${arr.length}</span></h3>${arr.length ? `<div class="relchips">${chips}</div>` : '<div class="empty">None</div>'}</div>`;
  }).join('');
  const back = SECTION_OF[entity] || 'dashboard';
  $('#main').innerHTML = `<div class="detail">
    <div class="crumb"><a href="#/${back}">← ${pretty(back.split('/')[0])}</a></div>
    <div class="detail-head"><div class="dicon">${ICON[entity] || '•'}</div><h1>${esc(title)}</h1></div>
    ${propsHTML(entity, rec)}${bodyText}${relSections}
  </div>`;
}

/* ---------------- modal ---------------- */
function openModal(title, fields, onSubmit, submitLabel = 'Save') {
  $('#modal-title').textContent = title;
  const f = $('#modal-form');
  f.innerHTML = fields.map(fl => {
    if (fl.type === 'note') return `<div class="modal-note">${fl.text}</div>`;
    if (fl.type === 'select') return `<div class="field"><label>${fl.label}</label><select name="${fl.name}">${fl.options.map(o => `<option value="${o.value}">${esc(o.label)}</option>`).join('')}</select></div>`;
    if (fl.type === 'textarea') return `<div class="field"><label>${fl.label}</label><textarea name="${fl.name}" placeholder="${fl.ph || ''}"></textarea></div>`;
    if (fl.type === 'checks') return `<div class="field"><label>${fl.label}</label><div class="checks">${fl.options.map(o => `<label><input type="checkbox" name="${fl.name}" value="${o.value}"> ${esc(o.label)}</label>`).join('')}</div></div>`;
    return `<div class="field"><label>${fl.label}</label><input name="${fl.name}" type="${fl.type || 'text'}" value="${fl.value || ''}" placeholder="${fl.ph || ''}"></div>`;
  }).join('') + `<button class="btn solid modal-submit" type="submit">${submitLabel}</button>`;
  f.onsubmit = async (e) => {
    e.preventDefault();
    const data = {};
    fields.forEach(fl => {
      if (fl.type === 'note') return;
      if (fl.type === 'checks') data[fl.name] = [...f.querySelectorAll(`[name="${fl.name}"]:checked`)].map(c => c.value);
      else data[fl.name] = f.querySelector(`[name="${fl.name}"]`).value.trim();
    });
    try { await onSubmit(data); closeModal(); rerender(); } catch (err) { toast(err.message, true); }
  };
  $('#modal').hidden = false;
}
const closeModal = () => { $('#modal').hidden = true; };

/* ---------------- actions ---------------- */
let cache = {};
async function ensureCache() {
  const [topics, platforms, accounts, categories] = await Promise.all([api.get('/api/topics'), api.get('/api/platforms'), api.get('/api/money').then(m => m.accounts), api.get('/api/money').then(m => m.categories)]);
  cache = { topics, platforms, accounts, categories };
}
const CONTENT_TYPES = ['Video', 'Article', 'Thread', 'Blog', 'Post', 'Podcast'];
const QUICK = {
  'new-content': async () => {
    await ensureCache();
    openModal('New Content — lands at Idea (INV-6)', [
      { name: 'title', label: 'Content title' },
      { name: 'content_type', label: 'Type', type: 'select', options: CONTENT_TYPES.map(v => ({ value: v, label: v })) },
      { name: 'topic_id', label: 'Topic', type: 'select', options: [{ value: '', label: '—' }, ...cache.topics.map(t => ({ value: t.id, label: t.category_name }))] }],
      async d => { await api.post('/api/capture', { kind: 'content', title: d.title, content_type: d.content_type, topic_id: d.topic_id ? +d.topic_id : null }); toast('Captured at <b>Idea</b>.'); });
  },
  'new-task': () => openModal('New Task — lands in Inbox (INV-6)', [
    { name: 'title', label: 'Task' },
    { name: 'priority', label: 'Priority', type: 'select', options: ['', 'High Priority', 'Medium Priority', 'Low Priority'].map(v => ({ value: v, label: v || '—' })) },
    { name: 'due_date', label: 'Due', type: 'date' }],
    async d => { await api.post('/api/capture', { kind: 'task', title: d.title, priority: d.priority || null, due_date: d.due_date || null }); toast('Task captured to <b>Inbox</b>.'); }),
  'new-note': () => openModal('New Note — lands in Inbox (INV-6)', [
    { name: 'title', label: 'Note title' }, { name: 'body', label: 'Body', type: 'textarea' }],
    async d => { await api.post('/api/capture', { kind: 'note', title: d.title, body: d.body }); toast('Note captured to <b>Inbox</b>.'); }),
  'new-sponsor': () => openModal('New Sponsor — lands in Inbox, unpaid (INV-6)', [
    { name: 'title', label: 'Sponsor name' },
    { name: 'amount', label: 'Amount ($, if known)', type: 'number' },
    { name: 'contact_details', label: 'Contact email' }],
    async d => { await api.post('/api/capture', { kind: 'sponsorship', title: d.title, amount: d.amount ? +d.amount : null, contact_details: d.contact_details || null }); toast('Sponsor lead captured — deal <b>Inbox</b>, payment <b>Inbox</b>.'); }),
  'new-money': async () => {
    await ensureCache();
    openModal('Money Entry — the month derives from the date (INV-9)', [
      { name: 'kind', label: 'Kind', type: 'select', options: [{ value: 'income', label: 'Income' }, { value: 'expense', label: 'Expense' }] },
      { name: 'name', label: 'Entry' },
      { name: 'amount', label: 'Amount ($)', type: 'number' },
      { name: 'date', label: 'Date', type: 'date', value: todayISO() },
      { name: 'account_id', label: 'Account', type: 'select', options: cache.accounts.map(a => ({ value: a.id, label: a.name })) },
      { name: 'category_id', label: 'Category (required by policy)', type: 'select', options: cache.categories.map(c => ({ value: c.id, label: c.name })) }],
      async d => { const r = await api.post('/api/money', { ...d, amount: +d.amount, account_id: +d.account_id, category_id: +d.category_id }); toast(`Recorded. Account balance now <b>${money(r.account_balance)}</b>.`); });
  },
  'check-habit': () => openModal('Check Habit — merges into today\'s one row (INV-8)', [
    { name: 'habits', label: 'Habits done', type: 'checks', options: HABITS.map(([k, l]) => ({ value: k, label: l })) }],
    async d => { const r = await api.post('/api/habits/check', { habits: d.habits }); toast(`Today at <b>${r.progress}%</b>.`); }),
};
const VERB = {
  'c-advance': async id => { const r = await api.post(`/api/content/${id}/advance`); toast(r.reverted ? `Reverted → <b>${r.status}</b>` : `Advanced → <b>${r.status}</b>`); rerender(); },
  'c-schedule': id => openModal('Schedule — a plan until Published, a record after (INV-3)', [
    { name: 'published_date', label: 'Publish date', type: 'date' }],
    async d => { const r = await api.post(`/api/content/${id}/schedule`, d); const n = r.neighborhood.length ? ` ±3d: ${r.neighborhood.map(x => esc(x.content_title)).join(', ')}` : ' Clear window.'; toast(`Scheduled <b>${fmtDate(r.published_date)}</b>.${n}`); }, 'Schedule'),
  's-advance': async id => { const r = await api.post(`/api/sponsorships/${id}/advance`, { machine: 'deal' }); toast(`Deal → <b>${r.status}</b>${r.mismatch ? ` ⚠ ${r.mismatch}` : ''}`); rerender(); },
  's-cancel': id => openModal('Cancel deal — a reason is required (INV-5)', [
    { name: 'canceled_reason', label: 'Reason', type: 'textarea', ph: 'Why did it die? The lesson is the record.' }],
    async d => { await api.post(`/api/sponsorships/${id}/advance`, { machine: 'deal', to: 'Canceled', canceled_reason: d.canceled_reason }); toast('Canceled, with the lesson recorded.'); }, 'Cancel deal'),
  's-pay': async id => { const r = await api.post(`/api/sponsorships/${id}/advance`, { machine: 'payment' }); toast(`Payment → <b>${r.payment}</b>${r.mismatch ? ` ⚠ ${r.mismatch}` : ''}`); rerender(); },
  't-done': async id => { await api.post('/api/set-status', { entity: 'task', id: +id, to: 'Completed' }); toast('Task <b>Completed</b>.'); rerender(); },
  'n-reviewed': async id => { await api.post('/api/set-status', { entity: 'note', id: +id, to: 'Reviewed' }); toast('Note <b>Reviewed</b>.'); rerender(); },
  'b-next': async id => {
    const flow = { 'Recently added': 'To Review', 'To Review': 'Review', 'To recreate': 'Review' };
    const bs = await api.get('/api/bookmarks'); const b = bs.find(x => x.id === +id);
    const to = flow[b.status] || 'Review';
    await api.post('/api/set-status', { entity: 'bookmark', id: +id, to }); toast(`Bookmark → <b>${to}</b>.`); rerender();
  },
  'b-archive': async id => { await api.post('/api/set-status', { entity: 'bookmark', id: +id, to: 'Archive' }); toast('Bookmark <b>Archived</b>.'); rerender(); },
  'p-next': async id => {
    const ps = await api.get('/api/projects'); const p = ps.find(x => x.id === +id);
    const to = p.status === 'Planning' ? 'In progress' : 'Completed';
    const r = await api.post('/api/set-status', { entity: 'project', id: +id, to });
    toast(`Project → <b>${to}</b>.${r.flag ? ' ⚠ ' + r.flag : ''}`); rerender();
  },
  'g-update': id => openModal('Update current — overwritten in place; the receipt remembers', [
    { name: 'current', label: 'New current value', type: 'number' }],
    async d => { const r = await api.post(`/api/growth/${id}/current`, { current: +d.current }); toast(`${Number(r.old).toLocaleString()} → <b>${Number(r.current).toLocaleString()}</b> (${r.progress}%)${r.backward ? ' — moved backward, recorded plainly' : ''}`); }, 'Update'),
  'h-tick': async (id, el) => {
    const { date, habit, val } = el.dataset;
    const r = await api.post('/api/habits/check', { date, habits: [habit], value: val === 'true' });
    toast(`${fmtDate(date)} at <b>${r.progress}%</b>.`); rerender();
  },
};

/* ---------------- router + wiring ---------------- */
const RENDER = { dashboard: renderDashboard, inbox: renderInbox, platforms: renderPlatforms, content: renderContent, calendar: renderCalendar, sponsorships: renderSponsorships, topics: renderTopics, growth: renderGrowth, notes: renderNotes, projects: renderProjects, finance: renderFinance, contacts: renderContacts, habits: renderHabits };
function setActive(sec) { document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.route === sec)); }
async function router() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const sec = parts[0] || 'dashboard';
  window.scrollTo(0, 0);
  try {
    if (sec === 'd') { setActive(''); await renderDetail(parts[1], parts[2]); }
    else { setActive(sec); await (RENDER[sec] || renderDashboard)(parts.slice(1)); }
  } catch (err) { $('#main').innerHTML = `<div class="empty">Error: ${esc(err.message)}</div>`; }
  api.get('/api/inbox').then(i => $('#nav-inbox').textContent = i.length || '').catch(() => {});
}
const rerender = () => router();

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]'); if (!t) return;
  const fn = QUICK[t.dataset.act] || VERB[t.dataset.act];
  if (fn) { e.preventDefault(); Promise.resolve(fn(t.dataset.id, t)).catch(err => toast(err.message, true)); }
});
$('#modal-x').onclick = closeModal;
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
window.addEventListener('hashchange', router);
router();
