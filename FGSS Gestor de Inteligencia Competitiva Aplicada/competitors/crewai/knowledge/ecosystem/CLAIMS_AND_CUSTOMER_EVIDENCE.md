# Claims & Customer Evidence — CrewAI (ledger do ecossistema)

Ledger de afirmações comerciais e de adoção extraídas **apenas** dos dados
públicos de GitHub (`crewAIInc/crewAI` e org) e PyPI (`crewai`). Cada item
tem classificação (`observation`, `commercial_claim`, `independent_signal`,
`inference`, `unknown`), fonte, data de captura e SHA-256.

**Captura:** `inventory/ecosystem_manifest.json` — `captured_at`
`2026-08-15T14:40:45.594018+00:00`.

> Regra: estrelas, forks e contadores do GitHub são `independent_signal`
> (verificáveis pela API). Afirmações de uso por empresas específicas são
> `commercial_claim` até prova externa. Downloads e receita são `unknown`
> onde a API não os expõe. Ausência de prova é `unknown`, nunca zero nem
> negação.

---

## Sinais independentes (verificáveis pela API)

| # | Claim | Valor | Classificação | Fonte / proveniência |
| --- | --- | --- | --- | --- |
| S1 | Stars do repo `crewAIInc/crewAI` | 57.102 | `independent_signal` | `github_crewai.json` — `https://api.github.com/repos/crewAIInc/crewAI`, 2026-08-15, sha256 `2b64fcdc…3f52` |
| S2 | Forks do repo | 8.152 | `independent_signal` | idem |
| S3 | Watchers/subscribers | 390 subscribers | `independent_signal` | idem |
| S4 | open_issues_count (issues + PRs abertos) | 789 | `independent_signal` | idem |
| S5 | Licença do repo | MIT | `independent_signal` | idem (campo `license`) |
| S6 | Linguagem principal | Python | `independent_signal` | idem |
| S7 | Versão PyPI atual | 1.15.16 | `independent_signal` | `pypi_package.json` — `https://pypi.org/pypi/crewai/json`, 2026-08-15, sha256 `0ecc2cf4…e6c6` |
| S8 | Versões publicadas no PyPI | 412 | `independent_signal` | idem |
| S9 | `requires_python` | `<3.14,>=3.10` | `independent_signal` | idem |
| S10 | Release estável mais recente | 1.15.16 (2026-08-14) | `independent_signal` | `github_releases.json` — sha256 `d6caec9b…bb74` |
| S11 | Repos públicos da org | 34 | `independent_signal` | `github_user.json` — sha256 `2232bced…a5c0` |
| S12 | Followers da org | 2.221 | `independent_signal` | idem |

## Observações (fatos do artefato, sem inferência comercial)

| # | Claim | Classificação | Fonte / proveniência |
| --- | --- | --- | --- |
| O1 | Repo `enterprise-mcp-server` existe: “MCP Server for kicking off and getting status of your crew deployments” | `observation` | `github_repositories.json` — sha256 `e88651df…6e84` |
| O2 | Repo `crewai-enterprise-trigger-examples` existe | `observation` | idem |
| O3 | Repo `crewai-omniauth-okta` implementa OAuth2 p/ Okta | `observation` | idem |
| O4 | Release 1.15.11: “Add project_id to link OSS usage to an enterprise account” | `observation` | `github_releases.json` — sha256 `d6caec9b…bb74` |
| O5 | Release 1.11.0rc1: “Add Plus API token authentication for a2a enterprise” | `observation` | idem |
| O6 | Releases 1.14.2 / 1.14.2a3: “enterprise A2A feature documentation” | `observation` | idem |
| O7 | Releases 1.13.0 / 1.13.0a2 / 1.12.2: “enterprise release resilience and UX” | `observation` | idem |
| O8 | Release 1.13.0a1: “RBAC permissions matrix and deployment guide” | `observation` | idem |
| O9 | Repo `companies-powered-by-crewai` (27 stars): “A showcase of companies and platforms leveraging CrewAI” | `observation` | `github_repositories.json` |
| O10 | Label `llm-generated` presente em issues | `observation` | `github_issues.json` — sha256 `0522aa9a…4294` |
| O11 | Top contribuidor `joaomdmoura` (646 commits) | `observation` | `github_contributors.json` — sha256 `87354e8d…793a` |

