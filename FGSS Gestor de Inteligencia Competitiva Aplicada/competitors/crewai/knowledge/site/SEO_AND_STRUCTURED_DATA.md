# CrewAI — SEO & Structured Data

> Auditoria dos HTMLs brutos em `raw/site/pages/`.
> Scope: `<script type="application/ld+json">`, `<meta name="...">`,
> `<meta property="og:...">`, `<meta name="twitter:...">`,
> `<link rel="canonical">`, `<link rel="sitemap">`, `robots.txt`,
> `sitemap.xml`, generator,analytics tags.

## 1. JSON-LD — schemas encontrados

### 1.1 Site comercial (`crewai.com/*`)

Todas as páginas do site comercial (Next.js, Vercel) inserem **uma
única** entidade JSON-LD no `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CrewAI",
  "url": "https://crewai.com",
  "logo": "https://www.crewai.com/logo-square.png",
  "sameAs": [
    "https://x.com/crewaiinc",
    "https://www.linkedin.com/company/crewai-inc/",
    "https://github.com/crewaiinc/"
  ]
}
```

Observado em (grep `"@type":"Organization"`):
- `raw/site/pages/pricing.html`
- `raw/site/pages/agent-management-platform.html`
- `raw/site/pages/open-source.html`
- `raw/site/pages/case-studies.html`
- `raw/site/pages/blog.html` (somente Organization, nada de
  BlogPosting / Article no índice).

**Ausentes** no site comercial: `BreadcrumbList`, `WebPage`, `WebSite`,
`Product`, `Service`, `FAQPage`, `Article`, `TechArticle`. Não há
schema específico para CaseStudy (que seria natural para
`/case-studies/<slug>`) — eles também ficam só com `Organization`.

### 1.2 Blog Ghost (`blog.crewai.com` — capturado como pages filhas)

Posts de blog (ex.: `agent-harnesses-are-dead-long-live-agent-harnesses.html`)
incluem JSON-LD `@type": "Article"` (publisher Organization, author
Person, headline, image via `ImageObject`). Modelo padrão do tema
Ghost. Canonical dos posts: `https://blog.crewai.com/<slug>/`.

### 1.3 Docs OSS (`docs.crewai.com/en/*`) — Mintlify

