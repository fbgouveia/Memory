// app.js — finance-os front end. A faithful mirror of Finance OS Pro's surfaces:
// the aggregator dashboard + the 11 navigation pages, over the runtime's verbs.
// Thin skin: no business logic here — every gate lives server-side.

/* ---------------- helpers ---------------- */
const $ = (s, r = document) => r.querySelector(s);
const api = {
  get: (p) => fetch(p).then(r => { if (!r.ok) throw new Error('load failed: ' + p); return r.json(); }),
  post: (p, b) => fetch(p, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b || {}) })
    .then(async r => { const j = await r.json(); if (!r.ok) throw new Error(j.error || 'request failed'); return j; }),
};
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const money = (v) => '$' + Number(v || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const fmtDate = (d) => { if (!d) return '—'; const m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? `${MONTHS[+m[2] - 1]} ${+m[3]}, ${m[1]}` : esc(d); };
const pretty = (k) => String(k).replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
const chip = (v, cls = '') => v ? `<span class="chip ${cls}">${esc(v)}</span>` : '';
const link = (entity, id, label) => `<a href="#/d/${entity}/${id}">${esc(label)}</a>`;
const toast = (m, err = false) => { const t = $('#toast'); t.innerHTML = m; t.classList.toggle('err', err); t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, err ? 6000 : 3200); };
const today = () => new Date().toISOString().slice(0, 10);

const ICON = { account: '▦', income: '↧', expense: '↥', income_type: '◎', budget_category: '▤', transfer: '⇄', subscription: '↻', debt: '◒', investment: '✦', goal: '◈', net_worth: 'Σ', month: '☰', quarter: '☰', year: '☰' };
const SECTION_OF = { account: 'accounts', income: 'incomes', expense: 'expenses', income_type: 'incomes/targets', budget_category: 'budget', transfer: 'transfers', subscription: 'subscriptions', debt: 'debts', investment: 'investments', goal: 'goals', net_worth: 'networth', month: 'report', quarter: 'report', year: 'report' };
const MONEY_KEYS = ['amount', 'initial_amount', 'current_balance', 'monthly_target', 'monthly_budget', 'month_actual', 'monthly_cost', 'total_amount', 'this_month_profit', 'target_amount', 'funded', 'balance', 'income_total', 'expense_total'];
const DATE_KEYS = ['date', 'target_date', 'date_start', 'date_end', 'target_month_start', 'target_month_end', 'budget_month_start', 'budget_month_end'];
const CHIP_KEYS = ['type', 'status', 'billing', 'cadence', 'destination_kind'];

/* ---------------- shared view bits ---------------- */
const head = (title, accent, callout) => `<div class="head"><h1>${esc(title)}${accent ? ` <span class="accent">${esc(accent)}</span>` : ''}</h1>${callout ? `<div class="callout"><span class="i">ℹ</span><div>${callout}</div></div>` : ''}</div>`;
const subtabs = (items, active) => `<div class="subtabs">${items.map(t => `<a class="subtab ${t.k === active ? 'active' : ''}" href="#${t.href}">${t.label}</a>`).join('')}</div>`;
const progressBar = (p) => { p = Math.max(0, Number(p) || 0); return `<div class="progress"><div class="bar"><span style="width:${Math.min(p, 100)}%"></span></div><span class="pct">${p}%</span></div>`; };
// state marks — shape carries meaning: filled = live/settled · half = in motion · hollow = dormant
const dot = (state) => `<span class="dot ${state}"></span>`;
const subDot = (s) => s.status !== 'Active' ? dot('hollow') : (s.paid ? dot('') : dot('half'));
const goalDot = (g) => g.complete ? dot('') : (Number(g.progress) > 0 ? dot('half') : dot('hollow'));
const debtDot = (d) => Number(d.progress) >= 100 ? dot('') : (Number(d.progress) > 0 ? dot('half') : dot('hollow'));

