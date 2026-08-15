# CrewAI — Pricing & Offers

> Fonte primária: `knowledge/site/pricing.md`
> URL: `https://crewai.com/pricing`
> Raw SHA-256 (registrado em `pricing.md`): `e167d850a25d56d0e4777744240fbf5a1d6cd5271a0f3462f56b7036b9247b6a`
> Hash do HTML bruto: confirmar em auditoria com
> `sha256sum raw/site/pages/pricing.html`.

## 1. Planos publicados na página /pricing

A página `crewai.com/pricing` exibe **apenas dois planos** na versão
capturada (2026-08-16):

### Basic — Free
- Preço: **Free** (USD 0/mo explícito no card).
- Inclui:
  - Visual editor and AI copilot (Studio)
  - GitHub integration
  - **50 workflow executions/month**
- CTA: "Get Started" → `https://login.crewai.com/sign-up`

### Enterprise — Custom
- Preço: **Custom** (sem número publicável; vendedor responsável).
- Tudo do Free, mais:
  - *"Governance from the start: SSO, RBAC, workload identity, PII
    redaction, and policies"*
  - *"Deploy on CrewAI cloud, your own VPC, or your own
    infrastructure"*
  - *"45-day onboarding that lays the foundation for agent production
    at scale across the business"*
  - *"Forward deployed engineering and training, available a la carte"*
- CTA: "Request trial" / "Request Info" → HubSpot form
  `3a8a3651-588a-436d-943b-376bee2efb8b` ("Request a Demo Form",
  título interno "Request a Demo Form").

Observação: o HTML bruto mostra uma tabela comparativa adicional
(`Build and integrate`, `Studio (visual editor)`, etc.) com células
`$L3a`..`$L48` renderizadas como ícones de check. O texto visível
destilado em `pricing.md` não enumerou as linhas dessa tabela, mas o
card "Basic" já menciona Studio e GitHub; a coluna Enterprise herda
essas features.

## 2. Tier intermediário

- **Não existe tier Pro/Business/Team publicado na página /pricing
  capturada.** A dicotomia é Free vs Enterprise. Estado:
  `unknown` se há tier intermediário oferecido fora do site público
  (e.g. via sales).

## 3. Numbers visíveis

| Item | Valor | Classificação |
| --- | --- | --- |
| Preço Basic | Free (USD 0) | `observation` |
| Limite Free | 50 workflow executions/month | `observation` |
| Preço Enterprise | Custom (não publicado) | `unknown` |
| Onboarding Enterprise | 45 dias incluso | `observation` |
| Forward Deployed Engineering | "available a la carte" (sem preço) | `unknown` |
| Training Enterprise | "available a la carte" (sem preço) | `unknown` |

## 4. Ofertas indiretamente visíveis no site

- **CrewAI Cloud Trial** — botão "Start Cloud Trial" no header das
  docs (`en/introduction.md`). Não há detalhe de duração ou preço.
  Classificação: `observation` (CTA existe); `unknown` (termos
  comerciais).
- **Newsletter** — HubSpot form `5b617f4a-36b2-42ac-863a-edc39b00697a`,
  campo `email`, label "Business email" (`pricing.html`).
- **Studio / Automated Agent Builder** — referenciado como produto
  recente no banner global ("Why Enterprises Need a New Agent
  Building Layer" → `blog.crewai.com/enterprise-agent-building-layer`)
  e no post "Crew Studio: The Automated Agent Builder" (28/07/2026,
  `blog.md`). Sem preço publicável.
- **Marketplace / Crews Marketplace** — anunciado no fórum
  (`c/general/4.md`: *"early-announcement of the Crews
  Marketplace"*) e em `platform/en/features/marketplace.md`. Sem
  monza/rev-share publicado. `unknown`.

## 5. CTAs de conversão observados (todos `observation`)

- Sign Up → `https://login.crewai.com/sign-up`
- Sign In → `https://app.crewai.com/`
- Meet with us → `/meet-with-us`
- Request a Demo (HubSpot `3a8a3651-…`)
- Start Cloud Trial (docs header)
- Chat with our docs → `https://chatg.pt/DWjSBZn` (ChatGPT link
  externo como assistant de docs)

## 6. Não encontrado / `unknown`

- Preço USD mensal do Enterprise: `unknown`.
- Diferenciação de preço entre "CrewAI cloud", "own VPC" e "own
  infrastructure": `unknown`.
- SLA, uptime garantido, retenção de logs: `unknown` pela /pricing.
- Preço de Marketplace listings / revenue share: `unknown`.
- Existência de desconto anual vs mensal: `unknown`.
- Preço de "Forward Deployed Engineering" a la carte: `unknown`.
- Trial length do Enterprise ("Request trial"): `unknown`.

## 7. Notas de auditoria

- A página /pricing **não publica nenhum valor monetário além de
  "Free"**. Qualquer afirmação externa de pricing diferente disso
  deve ser tratada como `commercial_claim` ou `unknown`.
- A descrição "Loved by AI builders. Trusted by AI leaders. Used by
  65% of the Fortune 500." aparece como rodapé da /pricing:
  `commercial_claim`, não `observation`.
