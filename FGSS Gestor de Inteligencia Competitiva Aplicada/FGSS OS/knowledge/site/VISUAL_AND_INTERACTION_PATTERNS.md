# Visual and interaction patterns — TheFounderOS

Distilação dos padrões visuais e de interação que fazem o site e as demos do
TheFounderOS parecerem "vivos". Baseada exclusivamente nos arquivos crus
em `raw/site/`.

**Classificação**: toda observação descritiva é `observation`. Toda
recomendação para FGSS.io é `inference`. Nada aqui é `commercial_claim`
promovido a fato.

---

## 1. Overview

`[observation]` O site TheFounderOS transmite a sensação de um "sistema
operacional vivo" por meio de três camadas sobrepostas:

1. **Animações de terminal**: toda seção de página usa elementos
   `data-typeline="true" data-state="idle"` que, via JavaScript externo,
   simatem digitação de texto linha por linha — como se um boot estivesse
acontecendo em tempo real. A barra superior
   (`data-testid="status-line"`) mostra `▶ exec 00_boot` e uma porcentagem
   `000%` que sobe conforme o scroll, com uma barra de progresso de 2px
   (`data-testid="status-progress"`) em `--os-accent`.

2. **Estrutura codificada visível**: o organograma em `/os` (seção `anatomy`)
   mostra a empresa como uma árvore de arquivos — spine → blocks → agents →
   skills — renderizada em divs com classes `co-row` e índices
   `style="--i:N"` para stagger de animação. O pipeline mostra fontes
   entrando de um lado, um anel central girando, e sistemas saindo do outro.

3. **Demos reais embarcadas**: cinco aplicações HTML/JS/CSS estáticas
   (`creator-os`, `crm-os`, `finance-os`, `project-management-os`,
   `second-brain-os`) são embarcadas em `<iframe>` dentro de um carrossel
   horizontal (`os-belt`). Cada iframe aponta para
   `/heuresis-os/{nome}/index.html` e é renderizado com
   `transform:scale(0.7)` e `pointer-events-none` — o usuário vê a interface
   real mas não pode interagir dentro do carrossel.

`[observation]` O efeito "vivo" é construído inteiramente no front-end. Não
há WebSocket, não há backend em tempo real nas demos. O `heuresis-shim.js`
intercepta `window.fetch` e serve um `fixtures.json` estático. Mutações
(POST/PUT/DELETE) retornam `{ ok: true }` sem persistir. As animações de
digitação e progresso são acionadas por scroll e IntersectionObserver, não
por dados em streaming.

---

## 2. The organogram pattern (`/os` page)

### 2.1 The anatomy section

`[observation]` A seção `anatomy` (os.html, `data-process="03_anatomy"`)
visualiza a estrutura da "encoded company" como uma árvore de arquivos
dentro de uma janela com borda.

**Estrutura HTML real** (des-minificada para legibilidade):

```html
<section id="anatomy" data-process="03_anatomy"
         class="border-t border-os-border py-16 sm:py-24">
  <div class="mx-auto w-full max-w-6xl px-5 sm:px-8">
    <!-- eyebrow + headline -->
    <p class="page-eyebrow font-mono text-[11px] uppercase tracking-[0.25em]
              text-os-dim">
      <span data-typeline="true" data-state="idle"
            aria-label="The anatomy">The anatomy</span>
    </p>
    <h2 class="mt-3 text-3xl font-bold ...">
      <span data-decode="true" data-state="idle">Every company is a folder.</span>
      <span class="block text-os-muted" data-decode="true" ...>
        One structure: spine, departments, agents, skills.
      </span>
    </h2>

    <!-- bordered "window" container -->
    <div class="rounded-lg-t border border-os-border bg-os-bg">
      <div class="border-b border-os-border px-5 py-3">
        <span class="font-mono text-[11px] tracking-tight text-os-muted">
          encoded-company<span style="color:#b46f37">/</span>
          <span class="ml-2 text-os-dim">· the anatomy every company shares</span>
        </span>
      </div>

      <!-- 2-column grid: folder icon (left) | co-row tree (right) -->
      <div class="relative px-4 py-8 sm:px-10 sm:py-14">
        <div class="relative grid items-center gap-8 lg:grid-cols-[minmax(0,300px)_1fr]">

          <!-- LEFT: SVG folder icon with 3-gradient layer flip -->
          <div class="flex flex-col items-center gap-4">
            <div class="co-folder relative"
                 style="filter:drop-shadow(0 12px 22px rgba(46,110,190,0.28))">
              <svg width="216" height="177" viewBox="0 0 220 180"
                   role="img" aria-label="Encoded company folder">
                <defs>
                  <linearGradient id="hx-anatomy-back" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#57A6EC"/>
                    <stop offset="1" stop-color="#3C89DE"/>
                  </linearGradient>
                  <linearGradient id="hx-anatomy-front" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#86C2FC"/>
                    <stop offset="1" stop-color="#4C9DEE"/>
                  </linearGradient>
                  <linearGradient id="hx-anatomy-gloss" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#ffffff" stop-opacity="0.5"/>
                    <stop offset="0.5" stop-color="#ffffff" stop-opacity="0.08"/>
                    <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <!-- back tab -->
                <path d="M22 40 h52 a10 10 0 0 1 8 4 l9 12 ..."
                      fill="url(#hx-anatomy-back)"/>
                <!-- front face -->
                <rect x="6" y="70" width="208" height="98" rx="18"
                      fill="url(#hx-anatomy-front)"/>
                <!-- gloss overlay -->
                <rect x="6" y="70" width="208" height="98" rx="18"
                      fill="url(#hx-anatomy-gloss)"/>
                <!-- title bar line -->
                <rect x="18" y="78" width="150" height="3" rx="1.5"
                      fill="#ffffff" opacity="0.55"/>
              </svg>
            </div>
            <p class="font-mono text-lg tracking-tight text-os-text">
              encoded-company<span style="color:#b46f37">/</span>
            </p>
          </div>

          <!-- RIGHT: 4 co-row blocks (the tree) -->
          <div class="flex flex-col gap-4">
            <!-- Block 01: root spine -->
            <div class="co-row relative rounded-md-t border border-os-border
                        bg-os-bg px-4 py-3.5" style="--i:0">
              <span class="absolute left-[-5px] top-1/2 hidden h-2.5 w-2.5
                           -translate-y-1/2 rounded-full border-2 border-os-bg
                           bg-os-text lg:block"/>
              <span class="font-mono text-[10px]" style="color:#b46f37">01</span>
              <h4 class="font-mono text-[13px] uppercase tracking-[0.16em]">
                The root spine</h4>
              <span class="font-mono text-[10px] lowercase">what boots the company</span>
              <ul>
                <li><span class="text-os-dim">▭</span> system.md</li>
                <li><span class="text-os-dim">▭</span> encoding.md</li>
                <li><span class="text-os-dim">▭</span> invariants.md</li>
                <li><span class="text-os-dim">▭</span> company.yaml</li>
                <li><span class="text-os-dim">▭</span> readme.md</li>
              </ul>
            </div>
            <!-- Block 02: Blocks (departments) --i:1 -->
            <!-- Block 03: Agents --i:2 -->
            <!-- Block 04: Skills --i:3 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

`[observation]` **Atributes and classes worth noting**:

| Element | Attribute/Class | Purpose |
|---|---|---|
| `<section>` | `data-process="03_anatomy"` | Used by scroll animation JS to trigger section reveal |
| `<span>` | `data-typeline="true" data-state="idle"` | Text typewriter animation; JS flips `data-state` to `typing` then `done` |
| `<span>` | `data-decode="true" data-state="idle"` | Character-by-character decode animation (different from typeline) |
| `<div class="co-row">` | `style="--i:N"` | CSS custom property used for staggered entrance animation delay |
| `<span>` | `style="color:#b46f37"` | The copper/accent color, hardcoded inline (same as `--copper` in tokens.css) |
| `<svg>` | 3 `<linearGradient>` IDs | The folder icon is composed of 3 stacked layers: back (dark), front (light), gloss (transparent white) |

`[observation]` **The 3-layer flip pattern**: The folder icon is not a flat
image. It is an SVG with three `<linearGradient>` definitions that create
depth:

- `hx-anatomy-back` — the back tab (darker blue, `#57A6EC → #3C89DE`)
- `hx-anatomy-front` — the front face (lighter blue, `#86C2FC → #4C9DEE`)
- `hx-anatomy-gloss` — a white-to-transparent overlay creating a glossy
  highlight on the top half