function accountsGallery(accounts) {
  return `<div class="gallery">${accounts.map(a => `
    <a class="gcard" href="#/d/account/${a.id}"><h4>${esc(a.name)}</h4>
      <div class="big">${money(a.current_balance)}</div>
      <div class="row">initial ${money(a.initial_amount)}</div>
      <div class="chips">${chip(a.type)}</div></a>`).join('')}</div>`;
}
function budgetTable(rows, withActions) {
  if (!rows.length) return '<div class="empty">No envelopes yet.</div>';
  return `<table><thead><tr><th>Envelope</th><th>Month</th><th>Budget</th><th>Spent</th><th>Utilization</th><th>Verdict</th></tr></thead><tbody>${rows.map(b => `
    <tr><td>${b.id ? link('budget_category', b.id, b.name) : esc(b.name)}</td>
    <td>${fmtDate(b.budget_month_start)}</td>
    <td class="num">${money(b.monthly_budget)}</td><td class="num">${money(b.month_actual)}</td>
    <td>${progressBar(b.utilization)}</td>
    <td><span class="verdict ${b.utilization >= 100 ? 'hot' : ''}">${esc(b.verdict || '—')}</span></td></tr>`).join('')}</tbody></table>`
    + (withActions ? `<p style="margin-top:12px"><button class="btn" data-act="set-budget"><span class="gate"></span>Set Budget</button></p>` : '');
}
function targetsTable(rows, withActions) {
  if (!rows.length) return '<div class="empty">No targets yet.</div>';
  return `<table><thead><tr><th>Income Type</th><th>Month</th><th>Target</th><th>Actual</th><th>Attainment</th><th>Verdict</th></tr></thead><tbody>${rows.map(t => `
    <tr><td>${t.id ? link('income_type', t.id, t.name) : esc(t.name)}</td>
    <td>${fmtDate(t.target_month_start)}</td>
    <td class="num">${money(t.monthly_target)}</td><td class="num">${money(t.month_actual)}</td>
    <td>${progressBar(t.attainment)}</td>
    <td><span class="verdict ${t.attainment != null && t.attainment < 100 ? 'hot' : ''}">${esc(t.verdict || '—')}</span></td></tr>`).join('')}</tbody></table>`
    + (withActions ? `<p style="margin-top:12px"><button class="btn" data-act="set-target"><span class="gate"></span>Set Income Target</button></p>` : '');
}
function incomesTable(rows) {
  if (!rows.length) return '<div class="empty">No incomes in range.</div>';
  return `<table><thead><tr><th>Income</th><th>Amount</th><th>Date</th><th>Account</th><th>Type</th></tr></thead><tbody>${rows.map(i => `
    <tr><td>${link('income', i.id, i.name)}</td><td class="num">${money(i.amount)}</td><td>${fmtDate(i.date)}</td>
    <td>${link('account', i.account_id, i.account)}</td><td>${chip(i.income_type, 'soft')}</td></tr>`).join('')}</tbody></table>`;
}
function expensesTable(rows) {
  if (!rows.length) return '<div class="empty">No expenses in range.</div>';
  return `<table><thead><tr><th>Expense</th><th>Amount</th><th>Date</th><th>Account</th><th>Envelope</th></tr></thead><tbody>${rows.map(e => `
    <tr><td>${link('expense', e.id, e.name)}</td><td class="num">${money(e.amount)}</td><td>${fmtDate(e.date)}</td>
    <td>${link('account', e.account_id, e.account)}</td><td>${e.budget_category ? chip(e.budget_category, 'soft') : '—'}</td></tr>`).join('')}</tbody></table>`;
}
function transfersTable(rows) {
  if (!rows.length) return '<div class="empty">No transfers in range.</div>';
  return `<table><thead><tr><th>Transfer</th><th>Amount</th><th>Date</th><th>Type</th><th>From</th><th>Destination</th></tr></thead><tbody>${rows.map(t => `
    <tr><td>${link('transfer', t.id, t.name)}</td><td class="num">${money(t.amount)}</td><td>${fmtDate(t.date)}</td>
    <td>${chip(t.type, 'soft')}</td><td>${link('account', t.from_account_id, t.from_account)}</td>
    <td>${chip(t.destination_kind, 'soft')} ${t.destination_id ? link(t.destination_kind === 'account' ? 'account' : t.destination_kind, t.destination_id, t.destination) : esc(t.destination || '—')}</td></tr>`).join('')}</tbody></table>`;
}
function subsTable(rows) {
  if (!rows.length) return '<div class="empty">No subscriptions.</div>';
  return `<table><thead><tr><th></th><th>Subscription</th><th>Amount</th><th>Billing</th><th>Monthly Cost</th><th>Paid this cycle</th><th></th></tr></thead><tbody>${rows.map(s => `
    <tr><td>${subDot(s)}</td><td>${link('subscription', s.id, s.name)}</td><td class="num">${money(s.amount)}</td>
    <td>${chip(s.billing, 'soft')}</td><td class="num">${money(s.monthly_cost)}</td>
    <td>${s.paid ? '<span class="chip fill">paid</span>' : '<span class="chip soft">unpaid</span>'}</td>
    <td>${s.status === 'Active' ? `<button class="btn mini" data-act="pay" data-id="${s.id}" data-name="${esc(s.name)}"><span class="gate"></span>Pay</button>` : `<button class="btn mini" data-act="pay" data-id="${s.id}" data-name="${esc(s.name)}">Pay</button>`}</td></tr>`).join('')}</tbody></table>`;
}
function debtsTable(rows) {
  if (!rows.length) return '<div class="empty">No debts.</div>';
  return `<table><thead><tr><th></th><th>Debt</th><th>Total</th><th>Funded</th><th>Progress</th><th>Cadence</th><th>Account</th><th></th></tr></thead><tbody>${rows.map(d => `
    <tr><td>${debtDot(d)}</td><td>${link('debt', d.id, d.name)}</td><td class="num">${money(d.total_amount)}</td>
    <td class="num">${money(d.funded)}</td><td>${progressBar(d.progress)}</td><td>${chip(d.cadence, 'soft')}</td>
    <td>${link('account', d.account_id, d.account)}</td>
    <td><button class="btn mini" data-act="fund-debt" data-id="${d.id}" data-name="${esc(d.name)}"><span class="gate"></span>Fund</button></td></tr>`).join('')}</tbody></table>`;
}
function goalsGallery(rows) {
  if (!rows.length) return '<div class="empty">No goals.</div>';
  return `<div class="gallery">${rows.map(g => `
    <div class="gcard"><h4>${goalDot(g)}${link('goal', g.id, g.name)}</h4>
      <div class="big">${money(g.balance)}</div>
      <div class="row">target ${money(g.target_amount)} · by ${fmtDate(g.target_date)}</div>
      ${progressBar(g.progress)}
      <div class="actions"><button class="btn mini" data-act="fund-goal" data-id="${g.id}" data-name="${esc(g.name)}"><span class="gate"></span>Fund</button>
      ${g.complete ? chip('complete', 'fill') : `<button class="btn mini" data-act="complete-goal" data-id="${g.id}" data-name="${esc(g.name)}">Mark complete</button>`}</div></div>`).join('')}</div>`;
}
function investmentsTable(rows) {
  if (!rows.length) return '<div class="empty">No investments.</div>';
  return `<table><thead><tr><th>Investment</th><th>Risk</th><th>This Month Profit</th><th>Account</th><th></th></tr></thead><tbody>${rows.map(i => `
    <tr><td>${link('investment', i.id, i.name)}</td><td>${chip(i.type, 'soft')}</td>
    <td class="num">${money(i.this_month_profit)}</td><td>${link('account', i.account_id, i.account)}</td>
    <td><button class="btn mini" data-act="log-profit" data-id="${i.id}" data-name="${esc(i.name)}">Log profit</button></td></tr>`).join('')}</tbody></table>`;
}
function periodTable(rows, entity) {
  return `<table><thead><tr><th>Period</th><th>Range</th><th>Income</th><th>Expense</th><th>Net</th></tr></thead><tbody>${rows.map(p => `
    <tr><td>${link(entity, p.id, p.name)}</td><td>${fmtDate(p.date_start)} → ${fmtDate(p.date_end)}</td>
    <td class="num">${money(p.income_total)}</td><td class="num">${money(p.expense_total)}</td>
    <td class="num">${money(Number(p.income_total) - Number(p.expense_total))}</td></tr>`).join('')}</tbody></table>`;
}

