// app.js — second-brain-os runtime front end. A thin renderer over the verb API;
// every write goes through an operations/ endpoint, so the server's gates hold regardless of the UI.
// Marks follow the design language: the gate diamond (◇) sits ONLY on controls whose endpoint
// enforces an invariant (archive · review-clear) — never as decoration.

const $ = (s, r = document) => r.querySelector(s);
const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
const esc = s => (s == null ? '' : String(s)).replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));

async function api(method, url, body) {
  const r = await fetch(url, { method, headers: body ? { 'Content-Type': 'application/json' } : {}, body: body ? JSON.stringify(body) : undefined });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.error || `${r.status}`);
  return j;
}
const get = u => api('GET', u);

let toastT;
function toast(msg, isErr) {
  const t = $('#toast'); t.innerHTML = msg; t.className = 'toast' + (isErr ? ' err' : ''); t.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 4200);
}

// ---------- modal ----------
function modal(title, fieldsHTML, onSubmit, note) {
  $('#modal-title').textContent = title;
  const f = $('#modal-form');
  f.innerHTML = fieldsHTML
    + (note ? `<div class="modal-note">${note}</div>` : '')
    + `<div class="actions"><button type="button" class="btn mini" id="m-cancel">Cancel</button><button type="submit" class="btn mini solid">Confirm</button></div>`;
  $('#modal').hidden = false;
  $('#m-cancel').onclick = closeModal;
  f.onsubmit = async (e) => { e.preventDefault(); try { await onSubmit(new FormData(f)); closeModal(); await route(); } catch (err) { toast('<b>refused</b> · ' + esc(err.message), true); } };
}
function closeModal() { $('#modal').hidden = true; $('#modal-form').onsubmit = null; }
$('#modal-x').onclick = closeModal;

// ---------- quick actions ----------
const PRIORITIES = ['Low Priority', 'Medium Priority', 'High Priority'];
function captureModal() {
  modal('Capture', `
    <div class="field"><label>Name</label><input name="name" required autofocus /></div>
    <div class="field-row">
      <div class="field"><label>Kind</label><select name="kind">
        <option value="task">task</option><option value="note">note</option>
        <option value="project">project</option><option value="resource">resource</option><option value="goal">goal</option>
      </select></div>
      <div class="field"><label>Priority (task/project)</label><select name="priority"><option value="">—</option>${PRIORITIES.map(p => `<option>${p}</option>`).join('')}</select></div>
    </div>`,
    async (d) => {
      const body = { name: d.get('name'), kind: d.get('kind') };
      if (d.get('priority')) body.priority = d.get('priority');
      const r = await api('POST', '/api/capture', body);
      toast(`captured <b>${esc(r.kind)}</b> #${r.id} → <b>Inbox</b>`);
    },
    'Capture lands in <b>Inbox</b> and never blocks on missing fields (INV-2). Filing happens later, in Inbox → triage.');
}
document.querySelectorAll('[data-act]').forEach(b => {
  b.onclick = () => b.dataset.act === 'capture' ? captureModal()
    : toast('New Record covers the non-Inbox entities (area · book · genre · life_area · contact · exercise) — use the API verb <b>create-record</b>.');
});

// ---------- routing ----------
const routes = {};
function reg(name, fn) { routes[name] = fn; }
async function route() {
  const name = (location.hash.replace('#/', '') || 'dashboard');
  document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.route === name));
  const m = $('#main'); m.innerHTML = '<div class="empty">loading…</div>';
  try { await (routes[name] || routes.dashboard)(m); } catch (e) { m.innerHTML = `<div class="callout"><span class="i">!</span> ${esc(e.message)}</div>`; }
  refreshBadges();
}
window.addEventListener('hashchange', route);

async function refreshBadges() {
  try { const r = await get('/api/report');
    $('#nav-inbox').textContent = r.inbox.n || '';
    $('#nav-review').textContent = r.review.total || '';
  } catch {}
}