This same 3-gradient pattern is reused for every folder icon on the site
(personas section, encode tour steps, pipeline), each with unique gradient
IDs (e.g. `pw-growth-operator-agency-back`, `tour-I-front`).

`[observation]` **The co-row tree**: Each of the 4 blocks is a
`div.co-row` with:
- A numbered prefix (`01`–`04`) in copper color
- A title in `font-mono uppercase tracking-[0.16em]`
- A subtitle in `font-mono lowercase tracking-[0.08em]`
- A `<ul>` of items, each prefixed by a Unicode glyph (`▭` `▦` `◦` `▸`)
- A bullet dot on the left edge (`absolute left-[-5px]`), visible only on
  `lg` screens, creating a vertical "spine" line when stacked

The 4 blocks map to the hierarchy: **spine** (boot files) → **blocks**
(departments) → **agents** (who does work) → **skills** (inside every
skill.md).

### 2.2 The pipeline section

`[observation]` A seção `pipeline` (`data-process="01_pipeline"`) mostra
fontes de negócio entrando de um lado, um anel central processando, e
sistemas saindo do outro.

**Estrutura**:

```html
<section id="pipeline" data-process="01_pipeline">
  <!-- terminal log lines (animated by data-typeline) -->
  <p><span class="text-os-accent">›</span>
     <span data-typeline="true">open intake … 7 sources found</span></p>
  <p><span class="text-os-accent">›</span>
     <span data-typeline="true">ingest business … ok</span></p>
  <p><span class="text-os-accent">›</span>
     <span data-typeline="true">encode departments … ok</span></p>
  <p><span class="text-os-accent">›</span>
     <span data-typeline="true">route to agents … live</span></p>

  <!-- 3-column grid: inputs | ring | outputs -->
  <div class="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">

    <!-- LEFT: 7 input sources as co-row pills -->
    <div>
      <p>in · the scattered business</p>
      <span class="co-row rounded-full" style="--i:0">◇ any business</span>
      <span class="co-row rounded-full" style="--i:1">▭ sops + playbooks</span>
      <span class="co-row rounded-full" style="--i:2">▤ inbox threads</span>
      <span class="co-row rounded-full" style="--i:3">▦ crm records</span>
      <span class="co-row rounded-full" style="--i:4">▦ spreadsheets</span>
      <span class="co-row rounded-full" style="--i:5">▭ meeting notes</span>
      <span class="co-row rounded-full" style="--i:6">◆ brand assets</span>
    </div>

    <!-- CENTER: the ring -->
    <div class="relative justify-self-center px-14 py-8">
      <span class="hxp-stage absolute left-1/2 top-0 -translate-x-1/2">encode</span>
      <span class="hxp-stage absolute bottom-0 left-1/2 -translate-x-1/2">staff</span>
      <span class="hxp-stage absolute left-0 top-1/2 -translate-y-1/2">ingest</span>
      <span class="hxp-stage absolute right-0 top-1/2 -translate-y-1/2">route</span>
      <div class="relative h-[124px] w-[124px]">
        <div class="hxp-glow"/>
        <svg class="hxp-ring absolute inset-0" viewBox="0 0 124 124">
          <circle cx="62" cy="62" r="53" fill="none"
                  stroke="var(--border-strong)" stroke-width="1.5"
                  stroke-dasharray="2 7" stroke-linecap="round"/>
        </svg>
        <span class="absolute inset-0 flex items-center justify-center
                     font-mono text-[15px]">os/</span>
      </div>
    </div>

    <!-- RIGHT: 6 output systems as co-row pills -->
    <div>
      <p>out · the running os</p>
      <span class="co-row rounded-full" style="--i:7">◦ second brain</span>
      <span class="co-row rounded-full" style="--i:8">◦ agent roster</span>
      <span class="co-row rounded-full" style="--i:9">▸ revenue funnel</span>
      <span class="co-row rounded-full" style="--i:10">▸ content engine</span>
      <span class="co-row rounded-full" style="--i:11">▭ daily brief</span>
      <span class="co-row rounded-full" style="--i:12">◇ any department</span>
    </div>
  </div>

  <!-- SVG connector placeholder (width=0, height=0 — JS draws lines at runtime) -->
  <svg data-testid="pipeline-connectors" class="pointer-events-none absolute"
       width="0" height="0" viewBox="0 0 0 0"/>

  <!-- canvas for particle/ambient effects -->
  <canvas class="absolute inset-0 h-full w-full"/>
</section>
```