/* ---------------- section renderers ---------------- */
async function renderDashboard() {
  const [report, counts, accounts, transfers] = await Promise.all([
    api.get('/api/report'), api.get('/api/counts'), api.get('/api/accounts'), api.get('/api/transfers?range=month')]);
  const m = [['Net Worth', money(report.net_worth.total)], ['Income · this month', money(report.this_month.income)], ['Expense · this month', money(report.this_month.expense)]];
  const dbs = [['accounts', 'Accounts', 'accounts'], ['incomes', 'Incomes', 'incomes'], ['expenses', 'Expenses', 'expenses'], ['budget_categories', 'Budgets', 'budget'], ['subscriptions', 'Subscriptions', 'subscriptions'], ['transfers', 'Transfers', 'transfers'], ['debts', 'Debts', 'debts'], ['goals', 'Goals', 'goals'], ['investments', 'Investments', 'investments']];
  $('#main').innerHTML = head('Dashboard', 'every dollar has a container.')
    + `<div class="metrics">${m.map(([k, v]) => `<div class="metric"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('')}</div>`
    + `<div class="db-grid">${dbs.map(([k, l, r]) => `<a class="db-card" href="#/${r}"><div class="n">${counts[k] ?? 0}</div><div class="l">${l}</div></a>`).join('')}</div>`
    + `<h3 class="sec-h">Accounts Overview</h3>` + accountsGallery(accounts)
    + `<h3 class="sec-h">Monthly Budget</h3>` + budgetTable(report.budgets.map((b, i) => ({ ...b })), false)
    + `<h3 class="sec-h">Incomes Target</h3>` + targetsTable(report.targets, false)
    + `<h3 class="sec-h">Finance Goals</h3>` + goalsGallery(await api.get('/api/goals'))
    + `<h3 class="sec-h">Debt & Liabilities</h3>` + debtsTable(await api.get('/api/debts'))
    + `<h3 class="sec-h">Subscription</h3>` + subsTable(await api.get('/api/subscriptions'))
    + `<h3 class="sec-h">Transfer Overview · this month</h3>` + transfersTable(transfers);
}

async function renderAccounts() {
  const accounts = await api.get('/api/accounts');
  $('#main').innerHTML = head('Accounts', null, 'Money containers — the hub. <b>current_balance</b> is derived on read: initial + incomes − expenses − transfers out + transfers in (INV-4).')
    + accountsGallery(accounts);
}

async function renderIncomes(args) {
  const tab = ['targets', 'history'].includes(args[0]) ? args[0] : 'month';
  const tabs = subtabs([{ k: 'month', label: 'This Month', href: '/incomes' }, { k: 'targets', label: 'Targets', href: '/incomes/targets' }, { k: 'history', label: 'History', href: '/incomes/history' }], tab);
  let body;
  if (tab === 'targets') body = targetsTable(await api.get('/api/targets'), true);
  else body = incomesTable(await api.get('/api/incomes' + (tab === 'month' ? '?range=month' : '')));
  $('#main').innerHTML = head('Incomes', null, 'Money in — homed to an account (INV-1), spine-linked from its date (INV-5).') + tabs + body;
}

async function renderExpenses(args) {
  const tab = args[0] === 'history' ? 'history' : 'month';
  const tabs = subtabs([{ k: 'month', label: 'This Month', href: '/expenses' }, { k: 'history', label: 'History', href: '/expenses/history' }], tab);
  const body = expensesTable(await api.get('/api/expenses' + (tab === 'month' ? '?range=month' : '')));
  $('#main').innerHTML = head('Expenses', null, 'Money out — homed (INV-1) and enveloped; the umbrella <b>Subscription</b> row is maintained by add-subscription, not typed by hand.') + tabs + body;
}

async function renderBudget() {
  $('#main').innerHTML = head('Budget', null, 'Envelopes bound to the month they govern (INV-8); utilization and verdicts derive on read against policy thresholds (INV-4).')
    + budgetTable(await api.get('/api/budget'), true);
}

async function renderSubscriptions() {
  const subs = await api.get('/api/subscriptions');
  const grp = (st) => subs.filter(s => s.status === st);
  $('#main').innerHTML = head('Subscription', null, '<b>paid</b> is derived from a payment transfer dated within the billing cycle (INV-7) — it resets itself at cycle start. ● paid · ◐ Active unpaid · ○ Inactive.')
    + `<h3 class="sec-h">Active</h3>` + subsTable(grp('Active'))
    + `<h3 class="sec-h">Inactive</h3>` + subsTable(grp('Inactive'));
}

async function renderTransfers(args) {
  const tab = args[0] === 'all' ? 'all' : 'month';
  const tabs = subtabs([{ k: 'month', label: 'This Month', href: '/transfers' }, { k: 'all', label: 'All', href: '/transfers/all' }], tab);
  const rows = await api.get('/api/transfers' + (tab === 'month' ? '?range=month' : ''));
  const types = ['Funding', 'Moving', 'Saving', 'Other'];
  const body = types.map(ty => { const r = rows.filter(t => t.type === ty); return r.length ? `<h3 class="sec-h">${ty}</h3>` + transfersTable(r) : ''; }).join('') || '<div class="empty">No transfers in range.</div>';
  $('#main').innerHTML = head('Transfers', null, 'The single money-movement verb: one from-account debited, <b>exactly one</b> of seven destinations credited (INV-2, INV-3). Goals and debts move only through here (INV-6).') + tabs + body;
}

async function renderDebts() {
  $('#main').innerHTML = head('Debt & Liabilities', null, '<b>funded</b> and <b>progress</b> derive only from funding transfers (INV-6) — no verb accepts them as input.')
    + debtsTable(await api.get('/api/debts'));
}

async function renderReport() {
  const [report, periods] = await Promise.all([api.get('/api/report'), api.get('/api/periods')]);
  const m = [['Net Worth', money(report.net_worth.total)], ['Income · this month', money(report.this_month.income)], ['Expense · this month', money(report.this_month.expense)], ['Flags', String(report.flags.length)]];
  $('#main').innerHTML = head('Report', null, 'review-report — the machine\'s one read-only surface. Every number is computed from raw rows at read time (INV-4). Flags, never prescriptions (INV-9).')
    + `<div class="metrics" style="max-width:820px">${m.map(([k, v]) => `<div class="metric"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('')}</div>`
    + `<h3 class="sec-h">Flags</h3>`
    + (report.flags.length ? `<div class="flags">${report.flags.map(f => `<div class="flag"><span class="kind">${esc(f.kind)}</span><span>${esc(f.detail)}</span></div>`).join('')}</div>` : '<div class="empty">Nothing flagged.</div>')
    + `<h3 class="sec-h">Monthly Report</h3>` + periodTable(periods.months, 'month')
    + `<h3 class="sec-h">Quarters Report</h3>` + periodTable(periods.quarters, 'quarter')
    + `<h3 class="sec-h">Years Overview</h3>` + periodTable(periods.years, 'year');
}

async function renderNetworth() {
  const nw = await api.get('/api/networth');
  $('#main').innerHTML = head('Net Worth', null, 'Sum of derived balances across included account types (policy.net_worth) — a snapshot, no history (source machine).')
    + `<div class="metrics" style="max-width:320px"><div class="metric"><div class="k">Net Worth</div><div class="v">${money(nw.total)}</div></div></div>`
    + `<h3 class="sec-h">My Accounts</h3>` + accountsGallery(nw.accounts.map(a => ({ ...a, initial_amount: a.initial_amount ?? 0 })));
}

async function renderGoals() {
  $('#main').innerHTML = head('Finance Goals', null, 'balance = initial + funded transfers; progress moves only through <b>transfer</b> (INV-6). <b>complete</b> is the workspace\'s tick, never derived (INV-9).')
    + goalsGallery(await api.get('/api/goals'));
}

async function renderInvestments() {
  $('#main').innerHTML = head('Investment', null, 'One overwritten this-month profit number per vehicle — a snapshot, not a series (the source machine). No balance moves when it changes (INV-4).')
    + investmentsTable(await api.get('/api/investments'));
}

/* ---------------- detail page ---------------- */
function propsHTML(entity, rec) {
  const skip = new Set(['id', 'name']);
  const rows = [];
  for (const [k, v] of Object.entries(rec)) {
    if (skip.has(k) || k.endsWith('_id')) continue;
    if (v === null || v === undefined || v === '') continue;
    let val, mono = false;
    const linkEnt = { account: 'account', from_account: 'account', income_type: 'income_type', budget_category: 'budget_category', month: 'month', umbrella_expense: 'expense', destination: null }[k];
    if (k === 'destination' && rec.destination_id != null) val = link(rec.destination_kind === 'account' ? 'account' : rec.destination_kind, rec.destination_id, v);
    else if (linkEnt && rec[k + '_id'] != null) val = link(linkEnt, rec[k + '_id'], v);
    else if (MONEY_KEYS.includes(k)) { val = money(v); mono = true; }
    else if (DATE_KEYS.includes(k)) val = fmtDate(v);
    else if (k === 'complete' || k === 'paid') val = v ? '<span class="chip fill">yes</span>' : '<span class="chip soft">no</span>';
    else if (k === 'progress' || k === 'utilization' || k === 'attainment') val = progressBar(v);
    else if (CHIP_KEYS.includes(k)) val = chip(v);
    else val = esc(v);
    rows.push([pretty(k), val, mono]);
  }
  return rows.length ? `<div class="props">${rows.map(([k, v, mono]) => `<div class="pk">${k}</div><div class="pv ${mono ? 'num' : ''}">${v}</div>`).join('')}</div>` : '';
}
async function renderDetail(entity, id) {
  const data = await api.get(`/api/detail/${entity}/${id}`);
  const rec = data.record, rels = data.relations || {};
  const relSections = Object.entries(rels).map(([k, r]) => {
    const chips = r.rows.map(x => `<a class="relchip" href="#/d/${r.entity}/${x.id}"><span class="ic">${ICON[r.entity] || '•'}</span>${esc(x.name)}</a>`).join('');
    return `<div class="rel"><h3>${pretty(k)}<span class="c">${r.rows.length}</span></h3>${r.rows.length ? `<div class="relchips">${chips}</div>` : '<div class="empty">None</div>'}</div>`;
  }).join('');
  const back = SECTION_OF[entity] || 'dashboard';
  $('#main').innerHTML = `<div class="detail">
    <div class="crumb"><a href="#/${back}">← ${pretty(back.split('/')[0])}</a></div>
    <div class="detail-head"><div class="dicon">${ICON[entity] || '•'}</div><h1>${esc(rec.name || 'Untitled')}</h1></div>
    ${propsHTML(entity, rec)}${relSections}
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
    return `<div class="field"><label>${fl.label}</label><input name="${fl.name}" type="${fl.type || 'text'}" step="any" value="${fl.value || ''}" placeholder="${fl.ph || ''}"></div>`;
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
const opt = (rows) => rows.map(r => ({ value: r.name, label: r.name }));

/* ---------------- actions ---------------- */
let cache = {};
async function ensureCache() {
  const [accounts, targets, budget] = await Promise.all([api.get('/api/accounts'), api.get('/api/targets'), api.get('/api/budget')]);
  cache = { accounts, targets, budget };
}
const gateNote = (inv, text) => ({ type: 'note', text: `<b>${inv}</b> — ${text}` });

const QUICK = {
  'new-account': () => openModal('New Account', [
    gateNote('INV-4 balance-is-derived', 'only <b>initial_amount</b> is stored; the balance derives from linked money events.'),
    { name: 'name', label: 'Account name' },
    { name: 'type', label: 'Type', type: 'select', options: ['Other', 'Business', 'Checking', 'Saving', 'Invest'].map(v => ({ value: v, label: v })) },
    { name: 'initial_amount', label: 'Initial amount ($)', type: 'number' }],
    async d => { const r = await api.post('/api/accounts', { name: d.name, type: d.type, initial_amount: +d.initial_amount || 0 }); toast(`Account opened at <b>${money(r.current_balance)}</b>.`); }),

  'new-income': async () => {
    await ensureCache();
    openModal('Record Income', [
      gateNote('INV-1 · INV-5', 'the income must name its container; month/quarter/year derive from the date, never hand-picked.'),
      { name: 'name', label: 'Income name' }, { name: 'amount', label: 'Amount ($)', type: 'number' },
      { name: 'date', label: 'Date', type: 'date', value: today() },
      { name: 'account', label: 'Account', type: 'select', options: opt(cache.accounts) },
      { name: 'income_type', label: 'Income type', type: 'select', options: opt(cache.targets) },
      { name: 'note', label: 'Note (optional)' }],
      async d => { const r = await api.post('/api/incomes', { ...d, amount: +d.amount }); toast(`Recorded. <b>${d.account}</b> balance → ${money(r.account_balance)}.`); });
  },

  'new-expense': async () => {
    await ensureCache();
    openModal('Record Expense', [
      gateNote('INV-1 · INV-5 · policy', 'homed to an account; enveloped (require_category is on); spine derives from the date.'),
      { name: 'name', label: 'Expense name' }, { name: 'amount', label: 'Amount ($)', type: 'number' },
      { name: 'date', label: 'Date', type: 'date', value: today() },
      { name: 'account', label: 'Account', type: 'select', options: opt(cache.accounts) },
      { name: 'budget_category', label: 'Budget envelope', type: 'select', options: opt(cache.budget) },
      { name: 'note', label: 'Note (optional)' }],
      async d => {
        const r = await api.post('/api/expenses', { ...d, amount: +d.amount });
        toast(`Recorded. ${r.envelope ? `<b>${r.envelope.name}</b> at ${r.envelope.utilization}% — ${r.envelope.verdict}` : `Balance → ${money(r.account_balance)}`}`);
      });
  },

  'new-transfer': async () => {
    await ensureCache();
    openModal('New Transfer', [
      gateNote('INV-2 exactly-one-destination', 'one from-account debited, exactly one destination credited. Goal/debt progress moves only through here (INV-6).'),
      { name: 'name', label: 'Transfer name (optional)' },
      { name: 'amount', label: 'Amount ($)', type: 'number' },
      { name: 'date', label: 'Date', type: 'date', value: today() },
      { name: 'from_account', label: 'From account', type: 'select', options: opt(cache.accounts) },
      { name: 'kind', label: 'Destination kind', type: 'select', options: ['account', 'goal', 'debt', 'subscription', 'budget_category', 'investment'].map(v => ({ value: v, label: pretty(v) })) },
      { name: 'dest', label: 'Destination (exact name)' }],
      async d => {
        const r = await api.post('/api/transfers', { name: d.name || undefined, amount: +d.amount, date: d.date, from_account: d.from_account, to: { [d.kind]: d.dest } });
        toast(`Transfer <b>${r.type}</b> → ${d.dest}. From-balance ${money(r.from_balance_after)}.${r.overdraft ? ' ⚠ ' + esc(r.overdraft) : ''}`);
      });
  },

  'new-subscription': async () => {
    await ensureCache();
    openModal('New / Update Subscription', [
      gateNote('INV-4 · INV-7', 'monthly_cost derives from amount ÷ billing; <b>paid</b> derives from a payment transfer — no verb accepts it. Upserts by name.'),
      { name: 'name', label: 'Subscription name' },
      { name: 'amount', label: 'Billed amount ($)', type: 'number' },
      { name: 'billing', label: 'Billing', type: 'select', options: ['Monthly', 'Quarterly', 'Yearly'].map(v => ({ value: v, label: v })) },
      { name: 'status', label: 'Status', type: 'select', options: ['Active', 'Inactive'].map(v => ({ value: v, label: v })) }],
      async d => { const r = await api.post('/api/subscriptions', { ...d, amount: +d.amount }); toast(`Saved — monthly cost ${money(r.monthly_cost)}; umbrella refreshed to ${money(r.umbrella_amount)}.`); });
  },

  'new-goal': () => openModal('New / Update Goal', [
    gateNote('INV-6 progress-is-funded-only', 'no funded/balance/progress input exists — fund it through a transfer. Upserts by name.'),
    { name: 'name', label: 'Goal name' },
    { name: 'target_amount', label: 'Target amount ($)', type: 'number' },
    { name: 'target_date', label: 'Target date', type: 'date' },
    { name: 'initial_amount', label: 'Initial amount ($)', type: 'number', value: '0' }],
    async d => { const r = await api.post('/api/goals', { name: d.name, target_amount: +d.target_amount, target_date: d.target_date || null, initial_amount: +d.initial_amount || 0 }); toast(`Goal at ${money(r.balance)} — ${r.progress || 0}%.`); }),

  'new-debt': async () => {
    await ensureCache();
    openModal('New Debt', [
      gateNote('INV-6 · INV-1', 'no funded/progress input exists; repayment moves only through funding transfers. The debt names its servicing account.'),
      { name: 'name', label: 'Debt name' },
      { name: 'total_amount', label: 'Total owed ($)', type: 'number' },
      { name: 'account', label: 'Servicing account', type: 'select', options: opt(cache.accounts) },
      { name: 'cadence', label: 'Cadence', type: 'select', options: ['Monthly', 'Yearly'].map(v => ({ value: v, label: v })) }],
      async d => { await api.post('/api/debts', { ...d, total_amount: +d.total_amount }); toast('Debt registered at 0% — fund it through a transfer.'); });
  },

  'new-investment': async () => {
    await ensureCache();
    openModal('Log Investment Profit', [
      gateNote('the source machine', 'one overwritten this-month number — a snapshot, not a series. Creating a vehicle needs its account + risk type (INV-1).'),
      { name: 'investment', label: 'Investment name' },
      { name: 'this_month_profit', label: 'This month profit ($)', type: 'number' },
      { name: 'account', label: 'Account (create only)', type: 'select', options: opt(cache.accounts) },
      { name: 'type', label: 'Risk (create only)', type: 'select', options: ['High Risk Investment', 'Low Risk Investment'].map(v => ({ value: v, label: v })) }],
      async d => { const r = await api.post('/api/investments', { ...d, this_month_profit: +d.this_month_profit }); toast(`Profit ${r.old_profit == null ? 'set' : `${money(r.old_profit)} →`} ${money(r.new_profit)}.`); });
  },

  'set-budget': () => openModal('Set Budget', [
    gateNote('INV-8 target-binds-to-month', 'the envelope binds to the month it governs; utilization is graded only against that month.'),
    { name: 'budget_category', label: 'Envelope name' },
    { name: 'monthly_budget', label: 'Monthly budget ($)', type: 'number' },
    { name: 'budget_month', label: 'Month (YYYY-MM, default current)', ph: today().slice(0, 7) }],
    async d => { const r = await api.post('/api/budget', { budget_category: d.budget_category, monthly_budget: +d.monthly_budget, budget_month: d.budget_month || undefined }); toast(`Envelope bound to <b>${r.bound_month}</b> — ${r.utilization ?? 0}% used.`); }),

  'set-target': () => openModal('Set Income Target', [
    gateNote('INV-8 target-binds-to-month', 'the target binds to the month it governs; attainment is graded only against that month.'),
    { name: 'income_type', label: 'Income type' },
    { name: 'monthly_target', label: 'Monthly target ($)', type: 'number' },
    { name: 'target_month', label: 'Month (YYYY-MM, default current)', ph: today().slice(0, 7) }],
    async d => { const r = await api.post('/api/targets', { income_type: d.income_type, monthly_target: +d.monthly_target, target_month: d.target_month || undefined }); toast(`Target bound to <b>${r.bound_month}</b> — ${r.attainment ?? 0}% attained.`); }),
};

const VERB = {
  pay: async (id, name) => {
    await ensureCache();
    openModal(`Pay — ${name}`, [
      gateNote('INV-7 paid-means-a-payment', 'paying creates a dated payment transfer; <b>paid</b> derives from it and resets at cycle start. Inactive subscriptions refuse (INV-9).'),
      { name: 'from_account', label: 'From account', type: 'select', options: opt(cache.accounts) },
      { name: 'amount', label: 'Amount ($ — default: billed amount)', type: 'number' },
      { name: 'date', label: 'Date', type: 'date', value: today() }],
      async d => { const r = await api.post(`/api/subscriptions/${id}/pay`, { from_account: d.from_account, amount: d.amount ? +d.amount : undefined, date: d.date }); toast(`Paid — derived <b>paid=${r.paid}</b>; from-balance ${money(r.from_balance_after)}.`); }, 'Pay');
  },
  'fund-goal': async (id, name) => fundModal('goal', name),
  'fund-debt': async (id, name) => fundModal('debt', name),
  'complete-goal': async (id, name) => {
    const r = await api.post('/api/goals', { name, complete: true });
    toast(`<b>${name}</b> marked complete — the workspace's call (INV-9). Balance stays ${money(r.balance)}.`);
    rerender();
  },
  'log-profit': (id, name) => openModal(`Log profit — ${name}`, [
    { name: 'this_month_profit', label: 'This month profit ($)', type: 'number' }],
    async d => { const r = await api.post('/api/investments', { investment: name, this_month_profit: +d.this_month_profit }); toast(`Profit ${money(r.old_profit)} → ${money(r.new_profit)} (snapshot overwritten).`); }, 'Overwrite'),
};
async function fundModal(kind, name) {
  await ensureCache();
  openModal(`Fund — ${name}`, [
    gateNote('INV-6 progress-is-funded-only', `this transfer is the only thing that moves the ${kind}'s progress.`),
    { name: 'amount', label: 'Amount ($)', type: 'number' },
    { name: 'from_account', label: 'From account', type: 'select', options: opt(cache.accounts) },
    { name: 'date', label: 'Date', type: 'date', value: today() }],
    async d => {
      const r = await api.post('/api/transfers', { amount: +d.amount, date: d.date, from_account: d.from_account, to: { [kind]: name } });
      toast(`Funded — ${name} now ${r.destination.progress ?? 0}% (${money(r.destination.funded)}).${r.overdraft ? ' ⚠ ' + esc(r.overdraft) : ''}`);
    }, 'Fund');
}