## Inferências (não diretamente verificadas; raciocínio a partir dos dados)

| # | Claim | Classificação | Base |
| --- | --- | --- | --- |
| I1 | Existe um produto Enterprise/OSS-plus distinto do framework OSS | `inference` | O1–O8 conjuntamente |
| I2 | A org `crewAIInc` foi criada por transferência de propriedade (repo de 2023-10-27, org de 2024-05-23) | `inference` | datas em S1 e `github_user.json` |
| I3 | Cadência de releases é alta (~5 estáveis/mês, 40 em ~8 meses) | `inference` | S10 + cronologia em `github_releases.json` |
| I4 | O endpoint `issues` é dominado por PRs (90/100), indicando atividade de código concentrada | `inference` | `github_issues.json` |

## Commercial claims (afirmações de cliente/adopção — exigem prova externa)

| # | Claim encontrado | Classificação | Status | Proveniência |
| --- | --- | --- | --- | --- |
| C1 | “A showcase of companies and platforms leveraging CrewAI to power their AI solutions” | `commercial_claim` | **não verificado** — lista existe como repo, mas cada empresa listada precisa de verificação externa individual | `github_repositories.json` (repo `companies-powered-by-crewai`) |
| C2 | “companies and platforms leveraging CrewAI” (descrição do repo) | `commercial_claim` | **não verificado** | idem |

> Nenhuma das afirmações C1–C2 foi promovida a fato. A simples existência de
> um repo “showcase” é `observation`; a afirmação de que empresas
> específicas **usam em produção** é `commercial_claim` pendente de prova.

## Unknowns (ausência de prova = `unknown`)

| # | Item | Classificação | Razão |
| --- | --- | --- | --- |
| U1 | Downloads do PyPI | `unknown` | `info.downloads` = `-1` (PyPI descontinuou contagens) |
| U2 | Receita / MRR / ARR | `unknown` | não exposto em GitHub nem PyPI |
| U3 | Preço do tier Enterprise/Plus | `unknown` | está em `crewai.com` (bloco de coleta separado, não capturado aqui) |
| U4 | Tiers, limites e contrato do plano pago | `unknown` | idem |
| U5 | Número total de contribuidores | `unknown` | página de 100 não esgota a API (≥100) |
| U6 | Total de issues/PRs fechados | `unknown` | paginação não esgotada |
| U7 | NPS, churn, retenção, reembolso | `unknown` | não exposto publicamente |
| U8 | Lista de clientes pagantes | `unknown` | o showcase é `commercial_claim`, não prova |
| U9 | CAC, LTV, payback, margem | `unknown` | não verificável publicamente |
| U10 | Licença declarada no PyPI | `unknown` | `info.license` = `None` (repo declara MIT; PyPI não) |

---

## Regras aplicadas a este ledger

1. **Denominadores distintos**: stars (57.102), forks (8.152), subscribers
   (390), followers da org (2.221) e versões PyPI (412) contam populações
   diferentes — nunca somados nem tratados como equivalentes.
2. **Stars/forks ≠ receita**: 57.102 estrelas são `independent_signal` de
   interesse OSS, não prova de cliente pagante (S1–S2).
3. **Showcase ≠ cliente verificado**: o repo `companies-powered-by-crewai`
   afirma uso por empresas, mas cada empresa precisa de prova externa
   individual antes de deixar `commercial_claim` (C1–C2).
4. **Enterprise existe, preço não**: as release notes confirmam um produto
   enterprise (O1–O8 → I1), mas preço/termos exigem captura de `crewai.com`
   (U3–U4).
5. **Downloads `-1`**: o PyPI retorna `-1` para download counts — interpretar
   como “não medido” (`unknown`), nunca como zero (U1).
6. **Proveniência obrigatória**: todo claim acima rastreia a URL, data de
   captura e SHA-256 do artefato.
