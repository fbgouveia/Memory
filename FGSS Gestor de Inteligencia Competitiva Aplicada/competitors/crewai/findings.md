# Findings — registro de verdade

## Verificado

- O site público expôs 2.817 registros: 449 capturados (todos `text/html`),
  51 erros e 2.318 referências externas inventariadas. Nenhuma mídia
  same-origin (imagem, áudio ou vídeo) foi capturada — o site serve HTML
  dinâmico com ativos de CDNs third-party.
- As rotas públicas capturadas incluem home, pricing, enterprise, open-source,
  sign-up, case-studies, events, webinars, blog (35+ posts), comunidade
  Discourse (community.crewai.com), documentação versionada (`/v1.15.16/`,
  `/en/`), plataforma (`/platform/en/features/` com 27+ integrações) e
  páginas legais (terms-of-use, privacy-policy).
- O snapshot do repositório contém 26.369 arquivos e 352.713.677 bytes
  (336 MB), sob licença MIT, no commit `754d7323beb2fd042e33444a115ea2d5a47193f0`
  (2026-08-13).
- O framework é Python (`requires-python >=3.10, <3.14`), uv workspace
  monorepo com 6 pacotes (`crewai`, `crewai-core`, `crewai-tools`,
  `crewai-files`, `cli`, `devtools`), versão `1.15.16`.
- Dependências principais: pydantic, openai, instructor, chromadb, lancedb,
  opentelemetry, httpx, mcp, click, tokenizers, pdfplumber, pyjwt. Extras
  para Anthropic, Google Gemini, Azure AI, AWS Bedrock, IBM Watsonx, LiteLLM,
  Voyage AI, Qdrant, Mem0 e A2A SDK.
- Há 310 arquivos de teste (pytest, com pytest-asyncio, pytest-xdist,
  pytest-recording/VCR, pytest-timeout). Linter ruff, type checker mypy
  strict, security scanner bandit, pre-commit, commitizen e pip-audit.
- A documentação é Mintlify com 24.041 arquivos `.mdx`, 104 `.md` e 91 `.png`,
  com versionamento por diretório (`docs/edge/en/`, `docs/v<X.Y.Z>/`) e
  traduções em `ar`, `ko`, `pt-BR`.
- O ecossistema externo (GitHub API + PyPI) tem 10 registros, todos
  capturados com hash reconciliado, zero erros.
- Stars: 57.102; Forks: 8.152; Subscribers: 390; Org followers: 2.221;
  34 repositórios públicos na org `crewAIInc`. Todos `independent_signal`.
- 412 versões publicadas no PyPI; versão atual 1.15.16 sincronizada com
  GitHub (2026-08-14).
- 40 releases estáveis capturados em ~8 meses (1.7.2 → 1.15.16), média de
  ~5/mês, com 60 pré-releases intercalados.
- Release notes confirmam produto enterprise distinto do OSS: SSO Okta
  (`crewai-omniauth-okta`), RBAC, A2A enterprise com "Plus API token",
  `project_id` para ligar uso OSS a contas enterprise, e repositórios
  `enterprise-mcp-server` e `crewai-enterprise-trigger-examples`.
- A página de pricing capturada mostra plano Basic (gratuito) e Enterprise
  (contato comercial). Nenhum tier intermediário visível.
- Telemetria é anônima por padrão (versão, OS, contagens de agentes/tarefas,
  modelo LLM, roles, tool names) e não coleta prompts, respostas ou segredos
  salvo `share_crew` explícito. Opt-out via `OTEL_SDK_DISABLED=true`.
- O top contribuidor é `joaomdmoura` (João Moura, criador do CrewAI) com 646
  commits na amostra de 100.
- A org `crewAIInc` foi criada em 2024-05-23; o repo `crewAI` tem
  `created_at` 2023-10-27 — transferência de propriedade (pessoal → org).

## Alegado pela fonte, não verificado de forma independente

- "Used by 65% of the Fortune 500" — `commercial_claim` da página de pricing.
- "over 100,000 developers certified through our community courses" —
  `commercial_claim` do README.