Páginas da docs injetam JSON-LD `@graph` com **6 tipos**:
`Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `ListItem`,
`Article`+`TechArticle`. Exemplo de `raw/site/pages/en/introduction.html`:

```
"@graph":[
  {"@type":"Organization","@id":"...#organization","name":"CrewAI","url":"https://docs.crewai.com","logo":{"@type":"ImageObject","url":"https://mintcdn.com/crewai/.../crew_only_logo.png"}},
  {"@type":"WebSite","@id":"...#website","name":"CrewAI","url":"https://docs.crewai.com","publisher":{"@id":"...#organization"}},
  {"@type":"WebPage","@id":"...#webpage","name":"Introduction","description":"Build AI agent teams that work together to tackle complex tasks","dateModified":"2026-08-14T00:22:34.670Z","breadcrumb":{"@id":"...#breadcrumb"}},
  {"@type":"BreadcrumbList","@id":"...#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"CrewAI","item":"https://docs.crewai.com"},{"@type":"ListItem","position":2,"name":"Introduction","item":"https://docs.crewai.com/v1.15.16/en/introduction"}]},
  {"@type":["Article","TechArticle"],"@id":"...#article","headline":"Introduction",...}
]
```

Há também um snippet `@type:"WebSite"` com `creator` = Mintlify
Organization no topo do `<head>` (assinatura do template Mintlify).

### 1.4 Comunidade Discourse (`community.crewai.com/*`)

Páginas do fórum (ex.: `guidelines.html`, `c/announcements/6.html`)
**não injetam JSON-LD**. Apenas metadados Discourse padrão:
`<meta name="generator" content="Discourse 2026.8.0-latest.1 - https://github.com/discourse/discourse version 3bcc19a5d2df81fcdfda6fa461ede9e9cac92c48">`,
OpenGraph + Twitter Card herdados do tema.

## 2. OpenGraph e Twitter Card

### 2.1 Site comercial (`crewai.com/*`)

Padrão Next.js Metadata API (todas as páginas inspect):

- `og:type` = `website`
- `og:title` = `<Page> | CrewAI` (ex.: "Pricing | CrewAI")
- `og:description` = "The Leading Multi-Agent Platform" (default
  global; override por página em `home.md` insights).
- `og:url` = canonical da página.
- `og:site_name` = "CrewAI"
- `og:locale` = `en_US`
- `og:image` = `https://images.ctfassets.net/rmv9a2eqdsyw/.../og-image__2_.png`
  (Contentful CDN — inferência de CMS: **Contentful**).
- `twitter:card` = `summary_large_image`
- `twitter:title` / `twitter:description` / `twitter:image` espelham OG.
- `<link rel="canonical">` presente em todas as páginas (ex.:
  `https://crewai.com/pricing`,
  `https://crewai.com/agent-management-platform`).

### 2.2 Home (insights)

`raw/site/pages/home.html` (Webflow, não Next.js) usa:
- `og:title` = "AI Agent In Production - Insights from the market"
- `og:description` = "Explore the capabilities of AI Agents and
  their real-world applications..."
- `og:image` = `https://app.crewai.com/header_insights.png`
- `twitter:card` = `summary_large_image`
- `<meta name="generator" content="Webflow">`

Observação: a home capturada como `home.html` é a página
`https://insights.crewai.com/` (Webflow), não a landing principal
`crewai.com` (que é Next.js). As duas usam stacks diferentes —
**inconsistência arquitetural visível no SEO**.

### 2.3 Docs Mintlify

- `og:site_name` = "CrewAI Documentation"
- `og:type` = `website`
- `og:image` = `https://docs.crewai.com/images/crew_only_logo.png`
- `og:url` versionado (`/v1.15.16/en/...`).
- Canonical também versionado
  (`https://docs.crewai.com/v1.15.16/en/introduction`).

### 2.4 Comunidade Discourse

- `og:site_name` = "CrewAI"
- `og:type` = `website`
- `og:image` = CDN Discourse:
  `https://us1.discourse-cdn.com/flex025/uploads/crewai/original/...`
- `og:title` = `<Page> - CrewAI` (ex.: "Guidelines - CrewAI").
- `twitter:card` = `summary_large_image`.

## 3. Outras meta tags notáveis

- GTM container presente nas pages `crewai.com/*` (Next.js):
  `GTM-NDDMJTDX` (bootstrap script + `<noscript><iframe>`).
- HubSpot forms embed (CTAs "Request a Demo" / Newsletter) —
  scripts externos, não meta tags.
- `<meta name="viewport">` e `<meta charset="utf-8">` em todas.
- `<meta name="description">` na home Next.js: "The Leading
  Multi-Agent Platform" (default do template).
- `<meta name="next-size-adjust" content="">` (assinatura Next.js).
- Docs Mintlify: `<meta name="description">` específico por página
  (ex.: "Build AI agent teams that work together to tackle complex
  tasks").

## 4. Sitemap e robots

- **Nenhum `sitemap.xml` ou `robots.txt` capturado no snapshot.**
  A busca por `sitemap` em `home.html` e `pricing.html` retornou 0
  hits. Estado: `unknown` (não foram crawlados, podem existir).
- `raw/site/` contém apenas `pages/` — sem `robots.txt` ou
  `sitemap.xml`. Recomendação para próxima coleta: capturar
  `https://crewai.com/robots.txt` e `https://crewai.com/sitemap.xml`
  explicitamente.

## 5. CMS / stack inferido (observation)

| Subdomínio | Stack | Evidência |
| --- | --- | --- |
| `crewai.com` | Next.js + Vercel + Contentful + GTM + HubSpot | `dpl_…` (Vercel), `images.ctfassets.net` (Contentful), `GTM-NDDMJTDX`, `__next_f.push` |
| `insights.crewai.com` (home.md) | Webflow | `<meta name="generator" content="Webflow">` |
| `blog.crewai.com` | Ghost | JSON-LD Article padrão, canonical `blog.crewai.com`, `storage.ghost.io` |
| `docs.crewai.com` e `docs-platform.crewai.com` | Mintlify | `/mintlify-assets/_next/...`, `@type:"WebSite"` com `creator` Mintlify, `v1.15.16` versionamento |
| `community.crewai.com` | Discourse 2026.8.0 | `<meta name="generator" content="Discourse 2026.8.0...">`, `discourse-cdn.com` |

## 6. Lacunas de SEO observadas (`unknown`)

- `sitemap.xml` / `robots.txt` não capturados: `unknown`.
- Schema `CaseStudy` (schema.org) não é usado em `/case-studies/<slug>`:
  gap potencial — tudo é só `Organization`. `observation`.
- `Person` schema para autores de blog: presente via Ghost Article
  (author Person); não presente para autores que aparecem só em
  `crewai.com/blog` (Next.js) — gap potencial.
- `FAQPage` schema: não encontrado em nenhuma página. `observation`.
- `Product` / `Service` schema: não usado para a AMP (apenas
  `Organization`). Gap potencial dado o posicionamento "Agent
  Management Platform". `observation`.
- Hreflang / i18n: docs Mintlify mostra array `["en","pt-BR","ko","ar"]`
  no banner script, mas sem `hreflang` em HTML amostrado. `unknown`.
- structured data testing (Google Rich Results) não executado: o
  snapshot contém só HTML, não há simulação do parser Google.
  `unknown`.
