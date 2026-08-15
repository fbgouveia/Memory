# Sales & Distribution — CrewAI (ecossistema GitHub + PyPI)

Distilação dos metadados públicos do repositório `crewAIInc/crewAI`, da
organização `crewAIInc` e do pacote PyPI `crewai`. Dados capturados pelo
ecosystem collector em 2026-08-15. Toda métrica traz fonte, URL, data de
captura e SHA-256 do artefato.

**Captura:** `inventory/ecosystem_manifest.json` — `captured_at`
`2026-08-15T14:40:45.594018+00:00`, 10 registros, 0 erros.

> Convenção de classificação: `observation`, `commercial_claim`,
> `independent_signal`, `inference`, `unknown`. Estrelas, forks e contadores
> do GitHub são `independent_signal` (verificáveis pela API). Downloads e
> receita são `unknown` onde a API não os expõe.

---

## 1. Estrelas, forks e watchers

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| Stars (stargazers_count) | 57.102 | `independent_signal` | `raw/ecosystem/github_crewai.json` |
| Forks (forks_count) | 8.152 | `independent_signal` | `raw/ecosystem/github_crewai.json` |
| Watchers (watchers_count) | 57.102 | `independent_signal` | `raw/ecosystem/github_crewai.json` |
| Subscribers (subscribers_count) | 390 | `independent_signal` | `raw/ecosystem/github_crewai.json` |
| Network (network_count) | 8.152 | `independent_signal` | `raw/ecosystem/github_crewai.json` |

Notas:
- `watchers_count` no GitHub API moderno equivale a `stargazers_count`; o
  sinal real de “acompanhamento” é `subscribers_count` (390).
- Proveniência: `https://api.github.com/repos/crewAIInc/crewAI`, capturado
  2026-08-15, SHA-256
  `2b64fcdc7e51a9941c69969278ffb96170077794b13130a46336a0b8a4fe3f52`.

## 2. Contribuidores

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| Contribuidores retornados | 100 (limite da página) | `independent_signal` | `raw/ecosystem/github_contributors.json` |
| Contagem total real | `unknown` (≥100; paginação não esgotada) | `unknown` | — |

A coleta usou `per_page=100` e trouxe uma única página cheia (100), o que
indica que há mais páginas. Portanto o total só pode ser declarado como
“≥100”, não como número exato.

Top 5 por número de commits (nesta página):

| login | contributions |
| --- | --- |
| joaomdmoura | 646 |
| greysonlalonde | 522 |
| lorenzejay | 251 |
| lucasgomide | 167 |
| bhancockio | 145 |

Proveniência: `https://api.github.com/repos/crewAIInc/crewAI/contributors?per_page=100&anon=true`,
SHA-256 `87354e8d490a281e9f41bccb295f9f169b1e837b5635e17d48ea7725fec8793a`.
Observação: `joaomdmoura` é o autor original do CrewAI (João Moura); a
concentração de 646 commits num top de 100 é `observation` sobre dependência
de pessoa-chave, não prova de risco operacional.

## 3. Histórico de releases

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| Releases retornadas | 100 (limite da página) | `independent_signal` | `raw/ecosystem/github_releases.json` |
| Estáveis nesta página | 40 | `independent_signal` | idem |
| Pré-releases nesta página | 60 | `independent_signal` | idem |
| Faixa de datas capturada | 2025-12-19 → 2026-08-14 | `independent_signal` | idem |
| Versão estável mais recente | 1.15.16 (2026-08-14) | `independent_signal` | idem |
| Versão estável mais antiga (nesta página) | 1.7.2 (2025-12-19) | `independent_signal` | idem |
| Total histórico de versões | `unknown` (página não esgota) | `unknown` | — |

Cronologia de releases estáveis capturados (40):

| Data (UTC) | Tag |
| --- | --- |
| 2026-08-14 | 1.15.16 |
| 2026-08-12 | 1.15.15 |
| 2026-08-08 | 1.15.14 |
| 2026-08-07 | 1.15.13 |
| 2026-08-05 | 1.15.12 |
| 2026-08-05 | 1.15.11 |
| 2026-07-31 | 1.15.10 |
| 2026-07-30 | 1.15.9 |
| 2026-07-28 | 1.15.8 |
| 2026-07-26 | 1.15.7 |
| 2026-07-24 | 1.15.6 |
| 2026-07-20 | 1.15.5 |
| 2026-07-17 | 1.15.4 |
| 2026-07-16 | 1.15.3 |
| 2026-07-08 | 1.15.2 |
| 2026-06-27 | 1.15.1 |
| 2026-06-25 | 1.15.0 |
| 2026-06-11 | 1.14.7 |
| 2026-05-28 | 1.14.6 |
| 2026-05-18 | 1.14.5 |
| 2026-04-30 | 1.14.4 |
| 2026-04-24 | 1.14.3 |
| 2026-04-17 | 1.14.2 |
| 2026-04-08 | 1.14.1 |
| 2026-04-07 | 1.14.0 |
| 2026-04-02 | 1.13.0 |
| 2026-03-26 | 1.12.2 |
| 2026-03-26 | 1.12.1 |
| 2026-03-26 | 1.12.0 |
| 2026-03-23 | 1.11.1 |
| 2026-03-18 | 1.11.0 |
| 2026-03-04 | 1.10.1 |
| 2026-02-27 | 1.10.0 |
| 2026-01-30 | 1.9.3 |
| 2026-01-29 | 1.9.2 |
| 2026-01-28 | 1.9.1 |
| 2026-01-27 | 1.9.0 |
| 2026-01-15 | 1.8.1 |
| 2026-01-08 | 1.8.0 |
| 2025-12-19 | 1.7.2 |

