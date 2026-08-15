// app.js — project-management-os front end. A faithful mirror of the Project Management System's
// read surface: the root dashboard sections + the 9 nav pages + Archive, over the runtime verbs.
// Thin skin — every gate lives server-side; this file only renders and calls.

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
const pretty = (k) => String(k).replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
const link = (entity, id, label) => `<a class="rowlink" href="#/d/${entity}/${id}">${esc(label)}</a>`;
const toast = (m, err = false) => { const t = $('#toast'); t.innerHTML = m; t.classList.toggle('err', err); t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, err ? 5600 : 3000); };

/* ---------------- model mirrors (option sets + status groups, for rendering only) ---------------- */
const STATUS_SETS = {
  project:  ['Inbox', 'Planning', 'In progress', 'Completed'],
  task:     ['Inbox', 'To-Do', 'In progress', 'Completed'],
  note:     ['Inbox', 'In reviewing', 'Pinned', 'Save'],
  resource: ['Inbox', 'Not reviewed', 'In reviewing', 'Pinned', 'Reviewed'],
};
const GROUP = { // to_do → hollow · in_progress → half · complete → filled (shape carries the state)
  'Inbox': 'to_do', 'To-Do': 'to_do', 'Planning': 'to_do', 'Not reviewed': 'to_do', 'Prospect/Lead': 'to_do',
  'In progress': 'in_progress', 'In reviewing': 'in_progress', 'Proposal': 'in_progress', 'Negotiate': 'in_progress',
  'Completed': 'complete', 'Pinned': 'complete', 'Save': 'complete', 'Reviewed': 'complete', 'Closed/Won': 'complete', 'Closed/Lost': 'complete',
};
const dotFor = (status) => `<span class="dot ${GROUP[status] === 'complete' ? '' : GROUP[status] === 'in_progress' ? 'half' : 'hollow'}"></span>`;
const stChip = (status) => status ? `<span class="st">${dotFor(status)}<span>${esc(status)}</span></span>` : '—';
const chip = (v, cls = '') => v ? `<span class="chip ${cls}">${esc(v)}</span>` : '';
const PRIORITIES = ['Low Priority', 'Medium Priority', 'High Priority'];
const ICON = { client: '◐', company: '◫', deal: '◆', meeting: '☰', folder: '▭', project: '▤', task: '✔', note: '✎', resource: '❖', event: '✦', news: '↗' };
const TITLE_FIELD = { client: 'client_name', company: 'name', deal: 'deal_name', meeting: 'name', folder: 'document_title', project: 'name', task: 'name', note: 'name', resource: 'name', event: 'name', news: 'name' };
const SECTION_OF = { client: 'contacts', company: 'contacts/companies', deal: 'contacts/deals', meeting: 'meetings', folder: 'folders', project: 'projects', task: 'projects/tasks', note: 'resources/notes', resource: 'resources', event: 'awareness', news: 'awareness/news' };
const REL_ENTITY = { clients: 'client', companies: 'company', deals: 'deal', meetings: 'meeting', documents: 'folder', tasks: 'task', notes: 'note', resources: 'resource', projects: 'project', blocked_by: 'project', blocking: 'project' };

/* ---------------- shared view bits ---------------- */
const head = (title, callout, accent) => `<div class="head"><h1>${esc(title)}${accent ? ` <em class="accent">${esc(accent)}</em>` : ''}</h1>${callout ? `<div class="callout"><span class="i">ℹ</span><div>${callout}</div></div>` : ''}</div>`;
const subtabs = (items, active) => `<div class="subtabs">${items.map(t => `<a class="subtab ${t.k === active ? 'active' : ''}" href="#${t.href}">${t.label}</a>`).join('')}</div>`;
const mini = (act, label, extra = '') => `<button class="btn mini" data-act="${act}" ${extra}>${label}</button>`;