const head = (title, accent, callout) =>
  `<div class="head"><h1>${title} ${accent ? `<span class="accent">${accent}</span>` : ''}</h1></div>`
  + (callout ? `<div class="callout"><span class="i">▦</span><div>${callout}</div></div>` : '');

// ---------- dashboard (brain-report) ----------
reg('dashboard', async (m) => {
  const r = await get('/api/report');
  const gp = r.progress.goals, pp = r.progress.projects;
  m.innerHTML = head('Dashboard', 'the whole brain, honestly',
    'Every number is <b>computed on read</b> (INV-6); terminal records never inflate an open count. The tool <b>surfaces</b> the review queue — it never decides what to review (INV-8).')
    + `<div class="grid cols-4">
        <div class="card"><span class="cap">Inbox</span><span class="metric">${r.inbox.n}</span><span class="sub">${r.inbox.overdue} stale &gt; ${r.inbox.max_age_days}d</span></div>
        <div class="card"><span class="cap">Need a Review</span><span class="metric">${r.review.total}</span><span class="sub">${r.review.order.map(k => `${k} ${r.review.by_kind[k]}`).join(' · ')}</span></div>
        <div class="card"><span class="cap">Today · Habits</span><span class="metric">${r.today.habit_pct == null ? '—' : r.today.habit_pct + '<small>%</small>'}</span><span class="sub">mood: ${esc(r.today.mood || '—')}</span></div>
        <div class="card"><span class="cap">Archive</span><span class="metric">${Object.values(r.archive).reduce((a, b) => a + b, 0)}</span><span class="sub">${Object.entries(r.archive).map(([k, v]) => `${k} ${v}`).join(' · ')}</span></div>
      </div>`
    + `<div class="section-h"><h2>Goals &amp; Projects progress</h2><span class="eyebrow">open only</span></div>`
    + `<div class="grid cols-2">
        <div class="card"><h3>Goals</h3>${gp.length ? gp.map(g => progressRow(g.name, g.pct, g.status)).join('') : '<span class="empty">no open goals</span>'}</div>
        <div class="card"><h3>Projects</h3>${pp.length ? pp.map(p => progressRow(p.name, p.pct, p.status, p.need_a_review === 'Yes')).join('') : '<span class="empty">no open projects</span>'}</div>
      </div>`
    + `<div class="section-h"><h2>Now reading</h2></div>`
    + `<div class="card">${r.today.reading.length ? r.today.reading.map(b => progressRow(b.book_name, b.pct, `p.${b.current_page}/${b.total_page || '?'}`)).join('') : '<span class="empty">nothing in Reading</span>'}</div>`;
});
const progressRow = (name, pct, meta, review) => `
  <div style="margin:8px 0">
    <div style="display:flex;justify-content:space-between;gap:10px;margin-bottom:5px">
      <span style="font-size:13px">${esc(name)} ${review ? '<span class="flag review">review</span>' : ''}</span>
      <span class="mono muted" style="font-size:11px">${esc(meta || '')} · ${pct}%</span>
    </div><div class="bar"><i style="width:${pct}%"></i></div>
  </div>`;

// ---------- inbox (triage) ----------
reg('inbox', async (m) => {
  const rows = await get('/api/inbox');
  m.innerHTML = head('Inbox', 'nothing dies here',
    'Captured records wait here and are <b>drained to a real home</b> (INV-2). Draining to a terminal status is refused — that path is <b>archive</b> (INV-3).')
    + (rows.length ? table(['kind', 'name', 'age', ''], rows.map(x => [
        `<span class="mono">${x.kind}</span>`,
        esc(x.name),
        `<span class="mono ${x.overdue ? '' : 'muted'}">${x.age_days}d${x.overdue ? ' ⚠' : ''}</span>`,
        triageControl(x.kind, x.id),
      ])) : '<div class="empty">inbox clear ✓</div>');
});
function triageControl(kind, id) {
  const opts = { task: ['To-Do', 'In progress'], project: ['To-Do', 'In progress'], note: ['In reviewing'], resource: ['Not Reviewed', 'In reviewing'] }[kind] || [];
  return `<div class="row-acts"><select class="mono" style="font-size:11px;padding:4px 6px;border:1px solid var(--line2);border-radius:var(--r-ctl);background:var(--page);color:var(--t1)" onchange="triage('${kind}',${id},this.value)">
    <option value="">triage →</option>${opts.map(o => `<option>${o}</option>`).join('')}</select></div>`;
}
window.triage = async (kind, id, to) => {
  if (!to) return;
  try { const r = await api('POST', `/api/triage/${kind}/${id}`, { to }); toast(`${kind} #${id} → <b>${esc(r.status)}</b>`); await route(); }
  catch (e) { toast('<b>refused</b> · ' + esc(e.message), true); }
};

