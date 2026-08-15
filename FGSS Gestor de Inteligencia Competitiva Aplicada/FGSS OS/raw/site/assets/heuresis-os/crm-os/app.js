// app.js — CRM-OS front end. A faithful, interconnected mirror of the Advanced Business CRM.
// Thin skin over the verbs/model: 10 database views + clickable detail pages. No business logic here.

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
const chip = (v, cls = '') => v ? `<span class="chip ${cls}">${esc(v)}</span>` : '';
const link = (entity, id, label, cls = '') => `<a class="${cls}" href="#/d/${entity}/${id}">${esc(label)}</a>`;
const toast = (m, err = false) => { const t = $('#toast'); t.innerHTML = m; t.classList.toggle('err', err); t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, err ? 5200 : 3000); };

// deterministic monochrome cover art (topographic rings) + initials avatar
function hash(s) { let h = 2166136261 >>> 0; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function mulberry(a) { return function () { a = a + 0x6D2B79F5 >>> 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function cover(seed) {
  const rng = mulberry(hash(String(seed)));
  const cx = 60 + rng() * 80, cy = 15 + rng() * 80, rot = rng() * 180, sq = 0.5 + rng() * 0.8;
  let rings = '';
  for (let i = 1; i <= 12; i++) { const r = i * 8.6 * (0.72 + rng() * 0.45); rings += `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${r.toFixed(1)}" ry="${(r * sq).toFixed(1)}" transform="rotate(${rot.toFixed(0)} ${cx.toFixed(1)} ${cy.toFixed(1)})"/>`; }
  return `<svg viewBox="0 0 200 118" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="currentColor" stroke-width="0.7">${rings}</g></svg>`;
}
const avatar = (name) => `<div class="avatar-init">${esc(String(name).trim().split(/\s+/).map(w => w[0] || '').slice(0, 2).join('').toUpperCase())}</div>`;

const ICON = { company: '◫', contact: '◐', deal: '◆', sale: '✦', product: '❖', note: '✎', meeting: '☰', project: '▤', task: '✔', document: '▭' };
const TITLE_FIELD = { company: 'name', contact: 'name', deal: 'deal_name', sale: 'title', product: 'name', note: 'note_title', meeting: 'meeting_title', project: 'project_name', task: 'name', document: 'title' };
const SECTION_OF = { company: 'contacts/companies', contact: 'contacts', deal: 'deals', sale: 'deals/sales', product: 'products', note: 'notes', document: 'notes/documents', meeting: 'meetings', project: 'projects', task: 'projects/tasks' };
const REL_ENTITY = { contacts: 'contact', contact: 'contact', companies: 'company', company: 'company', deals: 'deal', deal: 'deal', documents: 'document', document: 'document', sales: 'sale', sale: 'sale', meetings: 'meeting', meeting: 'meeting', notes: 'note', note: 'note', attendees: 'contact', tasks: 'task', task: 'task', products: 'product', product: 'product', projects: 'project', project: 'project', rep: 'contact', author: 'contact' };
const LINK_FIELD = { company: 'company', contact: 'contact', deal: 'deal', rep: 'contact', author: 'contact', project: 'project', meeting: 'meeting' };
const MONEY_KEYS = ['deal_value', 'sales_amount', 'price'];
const DATE_KEYS = ['expected_close_date', 'sale_date', 'date_created', 'meeting_date', 'due_date', 'project_date'];
const CHIP_KEYS = ['status', 'type', 'industry', 'category', 'priority'];

/* ---------------- shared view bits ---------------- */
const head = (title, callout) => `<div class="head"><h1>${esc(title)}</h1>${callout ? `<div class="callout"><span class="i">ℹ</span><div>${esc(callout)}</div></div>` : ''}</div>`;
const subtabs = (items, active) => `<div class="subtabs">${items.map(t => `<a class="subtab ${t.k === active ? 'active' : ''}" href="#${t.href}">${t.label}</a>`).join('')}</div>`;
const progressBar = (p) => { p = Number(p) || 0; return `<div class="progress"><div class="bar"><span style="width:${p}%"></span></div><span class="pct">${p}%</span></div>`; };

function galleryHTML(items) {
  if (!items.length) return '<div class="empty">Nothing here yet.</div>';
  return `<div class="gallery">${items.map(it => {
    let cov = '';
    if (it.cover === 'cover') cov = `<div class="cover">${cover(it.coverSeed || it.title)}</div>`;
    else if (it.cover === 'avatar') cov = `<div class="avatarwrap">${avatar(it.coverSeed || it.title)}</div>`;
    const rows = (it.rows || []).filter(r => r && r[1]).map(r => `<div class="row"><span class="ic">${r[0]}</span>${esc(r[1])}</div>`).join('');
    const chips = (it.chips || []).filter(Boolean).map(c => chip(c)).join('');
    return `<a class="gcard" href="#/d/${it.entity}/${it.id}">${cov}<div class="body"><h4>${esc(it.title)}</h4>${rows}${chips ? `<div class="chips">${chips}</div>` : ''}</div></a>`;
  }).join('')}</div>`;
}

/* ---------------- deals board ---------------- */
const STATUS_ORDER = ['Proposal Sent', 'Needs Follow-Up', 'Negotiation', 'Contract Pending', 'Contract Signed', 'Lost'];
const TERMINAL = ['Contract Signed', 'Lost'];
function dealActions(d) {
  const b = (act, label) => `<button class="btn mini" data-act="${act}" data-id="${d.id}">${label}</button>`;
  if (TERMINAL.includes(d.status)) return b('log', 'Log');
  if (d.status === 'Needs Follow-Up') return b('advance', 'Re-engage') + b('log', 'Log') + b('lost', 'Lost');
  if (d.status === 'Contract Pending') return b('book', '<span class="gate"></span>Book sale') + b('log', 'Log') + b('lost', 'Lost');
  return b('advance', 'Advance →') + b('log', 'Log') + b('lost', 'Lost');
}
function dealCard(d) {
  const stalled = !TERMINAL.includes(d.status) && d.days_idle >= 4;
  return `<article class="card"><div class="card-top"><span class="val">${money(d.deal_value)}</span><span class="idle ${stalled ? 'hot' : ''}">${d.days_idle}d idle</span></div>
    <h4>${link('deal', d.id, d.deal_name)}</h4>
    <div class="meta">${esc(d.company)} · ${esc(d.contact)}</div>
    <div class="card-actions">${dealActions(d)}</div></article>`;
}
// state mark per lane — filled: recorded · half: in motion · hollow: dormant
const laneDot = (st) => st === 'Contract Signed' ? 'dot' : st === 'Lost' ? 'dot hollow' : 'dot half';
function boardHTML(deals) {
  return `<div class="board">${STATUS_ORDER.map(st => {
    const items = deals.filter(d => d.status === st);
    const sum = items.reduce((a, d) => a + Number(d.deal_value), 0);
    const cls = st === 'Needs Follow-Up' ? 'lane risk' : TERMINAL.includes(st) ? 'lane terminal' : 'lane';
    return `<section class="${cls}"><div class="lane-head"><span class="name"><span class="${laneDot(st)}"></span>${st}</span><span class="sum">${items.length} · ${money(sum)}</span></div><div class="lane-body">${items.map(dealCard).join('') || '<div class="empty">—</div>'}</div></section>`;
  }).join('')}</div>`;
}

/* ---------------- section renderers ---------------- */
async function renderDashboard() {
  const [report, counts, deals] = await Promise.all([api.get('/api/report'), api.get('/api/counts'), api.get('/api/board')]);
  const m = [['Open pipeline', money(report.openRaw)], ['Weighted', money(report.weighted)], ['Won', money(report.won)]];
  const dbs = [['contacts', 'Contacts', 'contacts'], ['companies', 'Companies', 'contacts/companies'], ['deals', 'Deals', 'deals'], ['sales', 'Sales', 'deals/sales'], ['products', 'Products', 'products'], ['projects', 'Projects', 'projects'], ['tasks', 'Tasks', 'projects/tasks'], ['notes', 'Notes', 'notes'], ['meetings', 'Meetings', 'meetings'], ['documents', 'Documents', 'notes/documents']];
  $('#main').innerHTML = `<div class="metrics">${m.map(([k, v]) => `<div class="metric"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('')}</div>`
    + `<div class="db-grid">${dbs.map(([k, l, r]) => `<a class="db-card" href="#/${r}"><div class="n">${counts[k] ?? 0}</div><div class="l">${l}</div></a>`).join('')}</div>`
    + `<h3 class="sec-h">Deals Pipeline</h3>`
    + boardHTML(deals);
}

async function renderContacts(args) {
  const tab = args[0] === 'companies' ? 'companies' : 'contacts';
  const tabs = subtabs([{ k: 'contacts', label: 'Contacts', href: '/contacts' }, { k: 'companies', label: 'Companies', href: '/contacts/companies' }], tab);
  let body;
  if (tab === 'contacts') {
    const cs = await api.get('/api/contacts');
    body = galleryHTML(cs.map(c => ({ entity: 'contact', id: c.id, title: c.name, cover: 'avatar', rows: [['✉', c.email], ['☎', c.phone], ['◫', c.companies]], chips: [c.type] })));
  } else {
    const cos = await api.get('/api/companies');
    body = galleryHTML(cos.map(c => ({ entity: 'company', id: c.id, title: c.name, cover: 'cover', coverSeed: c.name, rows: [['◇', c.industry], ['⌖', c.location], ['↗', c.website]], chips: [c.status] })));
  }
  $('#main').innerHTML = head('Contacts & Companies', 'People and organizations — the hub the whole CRM links through.') + tabs + body;
}

async function renderDeals(args) {
  const tab = args[0] === 'sales' ? 'sales' : 'deals';
  const tabs = subtabs([{ k: 'deals', label: 'Deals', href: '/deals' }, { k: 'sales', label: 'Sales Pipeline', href: '/deals/sales' }], tab);
  let body;
  if (tab === 'deals') { body = boardHTML(await api.get('/api/board')); }
  else {
    const ss = await api.get('/api/sales');
    body = galleryHTML(ss.map(s => ({ entity: 'sale', id: s.id, title: s.title, rows: [['✦', money(s.sales_amount)], ['◷', fmtDate(s.sale_date)], ['◆', s.deal_name], ['❖', s.products]] })));
  }
  $('#main').innerHTML = head('Deals & Sales', 'Track deals through the pipeline; book revenue as sales.') + tabs + body;
}

async function renderProducts() {
  const ps = await api.get('/api/products');
  const body = galleryHTML(ps.map(p => ({ entity: 'product', id: p.id, title: p.name, rows: [['$', money(p.price)]], chips: [p.category] })));
  $('#main').innerHTML = head('Products & Services', 'The catalog of offerings sold on deals.') + body;
}

async function renderProjects(args) {
  const tab = args[0] === 'tasks' ? 'tasks' : 'projects';
  const tabs = subtabs([{ k: 'projects', label: 'Projects', href: '/projects' }, { k: 'tasks', label: 'Tasks', href: '/projects/tasks' }], tab);
  let body;
  if (tab === 'projects') {
    const ps = await api.get('/api/projects');
    body = `<table><thead><tr><th>Project</th><th>Status</th><th>Tasks</th><th>Progress</th><th>Date</th></tr></thead><tbody>${ps.map(p => `<tr><td>${link('project', p.id, p.project_name)}</td><td>${chip(p.status, 'soft')}</td><td>${p.task_done}/${p.task_total}</td><td>${progressBar(p.progress)}</td><td>${fmtDate(p.project_date)}</td></tr>`).join('')}</tbody></table>`;
  } else {
    const ts = await api.get('/api/tasks');
    body = `<table><thead><tr><th>Task</th><th>Status</th><th>Priority</th><th>Done</th><th>Project</th><th>Due</th></tr></thead><tbody>${ts.map(t => `<tr><td>${link('task', t.id, t.name)}</td><td>${chip(t.status, 'soft')}</td><td>${chip(t.priority)}</td><td class="check">${t.completed ? '✔' : '—'}</td><td>${t.project ? link('project', t.project_id, t.project) : '—'}</td><td>${fmtDate(t.due_date)}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#main').innerHTML = head('Projects & Tasks', 'Delivery work — projects roll up their tasks into a progress %.') + tabs + body;
}

async function renderNotes(args) {
  const tab = args[0] === 'documents' ? 'documents' : 'notes';
  const tabs = subtabs([{ k: 'notes', label: 'Notes', href: '/notes' }, { k: 'documents', label: 'Documents', href: '/notes/documents' }], tab);
  let body;
  if (tab === 'notes') {
    const ns = await api.get('/api/notes');
    body = galleryHTML(ns.map(n => ({ entity: 'note', id: n.id, title: n.note_title, rows: [['◷', fmtDate(n.date_created)], n.meeting ? ['☰', n.meeting] : null], chips: [n.status, ...(n.tags || [])] })));
  } else {
    const ds = await api.get('/api/documents');
    body = `<table><thead><tr><th>Title</th><th>Category</th><th>Company</th><th>Date</th><th>Tags</th></tr></thead><tbody>${ds.map(d => `<tr><td>${link('document', d.id, d.title)}</td><td>${chip(d.category)}</td><td>${esc(d.company || '—')}</td><td>${fmtDate(d.date_created)}</td><td>${(d.tags || []).map(t => chip(t, 'soft')).join(' ')}</td></tr>`).join('')}</tbody></table>`;
  }
  $('#main').innerHTML = head('Notes & Documents', 'Captured notes and stored documents.') + tabs + body;
}

async function renderMeetings(args) {
  const ms = await api.get('/api/meetings');
  const byDay = {}; let anchor = null;
  ms.forEach(m => { const d = String(m.meeting_date || '').slice(0, 10); if (d) { (byDay[d] = byDay[d] || []).push(m); if (!anchor) anchor = d; } });
  const [Y, M] = args[0] ? args[0].split('-').map(Number) : (anchor ? anchor.split('-').map(Number) : [2024, 4]);
  $('#main').innerHTML = head('Meetings', 'Appointments and minutes, on the calendar.') + calendarHTML(Y, M, byDay);
}
function calendarHTML(Y, M, byDay) {
  const startDow = new Date(Date.UTC(Y, M - 1, 1)).getUTCDay();
  const days = new Date(Date.UTC(Y, M, 0)).getUTCDate();
  const dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let cells = dow.map(d => `<div class="dow">${d}</div>`).join('');
  for (let i = 0; i < startDow; i++) cells += `<div class="cell out"></div>`;
  for (let d = 1; d <= days; d++) {
    const key = `${Y}-${String(M).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const evs = (byDay[key] || []).map(m => `<a class="ev" href="#/d/meeting/${m.id}">${esc(m.meeting_title)}</a>`).join('');
    cells += `<div class="cell"><div class="dnum">${d}</div>${evs}</div>`;
  }
  const prev = M === 1 ? [Y - 1, 12] : [Y, M - 1], next = M === 12 ? [Y + 1, 1] : [Y, M + 1];
  const hr = (a) => `${a[0]}-${String(a[1]).padStart(2, '0')}`;
  return `<div class="cal-head"><h3>${MONTHS[M - 1]} ${Y}</h3><div class="cal-nav"><a class="btn mini" href="#/meetings/${hr(prev)}">‹ Prev</a><a class="btn mini" href="#/meetings/${hr(next)}">Next ›</a></div></div><div class="cal">${cells}</div>`;
}

async function renderInbox(args) {
  const items = await api.get('/api/inbox');
  const kinds = ['all', 'company', 'note', 'task', 'project'];
  const active = args[0] && kinds.includes(args[0]) ? args[0] : 'all';
  const tabs = subtabs(kinds.map(k => ({ k, label: k === 'all' ? 'All' : pretty(k) + 's', href: '/inbox' + (k === 'all' ? '' : '/' + k) })), active);
  const filtered = active === 'all' ? items : items.filter(i => i.kind === active);
  const body = `<div class="inbox">${filtered.map(it => `<a class="inbox-item" href="#/d/${it.kind}/${it.id}"><span class="chip">${it.kind}</span><div class="body"><h4>${esc(it.title)}</h4>${it.body ? `<p>${esc(it.body)}</p>` : ''}</div></a>`).join('') || '<div class="empty">Inbox zero.</div>'}</div>`;
  $('#main').innerHTML = head('Inbox', 'Everything recently captured in an Inbox state — Notes, Tasks, Projects, Companies — awaiting triage.') + tabs + body;
}

/* ---------------- detail page (the interconnectedness) ---------------- */
function propsHTML(entity, rec) {
  const skip = new Set(['id', TITLE_FIELD[entity], 'task_total', 'task_done', 'body']);
  const rows = [];
  for (const [k, v] of Object.entries(rec)) {
    if (skip.has(k) || k.endsWith('_id')) continue;
    if (v === null || v === undefined || v === '') continue;
    let val;
    if (rec[k + '_id'] != null && LINK_FIELD[k]) val = link(LINK_FIELD[k], rec[k + '_id'], v);
    else if (MONEY_KEYS.includes(k)) val = money(v);
    else if (DATE_KEYS.includes(k)) val = fmtDate(v);
    else if (k === 'completed') val = `<span class="check">${v ? '✔ Yes' : '— No'}</span>`;
    else if (k === 'progress') val = progressBar(v);
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
  const title = rec[TITLE_FIELD[entity]] || rec.name || rec.title || 'Untitled';
  const bodyText = entity === 'note' && rec.body ? `<div class="body-text">${esc(rec.body)}</div>` : '';
  const relSections = Object.entries(rels).map(([k, arr]) => {
    const ent = REL_ENTITY[k] || k;
    const chips = arr.map(r => `<a class="relchip" href="#/d/${ent}/${r.id}"><span class="ic">${ICON[ent] || '•'}</span>${esc(r.name)}</a>`).join('');
    return `<div class="rel"><h3>${pretty(k)}<span class="c">${arr.length}</span></h3>${arr.length ? `<div class="relchips">${chips}</div>` : '<div class="empty">None</div>'}</div>`;
  }).join('');
  const back = SECTION_OF[entity] || 'dashboard';
  $('#main').innerHTML = `<div class="detail">
    <div class="crumb"><a href="#/${back}">← ${pretty(back.split('/').pop())}</a></div>
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
  const [companies, contacts, products, deals] = await Promise.all([api.get('/api/companies'), api.get('/api/contacts'), api.get('/api/products'), api.get('/api/board')]);
  cache = { companies, contacts, products, deals };
}
const QUICK = {
  'new-contact': () => openModal('New Contact', [
    { name: 'name', label: 'Name' }, { name: 'email', label: 'Email (dedup key)', type: 'email' }, { name: 'phone', label: 'Phone' },
    { name: 'type', label: 'Type', type: 'select', options: ['Prospect', 'Customer', 'Partner', 'Supplier', 'Employee'].map(v => ({ value: v, label: v })) },
    { name: 'company', label: 'Company (optional)' }],
    async d => { await api.post('/api/contacts', d); toast('Contact saved (deduped on email).'); }),
  'new-deal': async () => {
    await ensureCache();
    if (!cache.companies.length || !cache.contacts.length) return toast('Add a company and a contact first (INV-8).', true);
    openModal('New Deal', [
      { name: 'deal_name', label: 'Deal name' },
      { name: 'company_id', label: 'Company', type: 'select', options: cache.companies.map(c => ({ value: c.id, label: c.name })) },
      { name: 'contact_id', label: 'Primary contact', type: 'select', options: cache.contacts.map(c => ({ value: c.id, label: c.name })) },
      { name: 'deal_value', label: 'Value ($)', type: 'number' }, { name: 'expected_close_date', label: 'Expected close', type: 'date' }],
      async d => { await api.post('/api/deals', { ...d, company_id: +d.company_id, contact_id: +d.contact_id, deal_value: +d.deal_value || 0 }); toast('Deal opened at <b>Proposal Sent</b>.'); });
  },
  'new-sale': async () => {
    await ensureCache();
    if (!cache.deals.length) return toast('No deals to attach a sale to.', true);
    openModal('New Sale', [
      { type: 'note', text: '⚠ Books revenue <b>outside</b> the pipeline gate (INV-4) — for back-filling only. The trusted path is <b>Book sale ✓</b> on a Contract-Pending deal.' },
      { name: 'title', label: 'Sale name' },
      { name: 'deal_id', label: 'Deal', type: 'select', options: cache.deals.map(d => ({ value: d.id, label: d.deal_name })) },
      { name: 'amount', label: 'Amount ($)', type: 'number' },
      { name: 'rep_id', label: 'Sales rep', type: 'select', options: cache.contacts.map(c => ({ value: c.id, label: c.name })) }],
      async d => { await api.post('/api/sales', { title: d.title, deal_id: +d.deal_id, amount: +d.amount || 0, rep_id: d.rep_id ? +d.rep_id : null }); toast('Sale booked.'); });
  },
  'new-meeting': async () => {
    await ensureCache();
    openModal('New Meeting', [
      { name: 'title', label: 'Meeting title' }, { name: 'date', label: 'Date', type: 'date' },
      { name: 'attendee_id', label: 'Attendee', type: 'select', options: cache.contacts.map(c => ({ value: c.id, label: c.name })) },
      { name: 'duration', label: 'Duration', value: '30 min' }],
      async d => { await api.post('/api/meetings', { title: d.title, date: d.date || null, attendee_id: d.attendee_id ? +d.attendee_id : null, duration: d.duration }); toast('Meeting added.'); });
  },
  'new-note': () => openModal('New Note', [{ name: 'title', label: 'Note title' }, { name: 'body', label: 'Body', type: 'textarea' }],
    async d => { await api.post('/api/notes', { title: d.title, body: d.body }); toast('Note captured to Inbox.'); }),
  'flag-stalled': async () => {
    const r = await api.post('/api/flag-stalled');
    if (!r.flagged.length) toast('No stalled deals. Pipeline is current.');
    else toast(`Flagged <b>${r.flagged.length}</b> → Needs Follow-Up. At risk: ${r.flagged.map(d => money(d.value_at_risk)).join(', ')}`);
    rerender();
  },
};
const VERB = {
  advance: async id => { const r = await api.post(`/api/deals/${id}/advance`); toast(r.reengaged ? `Re-engaged → <b>${r.status}</b>` : `Advanced → <b>${r.status}</b>`); rerender(); },
  log: id => openModal('Log interaction', [{ name: 'title', label: 'Title', ph: 'Call / email / note' }, { name: 'body', label: 'What happened', type: 'textarea' }],
    async d => { await api.post(`/api/deals/${id}/note`, d); toast('Logged. Last activity updated.'); }, 'Log'),
  lost: id => openModal('Mark lost', [{ name: 'reason', label: 'Reason (required, INV-7)', type: 'textarea' }],
    async d => { await api.post(`/api/deals/${id}/lost`, d); toast('Marked <b>Lost</b> with reason.'); }, 'Mark lost'),
  book: async id => {
    await ensureCache();
    openModal('Book sale', [
      { name: 'sales_amount', label: 'Amount', type: 'number' },
      { name: 'product_ids', label: 'Products', type: 'checks', options: cache.products.map(p => ({ value: p.id, label: `${p.name} — ${money(p.price)}` })) }],
      async d => { const r = await api.post(`/api/deals/${id}/book-sale`, { sales_amount: d.sales_amount ? +d.sales_amount : undefined, product_ids: (d.product_ids || []).map(Number) }); toast(`Booked ${money(r.amount)} → <b>Contract Signed</b>`); }, '<span class="gate" style="background:currentColor"></span>Book sale');
  },
};

/* ---------------- router + wiring ---------------- */
const RENDER = { dashboard: renderDashboard, inbox: renderInbox, contacts: renderContacts, deals: renderDeals, products: renderProducts, projects: renderProjects, notes: renderNotes, meetings: renderMeetings };
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
  if (fn) { e.preventDefault(); Promise.resolve(fn(t.dataset.id)).catch(err => toast(err.message, true)); }
});
$('#modal-x').onclick = closeModal;
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
window.addEventListener('hashchange', router);
router();