/* ---------------- dashboard (board-report — the words the machine says) ---------------- */
async function renderDashboard() {
  const [r, counts] = await Promise.all([api.get('/api/report'), api.get('/api/counts')]);
  const metrics = [
    ['Open pipeline', money(r.pipeline.open_amount)],
    ['Open deals', r.pipeline.open_n],
    ['Inbox', `${r.inbox.n}${r.inbox.overdue ? ` <span class="overdue-n">· ${r.inbox.overdue} overdue</span>` : ''}`],
    ['Next actions', r.next_action.total],
    ['Blocked', r.blocked.length],
    ['Won', money(r.pipeline.won_amount)],
  ];
  const STAGES = ['Prospect/Lead', 'Proposal', 'Negotiate', 'Closed/Won', 'Closed/Lost'];
  const lanes = STAGES.map(s => {
    const b = r.pipeline.stages[s] || { n: 0, amount: 0 };
    return `<div class="lane ${GROUP[s] === 'complete' ? 'terminal' : ''}"><div class="lane-h">${dotFor(s)}<span>${esc(s)}</span></div><div class="lane-n">${b.n}</div><div class="lane-v">${money(b.amount)}</div></div>`;
  }).join('');
  const blocked = r.blocked.length
    ? `<table><thead><tr><th>Blocked project</th><th>Status</th><th>Waiting on</th></tr></thead><tbody>${r.blocked.map(b =>
        `<tr><td>${link('project', b.id, b.name)}</td><td>${stChip(b.status)}</td><td>${b.blockers.map(k => `${link('project', k.id, k.name)} ${stChip(k.status)}`).join(' · ')}</td></tr>`).join('')}</tbody></table>${r.cycles.length ? `<div class="callout"><span class="i">⚠</span><div>Block cycle recorded — every project in it is unstartable; untangling is the workspace's call.</div></div>` : ''}`
    : '<div class="empty">No blocked projects.</div>';
  const dbs = [['task', 'Tasks', 'projects/tasks'], ['project', 'Projects', 'projects'], ['note', 'Notes', 'resources/notes'], ['resource', 'Resources', 'resources'], ['client', 'Clients', 'contacts'], ['company', 'Companies', 'contacts/companies'], ['deal', 'Deals', 'contacts/deals'], ['meeting', 'Meetings', 'meetings'], ['folder', 'Folders', 'folders'], ['event', 'Events', 'awareness'], ['news', 'News', 'awareness/news']];
  $('#main').innerHTML = head('Dashboard', `Every number below is computed on read — the source ships <b>zero rollups and zero formulas</b>, so a drifted total can't exist.`, 'whole')
    + `<div class="metrics">${metrics.map(([k, v]) => `<div class="metric"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('')}</div>`
    + `<div class="db-grid">${dbs.map(([k, l, route]) => `<a class="db-card" href="#/${route}"><div class="n">${counts[k] ?? 0}</div><div class="l">${l}</div></a>`).join('')}</div>`
    + `<h3 class="sec-h">Deal Pipeline</h3><div class="lanes">${lanes}</div>`
    + `<h3 class="sec-h">Blocked Chain</h3>${blocked}`;
}

/* ---------------- inbox (the 4-source capture surface) ---------------- */
async function renderInbox(args) {
  const items = await api.get('/api/inbox');
  const kinds = ['all', 'task', 'project', 'note', 'resource'];
  const active = kinds.includes(args[0]) ? args[0] : 'all';
  const tabs = subtabs(kinds.map(k => ({ k, label: k === 'all' ? 'All' : pretty(k) + 's', href: '/inbox' + (k === 'all' ? '' : '/' + k) })), active);
  const filtered = active === 'all' ? items : items.filter(i => i.kind === active);
  const TT = { task: 'To-Do', project: 'Planning', resource: 'Not reviewed', note: 'In reviewing' };
  const body = `<div class="inbox">${filtered.map(it => `
    <div class="inbox-item ${it.overdue ? 'overdue' : ''}">
      <span class="chip ${it.overdue ? 'fill' : ''}">${it.kind}</span>
      <a class="body" href="#/d/${it.kind}/${it.id}"><h4>${esc(it.name)}</h4><p>${it.age_days}d in Inbox${it.overdue ? ' — past the 7-day triage clock' : ''}</p></a>
      ${mini('triage', `Triage → ${TT[it.kind]}`, `data-kind="${it.kind}" data-id="${it.id}"`)}
    </div>`).join('') || '<div class="empty">Inbox zero — capture\'s promise, kept.</div>'}</div>`;
  $('#main').innerHTML = head('Inbox', 'Everything captured at <b>status: Inbox</b> across the four sources — tasks, projects, notes, resources — awaiting triage. Items past the policy clock surface first.') + tabs + body;
}

/* ---------------- next action ---------------- */
async function renderNext() {
  const items = await api.get('/api/next-action');
  const body = `<table><thead><tr><th>Kind</th><th>Name</th><th>Status</th><th>Priority</th><th>Date</th><th></th></tr></thead><tbody>${items.map(it => `
    <tr><td><span class="chip soft">${it.kind}</span></td><td>${link(it.kind, it.id, it.name)}</td><td>${stChip(it.status)}</td>
    <td>${it.priority ? chip(it.priority) : '—'}</td><td class="num">${fmtDate(it.date)}</td>
    <td class="acts">${mini('status', 'Status', `data-kind="${it.kind}" data-id="${it.id}"`)}${mini('complete', '✓ Done', `data-kind="${it.kind}" data-id="${it.id}"`)}</td></tr>`).join('')}</tbody></table>`;
  $('#main').innerHTML = head('Next Action', 'The actionable statuses — to-do and in-progress groups, Inbox excluded. The tool surfaces; what to pursue is the workspace\'s call.') + (items.length ? body : '<div class="empty">Nothing actionable.</div>');
}

/* ---------------- projects & tasks ---------------- */
async function renderProjects(args) {
  const tab = ['tasks', 'timeline', 'calendar'].includes(args[0]) ? args[0] : 'projects';
  const tabs = subtabs([
    { k: 'projects', label: 'Projects', href: '/projects' }, { k: 'timeline', label: 'Timeline', href: '/projects/timeline' },
    { k: 'tasks', label: 'Tasks', href: '/projects/tasks' }, { k: 'calendar', label: 'Calendar', href: '/projects/calendar' }], tab);
  let body;
  if (tab === 'projects') {
    const ps = await api.get('/api/projects');
    body = `<table><thead><tr><th>Project</th><th>Status</th><th>Priority</th><th>Start</th><th>End</th><th></th></tr></thead><tbody>${ps.map(p => `
      <tr><td>${link('project', p.id, p.name)}${p.is_blocked ? ' <span class="chip soft">blocked</span>' : ''}</td><td>${stChip(p.status)}</td>
      <td>${p.priority ? chip(p.priority) : '—'}</td><td class="num">${fmtDate(p.start_date)}</td><td class="num">${fmtDate(p.end_date)}</td>
      <td class="acts">${mini('status', 'Status', `data-kind="project" data-id="${p.id}"`)}${mini('priority', 'Priority', `data-kind="project" data-id="${p.id}"`)}${mini('block', 'Block…', `data-id="${p.id}"`)}</td></tr>`).join('')}</tbody></table>`;
  } else if (tab === 'timeline') {
    body = timelineHTML(await api.get('/api/projects'));
  } else if (tab === 'tasks') {
    const ts = await api.get('/api/tasks');
    body = `<table><thead><tr><th>Task</th><th>Status</th><th>Priority</th><th>Projects</th><th>Due</th><th></th></tr></thead><tbody>${ts.map(t => `
      <tr><td>${link('task', t.id, t.name)}</td><td>${stChip(t.status)}</td><td>${t.priority ? chip(t.priority) : '—'}</td>
      <td>${(t.projects || []).map(p => link('project', p.id, p.name)).join(', ') || '—'}</td><td class="num">${fmtDate(t.due_date)}</td>
      <td class="acts">${t.status === 'Completed' ? '' : mini('status', 'Status', `data-kind="task" data-id="${t.id}"`) + mini('priority', 'Priority', `data-kind="task" data-id="${t.id}"`) + mini('complete', '✓ Done', `data-kind="task" data-id="${t.id}"`)}</td></tr>`).join('')}</tbody></table>`;
  } else {
    const ts = await api.get('/api/tasks');
    const byDay = {}; let anchor = null;
    ts.forEach(t => { const d = String(t.due_date || '').slice(0, 10); if (d) { (byDay[d] = byDay[d] || []).push({ id: t.id, label: t.name, entity: 'task' }); if (!anchor) anchor = d; } });
    const today = new Date().toISOString().slice(0, 10);
    const [Y, M] = args[1] ? args[1].split('-').map(Number) : today.split('-').map(Number);
    body = calendarHTML(Y, M, byDay, '/projects/calendar');
  }
  $('#main').innerHTML = head('Projects & Tasks', 'The execution half, hubbed on the project — tasks, the blocking chain, the delivery timeline.') + tabs + body;
}

function timelineHTML(projects) {
  const dated = projects.filter(p => p.start_date && p.end_date);
  if (!dated.length) return '<div class="empty">No dated projects.</div>';
  const min = Math.min(...dated.map(p => +new Date(p.start_date)));
  const max = Math.max(...dated.map(p => +new Date(p.end_date)));
  const span = Math.max(max - min, 1);
  const today = ((+new Date() - min) / span) * 100;
  return `<div class="timeline">
    <div class="tl-scale"><span>${fmtDate(new Date(min).toISOString())}</span><span>${fmtDate(new Date(max).toISOString())}</span></div>
    ${dated.map(p => {
      const l = ((+new Date(p.start_date) - min) / span) * 100;
      const w = Math.max(((+new Date(p.end_date) - +new Date(p.start_date)) / span) * 100, 1.5);
      return `<div class="tl-row"><div class="tl-name">${dotFor(p.status)} ${link('project', p.id, p.name)}</div>
        <div class="tl-track">${today >= 0 && today <= 100 ? `<i class="tl-today" style="left:${today}%"></i>` : ''}<span class="tl-bar ${GROUP[p.status]}" style="left:${l}%;width:${w}%"></span></div></div>`;
    }).join('')}</div>`;
}

function calendarHTML(Y, M, byDay, route) {
  const startDow = new Date(Date.UTC(Y, M - 1, 1)).getUTCDay();
  const days = new Date(Date.UTC(Y, M, 0)).getUTCDate();
  const todayKey = new Date().toISOString().slice(0, 10);
  let cells = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => `<div class="dow">${d}</div>`).join('');
  for (let i = 0; i < startDow; i++) cells += `<div class="cell out"></div>`;
  for (let d = 1; d <= days; d++) {
    const key = `${Y}-${String(M).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const evs = (byDay[key] || []).map(e => `<a class="ev" href="#/d/${e.entity}/${e.id}">${esc(e.label)}</a>`).join('');
    cells += `<div class="cell ${key === todayKey ? 'today' : ''}"><div class="dnum">${d}</div>${evs}</div>`;
  }
  const prev = M === 1 ? [Y - 1, 12] : [Y, M - 1], next = M === 12 ? [Y + 1, 1] : [Y, M + 1];
  const hr = (a) => `${a[0]}-${String(a[1]).padStart(2, '0')}`;
  return `<div class="cal-head"><h3>${MONTHS[M - 1]} ${Y}</h3><div class="cal-nav"><a class="btn mini" href="#${route}/${hr(prev)}">‹ Prev</a><a class="btn mini" href="#${route}/${hr(next)}">Next ›</a></div></div><div class="cal">${cells}</div>`;
}