/* ---------------- router + wiring ---------------- */
const RENDER = { dashboard: renderDashboard, accounts: renderAccounts, incomes: renderIncomes, expenses: renderExpenses, budget: renderBudget, subscriptions: renderSubscriptions, transfers: renderTransfers, debts: renderDebts, report: renderReport, networth: renderNetworth, goals: renderGoals, investments: renderInvestments };
function setActive(sec) { document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.route === sec)); }
async function router() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const sec = parts[0] || 'dashboard';
  window.scrollTo(0, 0);
  try {
    if (sec === 'd') { setActive(''); await renderDetail(parts[1], parts[2]); }
    else { setActive(sec); await (RENDER[sec] || renderDashboard)(parts.slice(1)); }
  } catch (err) { $('#main').innerHTML = `<div class="empty">Error: ${esc(err.message)}</div>`; }
  api.get('/api/report').then(r => $('#nav-flags').textContent = r.flags.length || '').catch(() => {});
}
const rerender = () => router();

document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]'); if (!t) return;
  const fn = QUICK[t.dataset.act] || VERB[t.dataset.act];
  if (fn) { e.preventDefault(); Promise.resolve(fn(t.dataset.id, t.dataset.name)).catch(err => toast(err.message, true)); }
});
$('#modal-x').onclick = closeModal;
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
window.addEventListener('hashchange', router);
router();
