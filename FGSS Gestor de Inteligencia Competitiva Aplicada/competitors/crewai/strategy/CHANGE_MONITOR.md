# Monitor competitivo — CrewAI

## Baseline congelada em 15/08/2026 (ecossistema) e 16/08/2026 (site)

> Fontes: `inventory/ecosystem_manifest.json` (capturado
> 2026-08-15T14:40:45.594018+00:00, 10 registros, 0 erros) e
> `inventory/site_manifest.json`. Classificação: `observation`,
> `commercial_claim`, `independent_signal`, `inference`, `unknown`.

### GitHub — `crewAIInc/crewAI`

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| Stars | 57.102 | `independent_signal` | `raw/ecosystem/github_crewai.json` |
| Forks | 8.152 | `independent_signal` | idem |
| Subscribers | 390 | `independent_signal` | idem |
| open_issues_count (issues + PRs) | 789 | `independent_signal` | idem |
| Commit base | `754d7323beb2fd042e33444a115ea2d5a47193f0` (2026-08-13) | `independent_signal` | `raw/repository/crewAI/` |
| Repos públicos da org | 34 | `independent_signal` | `raw/ecosystem/github_user.json` |
| Followers da org | 2.221 | `independent_signal` | idem |
| Contribuidores (página) | 100 (≥100 real) | `independent_signal` / `unknown` | `raw/ecosystem/github_contributors.json` |
| Top contribuidor | joaomdmoura (646 commits) | `observation` | idem |
| Releases estáveis (página) | 40 (1.7.2 → 1.15.16, 2025-12-19 → 2026-08-14) | `independent_signal` | `raw/ecosystem/github_releases.json` |
| Pré-releases (página) | 60 | `independent_signal` | idem |
| Versão estável mais recente | 1.15.16 (2026-08-14) | `independent_signal` | idem |

### PyPI — `crewai`

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| Versão atual | 1.15.16 | `independent_signal` | `raw/ecosystem/pypi_package.json` |
| Versões no histórico | 412 | `independent_signal` | idem |
| `requires_python` | `<3.14,>=3.10` | `independent_signal` | idem |
| `info.license` | `None` | `observation` | idem |
| Downloads | `-1` (não disponível) | `unknown` | idem |
| Arquivo mais recente | `crewai-1.15.16-py3-none-any.whl` (1.114.637 bytes, 2026-08-14) | `independent_signal` | idem |

### Site — `crewai.com`

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| Planos visíveis | Basic (Free) + Enterprise (Custom) | `observation` | `knowledge/site/pricing.md` |
| Mid-tier pago | não visível | `unknown` | idem |
| Free: execuções/mês | 50 | `observation` | idem |
| Enterprise: features | SSO, RBAC, workload identity, PII redaction, policies, deploy cloud/VPC/on-prem | `observation` | idem |
| Claim "65% of Fortune 500" | presente | `commercial_claim` | idem |
| Claim "100k+ developers certified" | presente | `commercial_claim` | README |
| Produto comercial | AMP/AOP (Agent Management/Operations Platform) | `observation` | `knowledge/site/blog/crewai-amp---the-agent-management-platform.md` |
| Política de privacidade do fórum | retém IP por "[NUMBER OF DAYS] days" (placeholder) | `observation` | `knowledge/site/privacy.md` |

### Segurança e telemetria

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| Sandbox escape resolvido | release 1.11.0rc1 | `observation` | `raw/ecosystem/github_releases.json` |
| GHSA bumps | aiohttp, cryptography, idna (várias releases) | `observation` | idem |
| CodeQL alerts cleared | 1.15.11 | `observation` | idem |
| Telemetria default | on (opt-out via `OTEL_SDK_DISABLED`/`CREWAI_DISABLE_TELEMETRY`) | `observation` | README, docs/telemetry |
| `project_id` OSS→enterprise | release 1.15.11 | `observation` | release notes |
| "detect coding agents in telemetry" | release notes | `observation` | idem |

### Repos da org `crewAIInc` (distribuição)

| Repo | Stars | Forks | Papel |
| --- | --- | --- | --- |
| crewAI | 57.102 | 8.152 | framework core MIT |
| crewAI-examples | 6.132 | 2.178 | galeria de exemplos |
| crewAI-tools | 1.465 | 548 | biblioteca de tools |
| awesome-crewai | 511 | 136 | lista curada |
| enterprise-mcp-server | 58 | 19 | sinal enterprise |
| companies-powered-by-crewai | 27 | 16 | showcase (`commercial_claim`) |
| crewAI-quickstarts | 66 | 34 | onboarding |

## Cadência e gatilhos

**Semanalmente:** GitHub (stars, forks, issues, commits, releases, tags),
PyPI (versão atual, contagem de versões, requires_python), site
(pricing, home, blog), status.crewai.com.

**Mensalmente:** fórum (categorias, posts, membros), docs (novas páginas,
mudanças de versão), repos da org (novos repos, stars), case studies,
webinars, events, política de privacidade, termos.

**Imediatamente:** nova release estável, mudança de pricing, mudança de
plano/tier, incidente de segurança, advisory GHSA, parceria anunciada
(ex.: Nvidia, PwC, AWS, Cloudera, HPE), aquisição, nova entidade legal,
feature equivalente ao moat FGSS (budget nativo, egress allowlist,
credential broker, auth no OSS), mudança de telemetria/default, mudança de
`project_id` ou linking OSS→enterprise.

## Procedimento

1. Executar `python3 tools/collect_ecosystem.py` (GitHub + PyPI).
2. Executar `python3 tools/collect_public.py` (site).
3. Preservar os manifestos anteriores antes da corrida se o objetivo for
   delta; os coletores atuais regeneram os diretórios de captura.
4. Executar `python3 tools/audit.py` e aceitar somente `status: pass` e
   zero divergências.
5. Comparar URL, status, tamanho, SHA-256, commit, versão PyPI, oferta,
   preço e claims entre capturas.
6. Classificar o delta: `observation`, `commercial_claim`,
   `independent_signal`, `inference`, `unknown` ou correção.
7. Atualizar scorecard/battlecard/blueprint apenas com evidência e
   registrar no HANDOFF (a ser criado — ver `PENDENCIAS.md`).

## Métricas de alerta (gatilho de reavaliação)

- Stars crescem >10% em 30 dias (sinal de viralidade).
- Novo repo na org com "governance", "budget", "egress", "credential",
  "consent" no nome (sinal de fechamento de lacuna).
- Release estável com "shared budget", "egress allowlist", "credential
  broker" nativos no OSS (kill criteria do THREAT_SCENARIOS).
- Auth/tenant/SLO entram no framework MIT (kill criteria).
- Mid-tier pago aparece no pricing (mudança de go-to-market).
- `project_id` ou telemetria mudam de default ou finalidade.
- `joaomdmoura` reduz cadência ou transfere autoria.
- Parceria enterprise nova (Nvidia, AWS, PwC, Cloudera, HPE — acompanhar).
- Incidente de segurança ou outage em status.crewai.com.

## Não fazer

- Não automatizar login, formulário, compra, DM, email, comentário ou
  coleta de membros do fórum.
- Não contornar bloqueios de plataforma, rate limit ou paywall.
- Não inferir receita por stars, forks, downloads (`-1`), reviews ou
  member count.
- Não somar custos de períodos diferentes.
- Não declarar `commercial_claim` como fato sem prova externa.
- Não modificar arquivos existentes do dossiê sem registrar delta e
  preservar baseline.