`[observation]` **Key details**:
- The `pipeline-connectors` SVG starts with `width="0" height="0"` —
  JavaScript (in a Next.js chunk not captured statically) measuments DOM
  positions at runtime and draws curved connector lines between input
  pills and the ring, and between the ring and output pills.
- The `hxp-ring` is a dashed circle (`stroke-dasharray="2 7"`) that rotates
  via CSS animation, creating a "processing" feel.
- The `hxp-glow` div likely has a radial gradient + pulse animation.
- The `hxp-stage` labels (encode/ingest/route/staff) are positioned at the
  4 cardinal points around the ring.
- A `<canvas>` at the bottom of the section provides ambient particle
  effects — the same canvas pattern appears in the anatomy section.

### 2.3 The orchestrator radial graph

`[observation]` A seção `how` (`data-process="02_orchestrate"`) mostra um
grafo radial: o orchestrator no centro, 8 departamentos ao redor, linhas
tracejadas conectando.

```html
<div class="relative mx-auto aspect-square w-full max-w-[560px]">
  <svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100"
       preserveAspectRatio="none">
    <!-- 8 dashed lines from center (50,50) to department positions -->
    <line x1="50" y1="50" x2="50" y2="11"
          stroke="var(--border-strong)" stroke-width="0.35"
          stroke-dasharray="1.4 1.4"/>
    <!-- ... 7 more lines to computed positions ... -->
    <!-- 8 small circles at department endpoints -->
    <circle cx="50" cy="11" r="0.9" fill="var(--text-3)"/>
    <!-- ... 7 more ... -->
  </svg>

  <!-- center node -->
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <div class="rounded-md-t border border-os-border-strong bg-os-bg px-4 py-3">
      <span class="font-mono text-[13px]">your-company<span style="color:#b46f37">/</span></span>
      <span class="font-mono text-[9px] uppercase tracking-[0.2em]">the orchestrator</span>
    </div>
  </div>

  <!-- department labels positioned by percentage -->
  <span class="absolute" style="left:50%;top:11%">foundations</span>
  <span class="absolute" style="left:77.58%;top:22.42%">marketing</span>
  <span class="absolute" style="left:89%;top:50%">sales</span>
  <span class="absolute" style="left:77.58%;top:77.58%">fulfillment</span>
  <span class="absolute" style="left:50%;top:89%">operations</span>
  <span class="absolute" style="left:22.42%;top:77.58%">finance</span>
  <span class="absolute" style="left:11%;top:50%">product</span>
  <span class="absolute" style="left:22.42%;top:22.42%">growth</span>
</div>
```

`[observation]` The department positions are computed trigonometrically
(8 points evenly spaced on a circle, radius ~39 units from center in a
100×100 viewBox). The SVG uses `preserveAspectRatio="none"` so the lines
stretch with the container, while the labels are positioned by CSS
percentage — this means the graph is responsive but not a true
data-driven visualization; it's a static layout with hardcoded coordinates.

---

## 3. The "live map" pattern (`/os` home)

`[observation]` A seção `inside` (`id="inside"`,
`data-process="07_seat.unpack"`) na home page **não é um grafo vivo nem
um mapa interativo**. É uma grid de 6 cards (`grid-cols-3`), cada um com
um pequeno SVG ilustrativo estático (`data-testid="seat-visual"`).

Cada SVG é uma composição simbólica minimalista:

| Card | SVG visual | Elementos |
|---|---|---|
| The repo | Lista de arquivos | 3 `<rect>` com `<line>` simulando linhas de texto |
| The tools | Gráfico de barras | 5 `<rect>` verticais + linha de base + sinal `+` |
| The workspaces | Círculos de Venn | 4 `<circle>` sobrepostos, um destacado em `--accent` |
| Live sessions | Forma de onda | 11 `<line>` verticais com alturas variáveis |
| Community | Grafo social | 4 `<circle>` peripherals + 1 central preenchido |
| The licence | Chave/licença | `<circle>` + linha reta com marcas |

`[observation]` Todos os SVGs usam `stroke="var(--text-3)"` (cinza) com um
único elemento destacado em `stroke="var(--accent, #ef4444)"` ou
`fill="var(--accent)"`. Não há animação nestes SVGs — são estáticos.

`[observation]` A "mechanism" section (`id="mechanism"`,
`data-process="03b_onboard.layers"`) apresenta 4 camadas como cards
accordion:

- Layer 01: **Context** — "What it knows" (give the AI your world)
- Layer 02: **Connect** — "Your stack, connected"
- Layer 03: (not fully extracted, but follows same pattern)
- Layer 04: (same)

Cada card usa `<button aria-expanded="true|false">` para expansão, com
`<span class="text-os-accent">Layer 01</span>` e um indicador `−`/`+` de
accordion.

---

## 4. The demo dashboard pattern (heuresis-os/*)