Cadência observada (`inference`): de 1.7.2 a 1.15.16 (~8 meses) houve 40
estáveis — média de ~5 releases estáveis por mês, com vários pré-releases
intercalados. O ritmo acelerou em julho/agosto de 2026 (11 estáveis em ~6
semanas). Tags (`raw/ecosystem/github_tags.json`) mostram linhagem anterior
v0.x (ex.: v0.119.0, v0.83.0, v0.63.x) até v1.x, confirmando que o histórico
completo vai além desta página.

Proveniência: `https://api.github.com/repos/crewAIInc/crewAI/releases?per_page=100`,
SHA-256 `d6caec9b8cb87187f260a339f34aed5564a5774db9d89c829f25fdae2e04bb74`.

## 4. Issues

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| open_issues_count (issues + PRs abertos) | 789 | `independent_signal` | `raw/ecosystem/github_crewai.json` |
| Itens retornados (amostra) | 100 (limite da página) | `independent_signal` | `raw/ecosystem/github_issues.json` |
| Abertos na amostra | 61 | `independent_signal` | idem |
| Fechados na amostra | 39 | `independent_signal` | idem |
| PRs na amostra | 90 | `independent_signal` | idem |
| Issues puras na amostra | 10 | `independent_signal` | idem |
| Total fechado (issues + PRs) | `unknown` | `unknown` | — |

Notas:
- `open_issues_count` (789) é o contador oficial do GitHub e soma issues
  **e** pull requests abertos. Não discrimina tipos.
- A amostra de 100 itens é majoritariamente PRs (90/100), sugerindo que o
  endpoint `issues` (que inclui PRs) está dominado por atividade de código.
  A contagem total fechada exige paginação completa — não capturada.
- Labels presentes: `bug`, `feature-request`, `llm-generated`, `size/XS`…
  `size/XL`. A label `llm-generated` é `observation` de uso de LLMs no
  fluxo de triagem, não prova de qualidade.

Proveniência: `https://api.github.com/repos/crewAIInc/crewAI/issues?state=all&per_page=100`,
SHA-256 `0522aa9a1e651c70dc282ee37b82654d0ba5c169ec1481298da5cbceb2944294`.

## 5. Sinais de pricing / enterprise tier (apenas dados GitHub)

A coleta do ecossistema é restrita a GitHub + PyPI; o site `crewai.com`
(preços reais) é bloco separado e não foi capturado aqui. Os sinais abaixo
vêm de release notes e nomes de repositórios da org `crewAIInc`.

| Sinal | Classificação | Fonte |
| --- | --- | --- |
| Repo `enterprise-mcp-server` (58 stars): “MCP Server for kicking off and getting status of your crew deployments” | `observation` | `raw/ecosystem/github_repositories.json` |
| Repo `crewai-enterprise-trigger-examples` | `observation` | idem |
| Repo `crewai-omniauth-okta`: estratégia OAuth2 p/ Okta (SSO enterprise) | `observation` | idem |
| Release 1.15.11: “Add project_id to link OSS usage to an enterprise account” | `observation` | `raw/ecosystem/github_releases.json` |
| Release 1.11.0rc1: “Add Plus API token authentication for a2a enterprise” | `observation` | idem |
| Releases 1.14.2 / 1.14.2a3: “enterprise A2A feature documentation” | `observation` | idem |
| Releases 1.13.0 / 1.13.0a2 / 1.12.2: “Improve enterprise release resilience and UX”, “enterprise release phase to devtools release” | `observation` | idem |
| Release 1.13.0a1: “RBAC permissions matrix and deployment guide” | `observation` | idem |
| Repo `companies-powered-by-crewai` (27 stars): showcase de empresas | `observation` | `raw/ecosystem/github_repositories.json` |

Inferência (`inference`): existe um produto Enterprise/OSS-plus distinto do
framework open-source, com SSO (Okta), RBAC, A2A enterprise, API token “Plus”
e telemetria que liga uso OSS a contas enterprise. **Preço, tiers, limites
e contrato são `unknown`** — não estão nos dados GitHub/PyPI; requerem
captura do site `crewai.com` (bloco próprio).