/* ---------------- contacts & companies & deals (the CRM half) ---------------- */
function dealActions(d) {
  if (GROUP[d.stage] === 'complete') return '';
  const adv = d.stage === 'Negotiate' ? '<span class="gate"></span>Close Won' : '<span class="gate"></span>Advance';
  return mini('advance', adv, `data-id="${d.id}"`) + mini('lost', '<span class="gate"></span>Lost', `data-id="${d.id}"`);
}
async function renderContacts(args) {
  const tab = ['companies', 'deals'].includes(args[0]) ? args[0] : 'clients';
  const tabs = subtabs([{ k: 'clients', label: 'Contacts', href: '/contacts' }, { k: 'companies', label: 'Companies', href: '/contacts/companies' }, { k: 'deals', label: 'Deals', href: '/contacts/deals' }], tab);
  let body;
  if (tab === 'clients') {
    const cs = await api.get('/api/clients');
    body = `<table><thead><tr><th>Client</th><th>Email</th><th>Companies</th><th>Deals</th></tr></thead><tbody>${cs.map(c => `
      <tr><td>${link('client', c.id, c.client_name)}</td><td class="num">${esc(c.email || '—')}</td><td>${esc(c.companies || '—')}</td><td>${esc(c.deals || '—')}</td></tr>`).join('')}</tbody></table>`;
  } else if (tab === 'companies') {
    const cos = await api.get('/api/companies');
    body = `<table><thead><tr><th>Company</th><th>Location</th><th>Clients</th></tr></thead><tbody>${cos.map(c => `
      <tr><td>${link('company', c.id, c.name)}</td><td>${esc(c.location || '—')}</td><td>${esc(c.clients || '—')}</td></tr>`).join('')}</tbody></table>`;
  } else {
    const ds = await api.get('/api/deals');
    body = `<table><thead><tr><th>Deal</th><th>Amount</th><th>Clients</th><th>Stage</th><th></th></tr></thead><tbody>${ds.map(d => `
      <tr><td>${link('deal', d.id, d.deal_name)}</td><td class="num">${money(d.amount)}</td><td>${esc(d.clients || '—')}</td>
      <td>${stChip(d.stage)}${d.close_reason ? ` <span class="chip soft" title="${esc(d.close_reason)}">reason ✓</span>` : ''}</td>
      <td class="acts">${dealActions(d)}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#main').innerHTML = head('Contacts & Companies', 'The CRM half, hubbed on the client. The deal pipeline is the one real state machine — one gated step per pass; ◇ marks the gates.') + tabs + body;
}

/* ---------------- meetings ---------------- */
async function renderMeetings() {
  const ms = await api.get('/api/meetings');
  $('#main').innerHTML = head('Meetings', 'A meeting and its minutes are <b>two records</b> — the minutes note bridges onward to projects: client → meeting → note → project is the only path between the halves.')
    + `<table><thead><tr><th>Meeting</th><th>Date</th><th>Clients</th><th>Notes</th></tr></thead><tbody>${ms.map(m => `
      <tr><td>${link('meeting', m.id, m.name)}</td><td class="num">${fmtDate(m.date)}</td><td>${esc(m.clients || '— internal')}</td><td>${esc(m.notes || '—')}</td></tr>`).join('')}</tbody></table>`;
}

/* ---------------- resources & notes ---------------- */
async function renderResources(args) {
  const tab = args[0] === 'notes' ? 'notes' : 'resources';
  const tabs = subtabs([{ k: 'resources', label: 'Resources', href: '/resources' }, { k: 'notes', label: 'Notes', href: '/resources/notes' }], tab);
  let body;
  if (tab === 'resources') {
    const rs = await api.get('/api/resources');
    body = `<table><thead><tr><th>Resource</th><th>Type</th><th>Status</th><th>Projects</th><th>Date</th><th></th></tr></thead><tbody>${rs.map(r => `
      <tr><td>${link('resource', r.id, r.name)}</td><td>${chip(r.type, 'soft')}</td><td>${stChip(r.status)}</td><td>${esc(r.projects || '—')}</td><td class="num">${fmtDate(r.date)}</td>
      <td class="acts">${GROUP[r.status] === 'complete' ? '' : mini('status', 'Status', `data-kind="resource" data-id="${r.id}"`) + mini('complete', 'Reviewed', `data-kind="resource" data-id="${r.id}"`) + mini('pin', 'Pin', `data-kind="resource" data-id="${r.id}"`)}</td></tr>`).join('')}</tbody></table>`;
  } else {
    const ns = await api.get('/api/notes');
    body = `<table><thead><tr><th>Note</th><th>Status</th><th>Tags</th><th>Meetings</th><th>Projects</th><th></th></tr></thead><tbody>${ns.map(n => `
      <tr><td>${link('note', n.id, n.name)}</td><td>${stChip(n.status)}</td><td>${(n.tags || []).map(t => chip(t, 'soft')).join(' ') || '—'}</td>
      <td>${esc(n.meetings || '—')}</td><td>${esc(n.projects || '—')}</td>
      <td class="acts">${GROUP[n.status] === 'complete' ? '' : mini('status', 'Status', `data-kind="note" data-id="${n.id}"`) + mini('complete', 'Save', `data-kind="note" data-id="${n.id}"`) + mini('pin', 'Pin', `data-kind="note" data-id="${n.id}"`)}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#main').innerHTML = head('Resources & Notes', 'The review flows — for notes and resources, <b>complete means filed</b>, not finished: Pinned sits in the complete group on purpose.') + tabs + body;
}

/* ---------------- events & news (the awareness feeds) ---------------- */
async function renderAwareness(args) {
  const tab = args[0] === 'news' ? 'news' : 'events';
  const tabs = subtabs([{ k: 'events', label: 'Events', href: '/awareness' }, { k: 'news', label: 'News', href: '/awareness/news' }], tab);
  let body;
  if (tab === 'events') {
    const evs = await api.get('/api/events');
    body = `<table><thead><tr><th>Event</th><th>Date</th><th>Type</th></tr></thead><tbody>${evs.map(e => `
      <tr><td>${link('event', e.id, e.name)}</td><td class="num">${fmtDate(e.date)}</td><td>${esc(e.type || '—')}</td></tr>`).join('')}</tbody></table>
      <div class="callout"><span class="i">ℹ</span><div>Event's <b>type</b> option set is empty in the source, and its only relation points outside this product — dormant standalone, bindable at mount.</div></div>`;
  } else {
    const ns = await api.get('/api/news');
    body = `<table><thead><tr><th>News</th><th>Date</th><th>Link</th></tr></thead><tbody>${ns.map(n => `
      <tr><td>${link('news', n.id, n.name)}</td><td class="num">${fmtDate(n.date)}</td><td class="num">${n.url ? `<a class="rowlink" href="${esc(n.url)}" target="_blank" rel="noopener">${esc(n.url)}</a>` : '—'}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#main').innerHTML = head('Events & News', 'The awareness feeds — external happenings and industry bookmarks. News relates to nothing, by design.') + tabs + body;
}

/* ---------------- folders ---------------- */
async function renderFolders() {
  const fs = await api.get('/api/folders');
  $('#main').innerHTML = head('Folders', 'Formal document records — contracts, policies, reports — tied to their clients. (The type option <b>Contact</b> is the source\'s probable typo for Contract, encoded as-is.)')
    + `<table><thead><tr><th>Document</th><th>Type</th><th>Author</th><th>File</th><th>Created</th><th>Clients</th></tr></thead><tbody>${fs.map(f => `
      <tr><td>${link('folder', f.id, f.document_title)}</td><td>${chip(f.type, 'soft')}</td><td>${esc(f.author || '—')}</td>
      <td class="num">${esc(f.files || '—')}</td><td class="num">${fmtDate(f.create_date)}</td><td>${esc(f.clients || '—')}</td></tr>`).join('')}</tbody></table>`;
}

/* ---------------- archive ---------------- */
async function renderArchive(args) {
  const items = await api.get('/api/archive');
  const kinds = ['all', 'task', 'project', 'note', 'resource', 'deal'];
  const active = kinds.includes(args[0]) ? args[0] : 'all';
  const tabs = subtabs(kinds.map(k => ({ k, label: k === 'all' ? 'All' : pretty(k) + 's', href: '/archive' + (k === 'all' ? '' : '/' + k) })), active);
  const filtered = active === 'all' ? items : items.filter(i => i.kind === active);
  $('#main').innerHTML = head('Archive', 'A <b>view, not a place</b> — every record below still lives in its own collection with every edge intact; archiving was a status flip.') + tabs
    + `<table><thead><tr><th>Kind</th><th>Record</th><th>End state</th></tr></thead><tbody>${filtered.map(i => `
      <tr><td><span class="chip soft">${i.kind}</span></td><td>${link(i.kind, i.id, i.name)}</td><td>${stChip(i.state)}</td></tr>`).join('')}</tbody></table>`;
}

/* ---------------- detail page (the interconnectedness) ---------------- */
const DATE_KEYS = ['date', 'due_date', 'start_date', 'end_date', 'create_date'];
function propsHTML(entity, rec) {
  const skip = new Set(['id', TITLE_FIELD[entity]]);
  const rows = [];
  for (const [k, v] of Object.entries(rec)) {
    if (skip.has(k) || v === null || v === undefined || v === '') continue;
    let val;
    if (k === 'amount') val = money(v);
    else if (DATE_KEYS.includes(k)) val = fmtDate(v);
    else if (k === 'status' || k === 'stage') val = stChip(v);
    else if (k === 'tags' && Array.isArray(v)) val = v.map(t => chip(t, 'soft')).join(' ');
    else if (k === 'priority' || k === 'type') val = chip(v);
    else if (k === 'url') val = `<a class="rowlink" href="${esc(v)}" target="_blank" rel="noopener">${esc(v)}</a>`;
    else if (k === 'is_blocked') continue;
    else val = esc(v);
    rows.push([pretty(k), val]);
  }
  return rows.length ? `<div class="props">${rows.map(([k, v]) => `<div class="pk">${k}</div><div class="pv">${v}</div>`).join('')}</div>` : '';
}
async function renderDetail(entity, id) {
  const data = await api.get(`/api/detail/${entity}/${id}`);
  const rec = data.record, rels = data.relations || {};
  const title = rec[TITLE_FIELD[entity]] || 'Untitled';
  const relSections = Object.entries(rels).map(([k, arr]) => {
    const ent = REL_ENTITY[k] || k;
    const chips = arr.map(r => `<a class="relchip" href="#/d/${ent}/${r.id}"><span class="ic">${ICON[ent] || '•'}</span>${esc(r.name)}</a>`).join('');
    return `<div class="rel"><h3>${pretty(k)}<span class="c">${arr.length}</span></h3>${arr.length ? `<div class="relchips">${chips}</div>` : '<div class="empty">None</div>'}</div>`;
  }).join('');
  const external = entity === 'event' ? `<div class="rel"><h3>Employees<span class="c">external</span></h3><div class="empty">Dormant standalone — targets another product's collection; a mounting workspace binds it (MOUNT.md).</div></div>` : '';
  const back = SECTION_OF[entity] || 'dashboard';
  $('#main').innerHTML = `<div class="detail">
    <div class="crumb"><a href="#/${back}">← ${pretty(back.split('/').pop())}</a></div>
    <div class="detail-head"><div class="dicon">${ICON[entity] || '•'}</div><h1>${esc(title)}</h1></div>
    ${propsHTML(entity, rec)}${relSections}${external}
  </div>`;
}

/* ---------------- modal ---------------- */
function openModal(title, fields, onSubmit, submitLabel = 'Save') {
  $('#modal-title').textContent = title;
  const f = $('#modal-form');
  f.innerHTML = fields.map(fl => {
    if (fl.type === 'note') return `<div class="modal-note">${fl.text}</div>`;
    if (fl.type === 'select') return `<div class="field"><label>${fl.label}</label><select name="${fl.name}">${fl.options.map(o => `<option value="${esc(o.value)}">${esc(o.label)}</option>`).join('')}</select></div>`;
    if (fl.type === 'textarea') return `<div class="field"><label>${fl.label}</label><textarea name="${fl.name}" placeholder="${fl.ph || ''}"></textarea></div>`;
    return `<div class="field"><label>${fl.label}</label><input name="${fl.name}" type="${fl.type || 'text'}" value="${fl.value || ''}" placeholder="${fl.ph || ''}"></div>`;
  }).join('') + `<button class="btn solid modal-submit" type="submit">${submitLabel}</button>`;
  f.onsubmit = async (e) => {
    e.preventDefault();
    const data = {};
    fields.forEach(fl => { if (fl.type !== 'note') data[fl.name] = f.querySelector(`[name="${fl.name}"]`).value.trim(); });
    try { await onSubmit(data); closeModal(); rerender(); } catch (err) { toast(err.message, true); }
  };
  $('#modal').hidden = false;
}
const closeModal = () => { $('#modal').hidden = true; };

/* ---------------- quick actions (the source's 5 dashboard buttons, as verbs) ---------------- */
const RECORD_FIELDS = {
  client:  [{ name: 'name', label: 'Client name' }, { name: 'email', label: 'Email', type: 'email' }, { name: 'note', label: 'Note' }],
  company: [{ name: 'name', label: 'Company name' }, { name: 'location', label: 'Location' }],
  event:   [{ name: 'name', label: 'Event name' }, { name: 'date', label: 'Date', type: 'date' }],
  news:    [{ name: 'name', label: 'Headline' }, { name: 'date', label: 'Date', type: 'date' }, { name: 'url', label: 'URL', type: 'url' }],
  folder:  [{ name: 'name', label: 'Document title' }, { name: 'author', label: 'Author (team)' },
            { name: 'type', label: 'Type', type: 'select', options: ['Research Paper', 'Policy Document', 'User Manual', 'Report', 'Contact'].map(v => ({ value: v, label: v })) }],
};
const QUICK = {
  'capture': () => openModal('Capture', [
    { type: 'note', text: 'Anything in, <b>Inbox</b> status, zero friction — triage happens later, never at capture.' },
    { name: 'kind', label: 'Kind', type: 'select', options: ['note', 'task', 'project', 'resource'].map(v => ({ value: v, label: pretty(v) })) },
    { name: 'name', label: 'What is it?' }],
    async d => { const r = await api.post('/api/capture', d); toast(`Captured ${r.kind} to <b>Inbox</b>.`); }, 'Capture'),
  'new-deal': async () => {
    const cs = await api.get('/api/clients');
    if (!cs.length) return toast('Add a client first (INV-5: no orphan deals).', true);
    openModal('New Deal', [
      { name: 'deal_name', label: 'Deal name' },
      { name: 'client_id', label: 'Client (INV-5)', type: 'select', options: cs.map(c => ({ value: c.id, label: c.client_name })) },
      { name: 'amount', label: 'Amount ($)', type: 'number' }],
      async d => { await api.post('/api/deals', { deal_name: d.deal_name, client_ids: [+d.client_id], amount: +d.amount || 0 }); toast('Deal opened at <b>Prospect/Lead</b>.'); });
  },
  'log-meeting': async () => {
    const cs = await api.get('/api/clients');
    openModal('Log Meeting', [
      { name: 'name', label: 'Meeting name' }, { name: 'date', label: 'Date', type: 'date' },
      { name: 'client_id', label: 'Client (optional — internal syncs exist)', type: 'select', options: [{ value: '', label: '— none —' }, ...cs.map(c => ({ value: c.id, label: c.client_name }))] },
      { name: 'minutes', label: 'Minutes (optional → becomes a note in Inbox)', type: 'textarea' }],
      async d => { const r = await api.post('/api/meetings', { name: d.name, date: d.date || null, client_id: d.client_id ? +d.client_id : null, minutes: d.minutes }); toast(r.note_id ? 'Meeting logged; minutes captured to <b>Inbox</b> as a note.' : 'Meeting logged.'); }, 'Log');
  },
  'new-record': () => openModal('New Record', [
    { type: 'note', text: 'Plain creates only — client · company · event · news · folder. Inbox-carriers go through <b>Capture</b>; deals through <b>New Deal</b>.' },
    { name: 'entity', label: 'Entity', type: 'select', options: ['client', 'company', 'event', 'news', 'folder'].map(v => ({ value: v, label: pretty(v) })) }],
    async d => { QUICK._recordStep2(d.entity); }, 'Next'),
  _recordStep2: (entity) => setTimeout(() => openModal(`New ${pretty(entity)}`, RECORD_FIELDS[entity],
    async d => { const { name, ...rest } = d; await api.post('/api/records', { entity, fields: { name, ...rest } }); toast(`${pretty(entity)} recorded.`); }), 30),
};

/* ---------------- row verbs ---------------- */
const VERB = {
  triage: async (el) => { const r = await api.post(`/api/triage/${el.dataset.kind}/${el.dataset.id}`); toast(`Triaged → <b>${r.status}</b>.`); rerender(); },
  advance: async (el) => { const r = await api.post(`/api/deals/${el.dataset.id}/advance`); toast(`Stage → <b>${r.stage}</b>.`); rerender(); },
  lost: (el) => {
    const id = el.dataset.id;
    openModal('Close Lost', [
      { type: 'note', text: '<b>INV-4</b> — a deal reaches Closed/Lost only with a recorded reason. An unrecorded loss is the most expensive row in the system.' },
      { name: 'close_reason', label: 'Close reason (required)', type: 'textarea' }],
      async d => { await api.post(`/api/deals/${id}/advance`, { to: 'Closed/Lost', close_reason: d.close_reason }); toast('Closed <b>Lost</b>, reason recorded.'); }, 'Close Lost');
  },
  status: (el) => {
    const kind = el.dataset.kind, id = el.dataset.id;
    openModal(`Set Status — ${pretty(kind)}`, [
      { name: 'to', label: `Status (${kind}'s own option set)`, type: 'select', options: STATUS_SETS[kind].map(v => ({ value: v, label: v })) }],
      async d => { const r = await api.post(`/api/status/${kind}/${id}`, d); toast(`Status → <b>${r.status}</b>${r.archived ? ' — now surfaces in Archive (a flip, not a move).' : '.'}`); });
  },
  priority: (el) => {
    const kind = el.dataset.kind, id = el.dataset.id;
    openModal(`Prioritize — ${pretty(kind)}`, [
      { type: 'note', text: 'The tool records the call; it never makes it. What earns High is the workspace\'s judgment (INV-8).' },
      { name: 'priority', label: 'Priority', type: 'select', options: PRIORITIES.map(v => ({ value: v, label: v })) }],
      async d => { const r = await api.post(`/api/prioritize/${kind}/${id}`, d); toast(`Priority → <b>${r.priority}</b>.`); });
  },
  complete: async (el) => { const r = await api.post(`/api/archive/${el.dataset.kind}/${el.dataset.id}`); toast(`Filed as <b>${r.status}</b> — a status flip; every edge still resolves.`); rerender(); },
  pin: async (el) => { const r = await api.post(`/api/archive/${el.dataset.kind}/${el.dataset.id}`, { as: 'Pinned' }); toast(`Filed as <b>${r.status}</b>.`); rerender(); },
  block: async (el) => {
    const id = +el.dataset.id;
    const ps = await api.get('/api/projects');
    openModal('Block Project', [
      { type: 'note', text: 'One declaration writes <b>both sides</b> of the pair (INV-6). A project never blocks itself.' },
      { name: 'blocker_id', label: 'Waiting on', type: 'select', options: ps.map(p => ({ value: p.id, label: p.name })) }],
      async d => { await api.post('/api/block', { blocked_id: id, blocker_id: +d.blocker_id }); toast('Block recorded — both sides written.'); }, 'Block');
  },
};
/* ---------------- router + wiring ---------------- */
const RENDER = { dashboard: renderDashboard, inbox: renderInbox, next: renderNext, projects: renderProjects, contacts: renderContacts, meetings: renderMeetings, resources: renderResources, awareness: renderAwareness, folders: renderFolders, archive: renderArchive };
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
  if (fn) { e.preventDefault(); Promise.resolve(fn(t)).catch(err => toast(err.message, true)); }
});
$('#modal-x').onclick = closeModal;
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
window.addEventListener('hashchange', router);
router();