### 4.1 Architecture: "thin skin over verbs/model"

`[observation]` O comentário de cabeçalho de `creator-os/app.js` (linha 1-3)
declara explicitamente a arquitetura:

```javascript
// app.js — CREATOR-OS front end. A faithful, interconnected mirror of the Creator OS product.
// Thin skin over the verbs/model: the 18 backing sources in their native views + clickable
// detail pages. No business logic here — every gate lives server-side.
```

`[observation]` A UI não contém lógica de negócio. Toda ação é um
`api.post()` que delega ao backend (ou, no demo, ao shim). O front-end
apenas:

1. Renderiza dados recebidos de `api.get()`
2. Dispara ações via `api.post()` e exibe o resultado em um `toast()`
3. Re-renderiza com `rerender()` (que chama `router()` novamente)

### 4.2 The board/lane Kanban pattern

`[observation]` O padrão Kanban é implementado em duas funções:
`contentBoard(items)` e `sponsorBoard(items)`.

```javascript
const CONTENT_ORDER = ['Idea', 'Planning', 'Research', 'Filming',
  'Editing', 'Ready to Publish', 'Published'];

const laneDot = (st) => st === 'Published' ? 'dot'
  : ['Idea', 'Planning'].includes(st) ? 'dot hollow' : 'dot half';

function contentBoard(items) {
  return `<div class="board">${CONTENT_ORDER.map(st => {
    const inLane = items.filter(c => c.status === st);
    const cls = st === 'Published' ? 'lane terminal' : 'lane';
    return `<section class="${cls}">
      <div class="lane-head">
        <span class="name"><span class="${laneDot(st)}"></span>${st}</span>
        <span class="sum">${inLane.length}</span>
      </div>
      <div class="lane-body">
        ${inLane.map(contentCard).join('') || '<div class="empty">—</div>'}
      </div>
    </section>`;
  }).join('')}</div>`;
}
```

`[observation]` **Lane dot semantics** (defined in `heuresis.css` lines 32-34):
- `.dot` — 9px filled circle → terminal/complete state
- `.dot.half` — half-filled circle → in-progress state
- `.dot.hollow` — hollow circle → early/idea state

These are the "five marks" — shape conveys state, not color.

`[observation]` The sponsorship board has a second dimension: each lane
shows both count and dollar sum (`${inLane.length} · ${money(sum)}`), and
tracks "quiet days" per card with a stall threshold:

```javascript
const STALL_DAYS = { Inbox: 7, Negotiations: 5, Agree: 10 };
const stalled = STALL_DAYS[s.status] != null
  && Number(s.quiet_days) > STALL_DAYS[s.status];
```

Stalled cards show `${s.quiet_days}d quiet` with class `hot` (inverted
background).

### 4.3 The dashboard with metrics, flags, and pipeline

`[observation]` `renderDashboard()` (app.js:85-109) composes the dashboard
from 4 sections:

```javascript
async function renderDashboard() {
  const [r, counts, content] = await Promise.all([
    api.get('/api/report'),
    api.get('/api/counts'),
    api.get('/api/content')
  ]);

  // 1. METRICS ROW — 4 KPI tiles
  const m = [
    ['Weighted deals', money(r.sponsorships.weighted)],
    ['Won', money(r.sponsorships.won)],
    ['Month balance', money(r.money.balance)],
    ['Habits today', r.habits.today == null ? '—' : r.habits.today + '%'],
  ];

  // 2. FLAGS LIST — exceptions surfacing
  const flags = [];
  r.sponsorships.stalled.forEach(s =>
    flags.push(`⚑ <b>${esc(s.sponsor_name)}</b> quiet ${s.quiet_days}d ...`));
  r.sponsorships.mismatches.forEach(s =>
    flags.push(`⚠ <b>${esc(s.sponsor_name)}</b> ${s.status} but payment ${s.payment}`));
  r.calendar.ready_no_date.forEach(c =>
    flags.push(`◷ <b>${esc(c.content_title)}</b> is Ready to Publish with no date`));
  r.growth.filter(g => g.behind).forEach(g =>
    flags.push(`↘ <b>${esc(g.objective)}</b> at ${g.progress}% — behind pace`));

  // 3. DB-GRID — entity count cards (14 entities)
  const dbs = [['contents','Content','content'], ['platforms','Platforms','platforms'], ...];

  // 4. TODAY'S WORK TABLE + CONTENT PIPELINE BOARD
  $('#main').innerHTML =
    `<div class="metrics">...</div>`
    + (flags.length ? `<div class="flags">...</div>` : '')
    + `<div class="db-grid">...</div>`
    + `<h3 class="sec-h">Today's Work</h3>` + todaysWorkTable
    + `<h3 class="sec-h">Content Pipeline</h3>` + contentBoard(content);
}
```

`[observation]` **Flags are the exception surface** — they aggregate
stalled deals, state mismatches (e.g., Completed but payment still Inbox),
undated ready-to-publish content, and behind-pace goals. Each flag uses a
symbol prefix (`⚑` `⚠` `◷` `↘`) and bold entity name. This is the pattern
that makes the dashboard feel "aware" — it surfaces problems, not just
numbers.

### 4.4 The gate UI

`[observation]` The gate is a visual primitive indicating that an action
requires approval and cannot be auto-executed. It is defined in
`heuresis.css:35`:

```css
.gate {
  display: inline-block; flex: none;
  width: 9px; height: 9px;
  background: var(--t1);
  transform: rotate(45deg); /* a diamond */
}
```

`[observation]` In `app.js`, the gate is prepended to button labels for
actions that require a server-side decision:

```javascript
// Content advance — gate when moving to "Ready to Publish"
const actions = c.status === 'Published' ? '' :
  mini('c-advance', c.id,
    (nextIsPublish ? '<span class="gate"></span>' : '') + 'Advance →')
  + mini('c-schedule', c.id, '◷ Schedule');

// Sponsorship advance — gate when status is "Agree"
mini('s-advance', s.id,
  (s.status === 'Agree' ? '<span class="gate"></span>' : '') + 'Advance →')