// ---------- review queue ----------
reg('review', async (m) => {
  const rows = await get('/api/review');
  m.innerHTML = head('Review', 'the PARA loop', // signature
    'The <b>Need A Review</b> flag is recorded and surfaced; it clears only through a <b>recorded review pass</b> (INV-4). The ◇ gate marks that.')
    + (rows.length ? table(['kind', 'name', 'status', ''], rows.map(x => [
        `<span class="mono">${x.kind}</span>`, esc(x.name), `<span class="mono muted">${esc(x.status)}</span>`,
        `<div class="row-acts"><button class="btn mini" onclick="reviewClear('${x.kind}',${x.id})"><span class="gate"></span> clear</button></div>`,
      ])) : '<div class="empty">review queue empty ✓</div>');
});
window.reviewClear = (kind, id) => modal('Clear review — recorded pass', `
  <div class="field"><label>Review note (required)</label><textarea name="review_note" required autofocus placeholder="what you checked / decided"></textarea></div>`,
  async (d) => { const r = await api('POST', `/api/review/${kind}/${id}`, { action: 'clear', review_note: d.get('review_note') }); toast(`${kind} #${id} review <b>cleared</b>`); },
  'A review that leaves no trace never happened (INV-4). The note is the pass.');

// ---------- generic list routes ----------
function table(cols, rows) {
  return `<table><thead><tr>${cols.map(c => `<th${c === '' ? ' style="text-align:right"' : ''}>${c}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(r => `<tr>${r.map((c, i) => `<td${i === r.length - 1 ? ' style="text-align:right"' : ''}>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
const COMPLETE = { task: ['Completed'], project: ['Completed'], goal: ['Completed'], note: ['Pinned', 'Saved'], resource: ['Pinned', 'Reviewed'] };
const OPEN = {
  task: ['Inbox', 'To-Do', 'In progress'], project: ['Inbox', 'To-Do', 'In progress'],
  goal: ['Inbox', 'Not started', 'In progress'], note: ['Inbox', 'In reviewing'], resource: ['Inbox', 'Not Reviewed', 'In reviewing'],
};
function statusPicker(kind, id, cur) {
  const opts = OPEN[kind].filter(s => s !== cur);
  return `<select class="mono" style="font-size:11px;padding:4px 6px;border:1px solid var(--line2);border-radius:var(--r-ctl);background:var(--page);color:var(--t1)" onchange="setStatus('${kind}',${id},this.value)">
    <option value="">${esc(cur)} →</option>${opts.map(o => `<option>${o}</option>`).join('')}</select>`;
}
window.setStatus = async (kind, id, to) => {
  if (!to) return;
  try { const r = await api('POST', `/api/status/${kind}/${id}`, { to }); toast(`${kind} #${id} → <b>${esc(r.status)}</b>`); await route(); }
  catch (e) { toast('<b>refused</b> · ' + esc(e.message), true); }
};
window.archiveRec = (kind, id) => modal('Archive — terminal, with reason', `
  <div class="field"><label>Archive as</label><select name="as">${COMPLETE[kind].map(s => `<option>${s}</option>`).join('')}</select></div>
  <div class="field"><label>Archive reason (required)</label><textarea name="archive_reason" required autofocus placeholder="why it's done"></textarea></div>`,
  async (d) => { const r = await api('POST', `/api/archive/${kind}/${id}`, { as: d.get('as'), archive_reason: d.get('archive_reason') }); toast(`${kind} #${id} → <b>${esc(r.status)}</b>`); },
  'Leaving the machine is earned and reasoned — <b>policy.archive.requires_reason</b> is on (INV-3).');
const rowActs = (kind, id, cur, review) =>
  `<div class="row-acts">${statusPicker(kind, id, cur)}`
  + (review !== undefined ? `<button class="btn mini" title="flag for review" onclick="api('POST','/api/review/${kind}/${id}',{action:'flag'}).then(()=>route())">flag</button>` : '')
  + `<button class="btn mini" onclick="archiveRec('${kind}',${id})"><span class="gate"></span> archive</button></div>`;

reg('goals', async (m) => { const r = await get('/api/goals'); m.innerHTML = head('Goals') + table(['name', 'status', 'quarter', 'progress', ''],
  r.map(g => [esc(g.name), `<span class="mono muted">${esc(g.status)}</span>`, `<span class="mono">${esc(g.quarter || '—')}</span>`, `<span class="mono">${g.progress}%</span>`, g.status === 'Completed' ? '<span class="muted mono">archived</span>' : rowActs('goal', g.id, g.status)])); });

reg('projects', async (m) => { const r = await get('/api/projects'); m.innerHTML = head('Projects') + table(['name', 'status', 'pri', 'progress', 'review', ''],
  r.map(p => [esc(p.name), `<span class="mono muted">${esc(p.status)}</span>`, `<span class="mono muted">${esc((p.priority || '').replace(' Priority', '') || '—')}</span>`, `<span class="mono">${p.progress}%</span>`, p.need_a_review === 'Yes' ? '<span class="flag review">yes</span>' : '<span class="muted">—</span>', p.status === 'Completed' ? '<span class="muted mono">archived</span>' : rowActs('project', p.id, p.status, true)])); });

reg('tasks', async (m) => { const r = await get('/api/tasks'); m.innerHTML = head('Tasks') + table(['name', 'status', 'pri', 'project', 'review', ''],
  r.map(t => [esc(t.name), `<span class="mono muted">${esc(t.status)}</span>`, `<span class="mono muted">${esc((t.priority || '').replace(' Priority', '') || '—')}</span>`, `<span class="muted">${esc(t.projects || '—')}</span>`, t.need_a_review === 'Yes' ? '<span class="flag review">yes</span>' : '<span class="muted">—</span>', t.status === 'Completed' ? '<span class="muted mono">archived</span>' : rowActs('task', t.id, t.status, true)])); });

reg('notes', async (m) => { const r = await get('/api/notes'); m.innerHTML = head('Notes') + table(['name', 'status', 'tags', 'review', ''],
  r.map(n => [esc(n.name), `<span class="mono muted">${esc(n.status)}</span>`, `<span class="muted mono" style="font-size:11px">${esc((n.tags || []).join(', ') || '—')}</span>`, n.need_a_review === 'Yes' ? '<span class="flag review">yes</span>' : '<span class="muted">—</span>', ['Pinned', 'Saved'].includes(n.status) ? '<span class="muted mono">archived</span>' : rowActs('note', n.id, n.status, true)])); });

reg('resources', async (m) => { const r = await get('/api/resources'); m.innerHTML = head('Resources') + table(['name', 'status', 'type', 'review', ''],
  r.map(x => [esc(x.name), `<span class="mono muted">${esc(x.status)}</span>`, `<span class="mono muted">${esc(x.type || '—')}</span>`, x.need_a_review === 'Yes' ? '<span class="flag review">yes</span>' : '<span class="muted">—</span>', ['Pinned', 'Reviewed'].includes(x.status) ? '<span class="muted mono">archived</span>' : rowActs('resource', x.id, x.status, true)])); });

// ---------- reading ----------
reg('reading', async (m) => {
  const r = await get('/api/books');
  m.innerHTML = head('Reading', 'book ↔ genre',
    'A book\'s status moves only through <b>log-reading</b>; finishing is earned via <b>archive</b> (INV-3). Progress is derived from the page.')
    + table(['book', 'author', 'genre', 'status', 'progress', ''], r.map(b => [
        esc(b.book_name), `<span class="muted">${esc(b.author || '—')}</span>`, `<span class="mono muted">${esc(b.genres || '—')}</span>`,
        `<span class="mono muted">${esc(b.status)}</span>`,
        `<span class="mono">${b.progress}%</span> <span class="muted mono" style="font-size:10px">p.${b.current_page}/${b.total_page || '?'}</span>`,
        b.status === 'Completed' ? '<span class="muted mono">finished</span>'
          : `<div class="row-acts"><button class="btn mini" onclick="logReading(${b.id},${b.current_page})">+page</button>${b.status === 'To Read' ? `<button class="btn mini" onclick="api('POST','/api/reading/${b.id}',{status:'Reading'}).then(()=>route())">start</button>` : `<button class="btn mini" onclick="archiveRec('book',${b.id})"><span class="gate"></span> finish</button>`}</div>`,
      ]));
});
window.logReading = (id, cur) => modal('Log reading', `<div class="field"><label>Current page</label><input name="current_page" type="number" value="${cur}" autofocus /></div>`,
  async (d) => { const r = await api('POST', `/api/reading/${id}`, { current_page: Number(d.get('current_page')), status: 'Reading' }); toast(`book #${id} → p.${r.current_page} (<b>${r.progress}%</b>)`); },
  'Completed is not a page update — it is reached through <b>archive</b>, with a reason (INV-3).');
COMPLETE.book = ['Completed'];

// ---------- daily hub ----------
reg('daily', async (m) => {
  const [habits, journal, ex] = await Promise.all([get('/api/habits'), get('/api/journal'), get('/api/exercises')]);
  const HAB = ['deep_work_8h', 'read_20p', 'running_30min', 'workout_40min', 'meditation_15min', 'journaling', 'sleep_8h'];
  m.innerHTML = head('Daily Hub', 'one row per day',
    'Habits and journal are keyed by <b>date</b> — logging merges into the day\'s row, never a duplicate (INV-5). These satellites don\'t link into the PARA core (INV-7).')
    + `<div class="section-h"><h2>Habits</h2></div>`
    + table(['date', ...HAB.map(h => h.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()).slice(0, 8)), '%'],
        habits.map(h => [`<span class="mono">${esc(h.date)}</span>`, ...HAB.map(k => h[k] ? '●' : '<span class="muted">○</span>'), `<span class="mono">${Math.round(100 * HAB.filter(k => h[k]).length / 7)}%</span>`]))
    + `<div class="section-h"><h2>Journal</h2></div>`
    + table(['date', 'mood', 'life areas'], journal.map(j => [`<span class="mono">${esc(j.date)}</span>`, esc(j.mood || '—'), `<span class="muted mono" style="font-size:11px">${esc(j.life_areas || '—')}</span>`]))
    + `<div class="section-h"><h2>Exercise</h2></div>`
    + table(['exercise', 'date', 'type', 'reps×sets', 'load'], ex.map(e => [esc(e.exercise_name), `<span class="mono">${esc(e.date || '—')}</span>`, `<span class="mono muted">${esc(e.type || '—')}</span>`, `<span class="mono">${e.reps ?? '?'}×${e.sets ?? '?'}</span>`, `<span class="muted">${esc(e.weight_intensity || '—')}</span>`]));
});

reg('contacts', async (m) => { const r = await get('/api/contacts'); m.innerHTML = head('Contacts', 'standalone satellite') + table(['name', 'relationship', 'email', 'phone', 'follow-up'],
  r.map(c => [esc(c.name), `<span class="mono muted">${esc(c.relationship_type || '—')}</span>`, `<span class="muted">${esc(c.email || '—')}</span>`, `<span class="mono muted">${esc(c.phone || '—')}</span>`, `<span class="mono">${esc(c.next_follow_up || '—')}</span>`])); });

route();