- "rapidly becoming the standard for production-ready agentic automation" —
  `commercial_claim` do README.
- Repo `companies-powered-by-crewai`: "A showcase of companies and platforms
  leveraging CrewAI" — `commercial_claim`; cada empresa listada precisa de
  verificação externa individual.
- Resultados de case studies (nurse intake −80%, compliance 2 dias → 2 horas,
  automação de returns/refunds, supply chain forecasting, cloud support
  triage) — `commercial_claim` das páginas de case study capturadas.
- "purpose-built architecture", "high performance", "optimized for speed and
  minimal resource usage" — `commercial_claim` de marketing.
- Preço, limites, SLA e contrato do tier Enterprise — `unknown` (somente
  "contato comercial" visível; nenhum número publicado).

## Inferências

- A estratégia de aquisição é OSS-led: framework gratuito (57k stars, 34
  repos, 412 versões PyPI) → exemplos/quickstarts/awesome-list → comunidade
  Discourse → docs e cursos → conversão para Enterprise (SSO, RBAC, AMP).
- A telemetria que liga uso OSS a contas enterprise via `project_id` sugere
  dados como moat: a empresa vê quem usa o OSS e pode converter com
  targeting.
- A cadência de ~5 releases estáveis/mês com 60 pré-releases é sinal de
  capacidade de engenharia, mas pode gerar atrito para usuários enterprise
  que precisam de estabilidade.
- O endpoint `issues` (100 itens) é dominado por PRs (90/100), indicando
  atividade de código concentrada e triagem ativa.
- A concentração de 646 commits em `joaomdmoura` cria risco de pessoa-chave
  — análogo ao risco Bennett no TheFounderOS, mas aqui em código/framework.
- O moat público é mais forte em distribuição OSS, comunidade, lock-in
  enterprise (SSO/RBAC/A2A) e dados de telemetria do que em tecnologia
  irreplicável. O framework é MIT e pode ser forkado.

## Lacunas e riscos

- **Audit: 17 erros conhecidos.** 16 erros de size/hash mismatch em
  `raw/site/pages/home.html` — o coletor gravou 9 URLs diferentes (home,
  locale variants, etc.) no mesmo caminho `home.html`; 8 foram sobrescritas
  e apenas a última corresponde ao arquivo em disco. É um bug de path
  collision no coletor, não perda de conteúdo — cada URL foi capturada, mas
  8 versões não são recuperáveis do disco. Documentado; não corrigido no
  `audit.py`.
- **Audit: LICENSE false positive.** O arquivo `raw/repository/crewAI/LICENSE`
  é MIT válido (contém o texto de permissão e disclaimer padrão), mas omite
  o título literal "MIT License" — o `audit.py:128` procura essa string
  exata e reporta `"MIT LICENSE missing or invalid"`. É uma limitação do
  checker, não um defeito de licença. Não corrigido no `audit.py`.
- 51 páginas do site retornaram erro na captura — não capturadas, motivo
  não diagnosticado nesta baseline.
- Downloads do PyPI: `unknown` (API retorna `-1`; contagens descontinuadas).
- Receita, MRR, ARR, CAC, LTV, payback, margem: `unknown` — não expostos
  publicamente.
- Total de contribuidores: `unknown` (≥100; paginação não esgotada).
- Total de issues/PRs fechados: `unknown` (paginação não esgotada).
- NPS, churn, retenção, reembolso, show rate, close rate: `unknown`.
- Lista de clientes pagantes: `unknown` (showcase é `commercial_claim`).
- Tier intermediário de pricing: `unknown` (pode existir atrás de contato
  comercial).
- Não há análise de grafo (Graphify) — `knowledge/graphify/` está vazio.
- Não há arquivos de estratégia — `strategy/` está vazio.
- Testes do código não foram executados nesta baseline.
- Não há SBOM, threat model ou audit formal de segurança.
- Captura é ponto único (2026-08-15/16); não há série temporal para medir
  deltas de stars, releases, preços ou issues.
- A licença MIT do repo não cobre marca, copy, site, fotos, vídeos,
  comunidade ou ativos comerciais do CrewAI.