// Payment — gate when payment is "In progress"
mini('s-pay', s.id,
  (s.payment === 'In progress' ? '<span class="gate"></span>' : '')
  + '$ ' + (s.payment === 'Inbox' ? 'Start payment' : 'Mark paid'))
```

`[observation]` The gate appears on 3 specific transitions:
1. Content → "Ready to Publish" (publishing is earned, INV-3)
2. Sponsorship deal → "Agree" (deal closure requires judgment)
3. Sponsorship payment → "In progress" (money movement requires approval)

The gate does not prevent the click — it signals that the server (or shim)
will enforce the precondition. In the demo, the shim returns `{ ok: true }`
for all POSTs, so the gate is purely visual. In production, the backend
would validate and potentially reject.

### 4.5 The hash-based router

`[observation]` Routing is hash-based, requiring no server-side route
handling (app.js:404-413):

```javascript
async function router() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const sec = parts[0] || 'dashboard';
  window.scrollTo(0, 0);
  try {
    if (sec === 'd') {
      setActive('');
      await renderDetail(parts[1], parts[2]);  // #/d/{entity}/{id}
    } else {
      setActive(sec);
      await (RENDER[sec] || renderDashboard)(parts.slice(1));
    }
  } catch (err) {
    $('#main').innerHTML = `<div class="empty">Error: ${esc(err.message)}</div>`;
  }
  api.get('/api/inbox').then(i =>
    $('#nav-inbox').textContent = i.length || '').catch(() => {});
}
window.addEventListener('hashchange', router);
router(); // initial render
```

`[observation]` Two route patterns:
- **List views**: `#/dashboard`, `#/content`, `#/sponsorships`, etc. →
  calls `RENDER[sec](args)`
- **Detail pages**: `#/d/{entity}/{id}` → calls `renderDetail(entity, id)`,
  which fetches `/api/detail/{entity}/{id}` and renders a props table +
  relation chips + body text

### 4.6 The detail page

`[observation]` `renderDetail()` (app.js:279-295) renders:

1. **Breadcrumb**: `← {section}` linking back to the list view
2. **Detail head**: icon (`ICON[entity]`) + title
3. **Props table**: 2-column grid (`190px 1fr`) with key/value pairs;
   money keys formatted as `$N,NNN`, date keys as `Mon DD, YYYY`, chip keys
   as `<span class="chip">`, progress as `progressBar()`
4. **Body text**: left-bordered block (`border-left: 2px solid`)
5. **Relations**: for each related entity, a section with relchips linking
   to `#/d/{entity}/{id}`

`[observation]` The detail page is entirely data-driven — the `propsHTML`
function iterates over all keys in the record (excluding `id`, title field,
`body`, and `*_id` foreign keys), inferring the display type from key name
patterns (`MONEY_KEYS`, `DATE_KEYS`, `CHIP_KEYS`). This means any entity
schema automatically gets a detail page without per-entity UI code.

### 4.7 The modal form

`[observation]` `openModal(title, fields, onSubmit)` (app.js:298-319)
generates a form from a field spec:

```javascript
const fields = [
  { name: 'title', label: 'Content title' },
  { name: 'content_type', label: 'Type', type: 'select',
    options: CONTENT_TYPES.map(v => ({ value: v, label: v })) },
  { name: 'topic_id', label: 'Topic', type: 'select', options: [...] },
  { name: 'body', label: 'Body', type: 'textarea' },
  { name: 'habits', label: 'Habits done', type: 'checks',
    options: HABITS.map(([k, l]) => ({ value: k, label: l })) },
  { type: 'note', text: 'modal-note content' },
];
```

Field types: `text` (default), `select`, `textarea`, `date`, `number`,
`checks` (multi-checkbox), `note` (read-only info block).

---

## 5. The "belt is rolling" tool carousel

`[observation]` The `os-belt` appears on both `/os` (section `tools`) and
the home page. It is a horizontal-scroll carousel showing 5 demo
applications.

```html
<div data-testid="os-belt" data-drifting="true"
     class="flex gap-6 overflow-x-auto pb-4
            [-webkit-overflow-scrolling:touch]
            [scrollbar-width:thin] snap-none">

  <!-- Each slide: 1040px max width, snap-center -->
  <div class="min-w-0 shrink-0 basis-[min(90vw,1040px)] snap-center">
    <div class="mb-4 flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <span class="font-mono text-[11px] uppercase tracking-[0.25em] text-os-dim">
        01 / 05
      </span>
      <h3 class="font-mono text-xl tracking-tight sm:text-2xl">
        creator-os<span class="text-os-accent">.</span>
      </h3>
      <p class="text-sm text-os-muted">
        The creator business, from content to cashflow.
      </p>
    </div>

    <!-- The iframe with the actual demo -->
    <div class="overflow-hidden rounded-lg-t border border-os-border-strong
                bg-os-bg shadow-2xl shadow-black/25">
      <div class="overflow-hidden" style="height:58vh">
        <iframe src="/heuresis-os/creator-os/index.html"
                title="Creator OS: real front-end"
                width="1360" height="850"
                loading="lazy" scrolling="no"
                class="pointer-events-none block origin-top-left border-0 bg-white"
                style="transform:scale(0.7)">
        </iframe>
      </div>
    </div>

    <!-- Tag list below the iframe -->
    <div class="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-os-dim">
      <span class="capitalize">platforms</span>
      <span class="capitalize">content pipeline</span>
      <span class="capitalize">sponsorships</span>
      <span class="capitalize">affiliates</span>
      <span class="capitalize">growth</span>
      <span class="capitalize">finance</span>
      <span class="capitalize">habits</span>
    </div>
  </div>

  <!-- 4 more slides: crm-os, finance-os, project-management-os, second-brain-os -->
</div>
```