## 6. Pacote PyPI `crewai`

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| Nome | crewai | `independent_signal` | `raw/ecosystem/pypi_package.json` |
| Versão atual | 1.15.16 | `independent_signal` | idem |
| `requires_python` | `<3.14,>=3.10` | `independent_signal` | idem |
| Versões publicadas no histórico | 412 | `independent_signal` | idem |
| Arquivo mais recente | `crewai-1.15.16-py3-none-any.whl` (1.114.637 bytes), upload 2026-08-14T00:08:49 | `independent_signal` | idem |
| `info.license` | `None` (não declarado no PyPI) | `observation` | idem |
| `info.author` | `None` | `observation` | idem |
| `info.home_page` | `None` (project_url: `https://pypi.org/project/crewai/`) | `observation` | idem |
| Downloads (last_day/week/month) | `-1` (não disponível) | `unknown` | idem |

Notas:
- A versão PyPI (1.15.16) coincide com a release estável mais recente do
  GitHub (1.15.16, 2026-08-14), confirmando publicação sincronizada.
- `info.downloads` retorna `-1` em todos os períodos: a API do PyPI
  descontinuou contagens de download; **número de downloads é `unknown`**.
- 412 versões no histórico do PyPI é `independent_signal` de maturidade de
  empacotamento, não de receita nem de adoção paga.
- `license=None` no PyPI não contradiz o MIT do repo: metadados PyPI podem
  omitir o campo mesmo quando o repo declara MIT.

Proveniência: `https://pypi.org/pypi/crewai/json`, SHA-256
`0ecc2cf459dd96310d2d844af5aa210bb3babf7399501dbe3fd415f2a5d0e6c6`.

## 7. Distribuição por repositórios da org `crewAIInc`

A org `crewAIInc` tem 34 repositórios públicos (`public_repos`: 34). Os
principais hubs de distribuição:

| Repo | Stars | Forks | Papel na distribuição (inferência) |
| --- | --- | --- | --- |
| crewAI | 57.102 | 8.152 | Framework core (MIT) |
| crewAI-examples | 6.132 | 2.178 | Galeria de exemplos (atração/topo de funil) |
| crewAI-tools | 1.465 | 548 | Biblioteca de tools |
| awesome-crewai | 511 | 136 | Lista curada da comunidade |
| enterprise-mcp-server | 58 | 19 | Sinal de produto enterprise |
| companies-powered-by-crewai | 27 | 16 | Showcase de clientes (não verificado) |
| crewAI-quickstarts | 66 | 34 | Onboarding rápido |

Proveniência: `https://api.github.com/users/crewAIInc/repos?per_page=100&sort=updated`,
SHA-256 `e88651dfd0d5cd4b47006ae6d44afd92fa0123a99c5298bdbaf6ae641fce6e84`.

## 8. Metadados da organização

| Métrica | Valor | Classificação | Fonte |
| --- | --- | --- | --- |
| Login | crewAIInc | `independent_signal` | `raw/ecosystem/github_user.json` |
| Tipo | Organization | `independent_signal` | idem |
| Nome de exibição | crewAI | `independent_signal` | idem |
| Blog | https://crewai.com | `independent_signal` | idem |
| Localização | United States of America | `independent_signal` | idem |
| Twitter | crewaiinc | `independent_signal` | idem |
| Followers (org) | 2.221 | `independent_signal` | idem |
| Org criada em | 2024-05-23 | `independent_signal` | idem |

Nota: a org foi criada em 2024-05-23, mas o repo `crewAI` tem
`created_at` 2023-10-27 — `inference` de transferência de propriedade
(pessoal → organização), padrão comum em projetos que se professionalizam.

Proveniência: `https://api.github.com/users/crewAIInc`, SHA-256
`2232bced1f421fd258a0997afabab67697f656a3b8f31f89a890ae0e4ed6a5c0`.

---

## Resumo executivo (apenas dados GitHub + PyPI)

- **Adoção de superfície**: 57.102 estrelas e 8.152 forks (`independent_signal`)
  — sinal forte de interesse open-source, **não** prova de receita ou
  cliente pagante.
- **Maturidade técnica**: cadência de releases alta (~5 estáveis/mês),
  412 versões no PyPI, framework Python MIT, suporta 3.10–<3.14.
- **Produto enterprise**: existe um tier/plano enterprise distinto (SSO Okta,
  RBAC, A2A enterprise, API token “Plus”), mas **preço e termos são
  `unknown`** nestes dados — estão em `crewai.com`, fora deste bloco.
- **Downloads e receita**: ambos `unknown` (PyPI não expõe contagens;
  GitHub não expõe receita).
- **Issues**: 789 abertas (issues + PRs); fechamento total não capturado.