`[observation]` **Key attributes**:
- `data-drifting="true"` — JavaScript (in a Next.js chunk) implements a
  slow auto-drift scroll when the carousel is idle, creating the "belt is
  rolling" effect. The drift pauses on hover/touch.
- `pointer-events-none` on the iframe — the user sees the real interface
  but cannot interact with it inside the carousel. To interact, the user
  must visit the demo URL directly.
- `transform:scale(0.7)` — the iframe renders at 1360×850 and is scaled
  down to fit the carousel slide, showing a "miniature" of the full app.
- `loading="lazy"` — iframes load only when scrolled near.
- Each slide has a `01 / 05` counter, a title with the copper dot
  (`creator-os.`), a one-line description, and a tag list of modules.

`[observation]` The 5 demos and their tags:

| # | Demo | Description | Tags |
|---|---|---|---|
| 01 | creator-os | The creator business, from content to cashflow | platforms, content pipeline, sponsorships, affiliates, growth, finance, habits |
| 02 | crm-os | The revenue hub: every relationship and deal on one board | contacts, companies, deals, pipeline, sales, delivery |
| 03 | finance-os | (not fully extracted) | (extract from HTML) |
| 04 | project-management-os | (not fully extracted) | (extract from HTML) |
| 05 | second-brain-os | (not fully extracted) | (extract from HTML) |

---

## 6. Design tokens and primitives

### 6.1 Color palette (tokens.css)

`[observation]` The design system is deliberately near-monochrome. From
`tokens.css`:

```css
:root {
  /* surfaces */
  --page: #ffffff;
  --panel: #fafafa;

  /* ink ramp — 6 levels from near-black to near-white */
  --t1: #09090b;  /* primary text */
  --t2: #3f3f46;  /* secondary text */
  --t3: #52525b;  /* tertiary text */
  --t4: #71717a;  /* labels, metadata */
  --t5: #a1a1aa;  /* dim text */
  --t6: #d4d4d8;  /* disabled */

  /* hairlines */
  --line: #e4e4e7;
  --line2: #d4d4d8;

  /* the one color — wordmark dot only (DESIGN.md GATE) */
  --copper: #b46f37;
}
```

`[observation]` The CSS comment explicitly gates the accent color:
`/* the one color — wordmark dot only (DESIGN.md GATE) */`. `--copper`
is intended for the wordmark dot only (e.g., `crm-os.` where `.` is
copper). It is not a general-purpose accent. The site's primary accent
(`#ef4444` red, `--os-accent`) is defined separately in the Next.js
Tailwind config, not in the Heuresis tokens.

`[observation]` Dark mode is supported via `[data-theme="dark"]` with
inverted surfaces and ink ramp — same hairline logic, same marks.

### 6.2 Typography (fonts.css + tokens.css)

`[observation]` Four typefaces, each with a specific role:

```css
--sans: 'Geist', -apple-system, ...sans-serif;       /* human words */
--mono: 'Geist Mono', ui-monospace, ...monospace;    /* machine tokens */
--serif: 'Instrument Serif', Georgia, serif;         /* the one accent word */
--display: 'Iceland', 'Geist Mono', ...monospace;    /* OS wordmarks only */
```

| Face | Role | Weight | Usage |
|---|---|---|---|
| Geist | Body text, headings, buttons | 400–600 (variable) | All human-readable text |
| Geist Mono | Labels, metadata, code, chips, table headers | 400–600 (variable) | All "machine" tokens: statuses, keys, numbers |
| Instrument Serif | Accent word | 400 (+ italic) | "The one accent word" — sparing decorative use |
| Iceland | OS wordmarks | 400 | Display face for `creator-os.`, `crm-os.` etc. only |

`[observation]` All fonts are self-hosted as `.woff2` files with explicit
`unicode-range` declarations for Latin, Latin Extended, Cyrilrillic,
Vietnamese, and Symbols2. No network font requests. The comment states:
"Local-first, no network."

### 6.3 Radii

```css
--r-ctl: 4px;    /* controls: buttons, chips, inputs */
--r-card: 8px;   /* cards: lane, db-card, table */
--r-panel: 12px; /* panels: modal, large containers */
```

### 6.4 The five marks (heuresis.css)

`[observation]` The design system defines exactly five visual marks that
convey state through **shape, never color**:

```css
/* ---------------- the five marks (shape, never color) ---------------- */
.dot        { width: 9px; height: 9px; border-radius: 50%; background: var(--t1); }
.dot.half   { background: linear-gradient(90deg, var(--t1) 0 50%, transparent 50%);
              border: 1.5px solid var(--t1); }
.dot.hollow { background: transparent; border: 1.5px solid var(--t1); }
.gate       { width: 9px; height: 9px; background: var(--t1);
              transform: rotate(45deg); }  /* diamond */
.pill-human { font-size: 12.5px; font-weight: 500; color: var(--page);
              background: var(--t1); border-radius: var(--r-ctl);
              padding: 6px 11px; }          /* inverted pill */
.chip-agent { font-family: var(--mono); font-size: 12px; color: var(--t2);
              border: 1px solid var(--line2); border-radius: var(--r-ctl);
              padding: 6px 10px; }
.skill      { font-family: var(--mono); color: var(--t1); }
```

| Mark | Shape | Semantic |
|---|---|---|
| `.dot` (filled) | ● | Complete, terminal, done |
| `.dot.half` | ◐ | In progress, partially done |
| `.dot.hollow` | ○ | Early stage, idea, not started |
| `.gate` | ◆ (diamond) | Action requires approval — cannot auto-execute |
| `.pill-human` | Inverted pill | Human-only action (not for agents) |

### 6.5 Primitives inventory

`[observation]` Key UI primitives from `heuresis.css` and
`creator-os/styles.css`:

| Primitive | Class | Source | Purpose |
|---|---|---|---|
| Chip | `.chip` | heuresis.css:64 | Status/type badge, mono uppercase, bordered |
| Chip soft | `.chip.soft` | heuresis.css:70 | Dimmer variant for secondary attributes |
| Chip fill | `.chip.fill` | heuresis.css:71 | Inverted (dark bg) for emphasis |
| Callout | `.callout` | styles.css:47 | Info box with `ℹ` icon, panel bg, bordered |
| Gate | `.gate` | heuresis.css:35 | Diamond mark for approval-required actions |
| Progress | `.progress` | styles.css:123 | Bar + percentage, `6px` height |
| Lane | `.lane` | styles.css:90 | Kanban column, `244px` fixed width |
| Card | `.card` | styles.css:100 | Kanban card, bordered, padded |
| Metric | `.metric` | styles.css:71 | KPI tile in metrics row |
| Flag | `.flag` | styles.css:76 | Exception/alert row, left-border accent |
| DB card | `.db-card` | styles.css:83 | Entity count card, clickable |
| Button | `.btn` | heuresis.css:48 | Default transparent button |
| Button solid | `.btn.solid` | heuresis.css:56 | Inverted (dark) primary button |
| Button mini | `.btn.mini` | heuresis.css:59 | Compact action button |
| Eyebrow | `.eyebrow` | heuresis.css:22 | Section label, mono uppercase 11px |
| Subtab | `.subtab` | styles.css:56 | Tab navigation, bottom-border active |
| Relchip | `.relchip` | styles.css:205 | Relation chip on detail page |
| Toast | `.toast` | heuresis.css:122 | Fixed bottom-center notification |
| Modal | `.modal` | heuresis.css:112 | Centered dialog, `460px` max width |

---

## 7. The "fixtures + shim" architecture

`[observation]` `heuresis-shim.js` (24 lines) is the key to understanding
why the demos appear "alive" without a backend:

```javascript
// heuresis-shim.js — serve the baked fixtures.json in place of the live /api.
(function () {
  var realFetch = window.fetch.bind(window);
  var fixturesP = realFetch('fixtures.json', { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : {}; })
    .catch(function () { return {}; });

  function json(data) {
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : (input && input.url) || String(input);
    var i = url.indexOf('/api/');
    if (i === -1) return realFetch(input, init); // real asset (fixtures.json, css…)

    var method = ((init && init.method) || ... || 'GET').toUpperCase();
    var full = url.slice(i);
    var pathname = full.split('?')[0];

    return fixturesP.then(function (fx) {
      if (method !== 'GET') return json({ ok: true }); // mutations no-op in the snapshot
      if (Object.prototype.hasOwnProperty.call(fx, full)) return json(fx[full]);
      for (var k in fx) if (k.split('?')[0] === pathname) return json(fx[k]);
      return json([]); // safe universal fallback
    });
  };
})();
```

`[observation]` **How it works**:

1. On page load, the shim fetches `fixtures.json` once (a flat JSON object
   mapping API paths to response data, e.g., `{ "/api/content": [...],
   "/api/report": {...}, ... }`).
2. It replaces `window.fetch` with a wrapper that:
   - **Passes through** any URL not containing `/api/` to the real `fetch`
     (for CSS, JS, fonts, the fixtures.json itself).
   - **GET requests** to `/api/*`: looks up the URL in the fixtures
     object. First tries exact match (including query string), then falls
     back to pathname-only match. If nothing matches, returns `[]` (empty
     array — safe because array property access returns `undefined`,
     never throws).
   - **Non-GET requests** (POST, PUT, DELETE): returns `{ ok: true }`
     immediately. **Mutations are no-op.** The demo does not persist
     changes.

`[observation]` **Consequences**:
- The demos are fully static — no server, no database, no state changes.
- When a user clicks "Advance" on a content card, `api.post()` returns
  `{ ok: true }`, a toast says "Advanced → {status}", but `rerender()`
  re-fetches `/api/content` which returns the same fixture data — the
  card hasn't actually moved.
- The gate UI (◆ diamond) appears on approval-required actions, but the
  shim always returns `{ ok: true }` — the gate is purely visual in the
  demo. In production, the real backend would enforce the precondition.
- The `fixtures.json` file was not captured in the snapshot (only `app.js`
  and `styles.css` were saved per demo). The shim references it but it
  is served dynamically, not as a static file in the captured tree.

`[observation]` This is an honest demo pattern: the UI is the real
production front-end, but the data layer is a frozen snapshot. The
architecture is designed so that replacing `heuresis-shim.js` with a
real API URL is the only change needed to go from demo to production —
the `app.js` code remains identical because it only uses `fetch()`.

---

## 8. Principles for FGSS.io

`[inference]` The following recommendations map observed patterns to the
F1–F5 backlog defined in `foundation/AGENTS.md` and
`strategy/FGSS_INJECTION_BLUEPRINT.md`. They adapt principles, not
expression — FGSS.io must not copy the Heuresis/TheFounderOS visual
identity, color palette, typography, or branding.

### 8.1 The organogram as a live view of the Invariant Engine (F1)

`[inference]` TheFounderOS shows the "encoded company" as a static tree
(spine → blocks → agents → skills) with decorative animations. FGSS.io
should make this tree **data-driven and live**: each node should reflect
the actual state of the Invariant Engine — which states exist, which
transitions are allowed, which are currently active, and which are
blocked.

Specifically:
- The `co-row` pattern (numbered blocks with bullet dots) is a good
  information hierarchy. FGSS.io should adopt the concept of a
  hierarchical state tree view, but render it from the Invariant Engine's
  schema, not from hardcoded HTML.
- The lane dot semantics (filled = terminal, half = in-progress, hollow =
  early) map naturally to invariant states. FGSS.io should use shape-based
  state indicators, not color, following the "five marks" principle.
- The pipeline visualization (inputs → ring → outputs) could become a
  live view of the Memory Promotion pipeline (F4):
  `source → signal → claim → fact → memory`, with each stage showing
  real counts and real items currently in transition.

### 8.2 The "thin skin" pattern as the Blueprint SDK (F5)

`[inference]` The architecture declared in `app.js` — "thin skin over the
verbs/model: no business logic here, every gate lives server-side" — is
exactly the separation the Blueprint SDK (F5) should enforce. FGSS.io
should adopt this principle:

- The UI layer should only render data and dispatch actions. All
  invariant enforcement, capability checking, and authorization must
  happen in the backend (the Pivô/Capability Registry).
- The hash-based router pattern (`#/d/{entity}/{id}`) is simple and
  effective for a demo/admin tool. FGSS.io can adapt it for the Cockpit.
- The data-driven detail page (propsHTML iterates over record keys,
  inferring display type) is a powerful pattern: any new entity schema
  automatically gets a detail page. FGSS.io should adopt this for the
  Cockpit's entity inspector.

`[inference]` FGSS.io must NOT adopt the "fixtures + shim" pattern as a
production architecture. It is appropriate only as a **clearly labeled
demo mode** for the Blueprint SDK (F5). When used:
- The demo must be visually labeled "DEMO — frozen snapshot, changes are
  not persisted" (TheFounderOS does not label this, which is a gap).
- The shim must return realistic error responses for invalid actions
  (TheFounderOS returns `{ ok: true }` for everything, which misleads
  about gate enforcement).
- The demo mode must be swappable with a real API URL without code
  changes — the "thin skin" principle makes this possible.

### 8.3 The gate UI as the Cockpit de exceções (F3)

`[inference]` The gate primitive (◆ diamond on actions requiring
approval) is the most directly transferable pattern. FGSS.io's Cockpit
de exceções (F3) should make every approval requirement visible:

- Every action that modifies state should display a gate indicator if it
  requires human approval (autonomy level check).
- The gate should not just be visual — clicking a gated action should
  open a simulation/approval flow (show the planned change, the
  invariant it touches, the rollback path) before executing.
- The flags list pattern (dashboard surfacing stalled deals, mismatches,
  behind-pace goals) maps directly to the Cockpit's exception surface:
  every metric that opens its lineage, every write that opens its trail.

`[inference]` TheFounderOS's flags use symbol prefixes (`⚑` `⚠` `◷` `↘`)
and bold entity names. FGSS.io should adopt a similar exception taxonomy
but with severity levels tied to the Invariant Engine's severity field
(`error`, `warning`, `info`), and each flag should link to the full
lineage and evidence trail.

### 8.4 The board/lane pattern for state machine visualization

`[inference]` The Kanban board pattern (`contentBoard`, `sponsorBoard`)
is an effective visualization for state machines: each lane is a state,
each card is an entity in that state, and the dot semantics convey
terminal vs. active. FGSS.io should adapt this for the Invariant Engine
(F1):

- Any state machine defined in the Invariant Engine should be
  visualizable as a board: lanes = states, cards = entities, card
  movement = state transitions.
- The "two machines" pattern (sponsorship deal pipeline + payment
  tracker moving independently, INV-1) is a sound domain modeling
  principle. FGSS.io should support composite state machines where
  multiple state tracks exist for the same entity.
- The stall detection pattern (`STALL_DAYS` thresholds per state) should
  become a configurable invariant: "if entity is in state X for more
  than Y days, surface a flag."

### 8.5 What NOT to copy

`[inference]` FGSS.io must avoid:

- **The marketing animation style**: the `data-typeline` typewriter
  effect, the `data-decode` character animation, the `status-line` boot
  progress bar, the `data-drifting` auto-scroll carousel, and the canvas
  particle effects are marketing presentation, not product value. They
  make the site feel "alive" but add no real intelligence. FGSS.io's
  "alive" feeling should come from real data flowing through real state
  machines, not from CSS animations.

- **The specific color palette**: `--copper: #b46f37` and the blue folder
  gradients (`#57A6EC`, `#3C89DE`, `#86C2FC`, `#4C9DEE`) are
  Heuresis/TheFounderOS brand identity. FGSS.io needs its own visual
  identity. The principle of "one accent color, gated to a specific use"
  is worth adopting, but the specific color and use must be original.

- **The Bennett/Heuresis branding**: the `encoded-company/` naming, the
  `creator-os.` wordmark pattern, the Iceland display face for OS
  wordmarks, and the folder SVG icon are all brand expression. FGSS.io
  must create its own naming convention and visual language.

- **The static orchestrator graph**: the radial graph with hardcoded
  trigonometric positions is a static illustration, not a live view.
  FGSS.io should either make the graph truly data-driven (rendering from
  the actual capability/department registry) or not use a graph at all.

- **The unlabeled demo mode**: TheFounderOS's demos appear to be live
  systems but are frozen snapshots with no-op mutations. This is
  acceptable for marketing but not for a product that claims governance
  and auditability. FGSS.io's demo mode must be clearly labeled.

- **The `pointer-events-none` iframe pattern**: TheFounderOS shows real
  UIs that the user cannot interact with inside the carousel. FGSS.io
  should either show interactive demos or clearly static screenshots —
  not a hybrid that looks interactive but isn't.

---

## Proveniência

| Fonte | Path | SHA-256 |
|---|---|---|
| os.html | `raw/site/pages/os.html` | `1464e4fac1d7bb46928cd87cbdee949723fc5bb90acf81ef5b04ef3bb3c778b1` |
| home.html | `raw/site/pages/home.html` | (ver `inventory/site_manifest.json`) |
| heuresis-shim.js | `raw/site/assets/heuresis-os/heuresis-shim.js` | (ver inventory) |
| creator-os/app.js | `raw/site/assets/heuresis-os/creator-os/app.js` | (ver inventory) |
| creator-os/styles.css | `raw/site/assets/heuresis-os/creator-os/styles.css` | (ver inventory) |
| tokens.css | `raw/site/assets/heuresis-os/design/tokens.css` | (ver inventory) |
| heuresis.css | `raw/site/assets/heuresis-os/design/heuresis.css` | (ver inventory) |
| fonts.css | `raw/site/assets/heuresis-os/design/fonts.css` | (ver inventory) |

Baseline: 15/08/2026. Audit: PASS, zero erros.
