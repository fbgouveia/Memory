# CrewAI — Community & Docs Coverage

## A. Comunidade (Discourse)

> Fonte: `knowledge/site/guidelines.md`, `knowledge/site/c/*.md` e
> HTMLs brutos em `raw/site/pages/guidelines.html`,
> `raw/site/pages/c/announcements/6.html` etc.
> URL base: `https://community.crewai.com/`

### A.1 Plataforma

- **Discourse 2026.8.0-latest.1** — `<meta name="generator">`
  confirma: `Discourse 2026.8.0-latest.1 -
  https://github.com/discourse/discourse version
  3bcc19a5d2df81fcdfda6fa461ede9e9cac92c48` (observado em
  `raw/site/pages/guidelines.html`).
- Classificação: `observation`.
- Descrição da home: *"Official CrewAI community"* (meta description
  de `guidelines.html`).

### A.2 Categorias observadas (índice de `c/`)

- `announcements` (`/c/announcements/6`)
- `general` (`/c/general/4`) — mencionou "early-announcement of the
  Crews Marketplace".
- `community-support` (`/c/community-support/7`) — guidelines de
  postagem.
- `crews` (`/c/crews/16`)
- `events` (`/c/events`)
- `jobs-requiring-crewai-experience` (`/c/jobs-requiring-crewai-experience/22`)
- `llms` (`/c/llms/13`)
- `showcase` (`/c/showcase/12`)
- `site-feedback`

### A.3 Conteúdo distilado

- `c/announcements/6.md`: página de índice (sem posts destilados no
  snapshot — só cabeçalho e footer Discourse). State dos posts:
  `unknown` (provável razão: Discourse pode servir JS-renderizado;
  coletor capturou shell, não tópicos).
- `c/general/4.md`: only visible snippet: "Big News: Starting Crews
  Marketplace!" announcement.
- `c/community-support/7.md`: post fixado com guidelines de como
  perguntar (search first, faça MCVE, etc.).
- Demais categorias (`crews`, `llms`, `showcase`,
  `jobs-requiring-crewai-experience`, `events`, `site-feedback`):
  headings e footer; sem threads destiladas. State: `unknown` se há
  threads dentro — provável bloqueio de JS-render no coletor.

### A.4 Diretrizes comunitárias (`guidelines.md`)

- Texto é o template padrão do Discourse ("This is a Civilized Place
  for Public Discussion" + seções canônicas: Improve the Discussion,
  Be Agreeable Even When You Disagree, Your Participation Counts, If
  You See a Problem Flag It, Always Be Civil, Keep It Tidy, Post
  Only Your Own Stuff, Powered By You).
- Classificação: `observation` — guidelines default do Discourse, sem
  customização evidente.

### A.5 Métricas comunitárias (`unknown`)

- Contagem de usuários, threads, posts, MAU: `unknown` (não
  exposto no snapshot; princípio 7 do AGENTS.md proíbe inferir por
  contagem de membros).
- Número de staff/moderadores: `unknown`.
- SLA de resposta: `unknown`.

## B. Docs OSS (`docs.crewai.com`)

> Fonte: `knowledge/site/en/introduction.md` e subpastas
> `concepts/`, `guides/`, `examples/`, `learn/`, `api-reference/`.
> Stack: Mintlify. Versão exposta: `v1.15.16`.

### B.1 Tópicos cobertos (observados no índice de navegação de
`en/introduction.md`)

- **Get Started**: Introduction, Build with AI, Skills, Installation,
  Quickstart, Guides (Strategy, Agents, Crews, Flows, Frontend, Tools,
  Coding Tools, Advanced, Migration).
- **Core Concepts**: Agents, Agent Capabilities, Tasks, Crews, Flows,
  Streaming, Production Architecture, Knowledge, Skills, LLMs, Files,
  Processes, Collaboration, Training, Memory, Reasoning, Planning,
  Testing, CLI, Tools, Event Listeners, Checkpointing.
- **MCP Integration**: MCP Servers as Tools in CrewAI, MCP DSL
  Integration, Stdio Transport, SSE Transport, Streamable HTTP
  Transport, Connecting to Multiple MCP Servers, MCP Security
  Considerations.
- **Tools**: Tools Overview, File & Document, Web Scraping & Browsing,
  Search & Research, Database & Data, AI & Machine Learning, Cloud &
  Storage, Integrations, Automation.
- **Observability**: CrewAI Tracing (Overview), Arize Phoenix,
  Braintrust, Datadog, Galileo, LangDB, Langfuse, Langtrace, Maxim,
  MLflow, Neatlogs, OpenLIT, Opik, Patronus AI Evaluation, Portkey,
  Weave, TrueFoundry.
- **Learn**: Overview, Strategic LLM Selection Guide, Conditional
  Tasks, Coding Agents, Create Custom Tools, Custom LLM
  Implementation, Custom Manager Agent, Customize Agents, Image
  Generation with DALL-E, Force Tool Output as Result, Hierarchical
  Process, Human Input on Execution, Human-in-the-Loop Workflows,
  Human Feedback in Flows, Kickoff Crew Asynchronously, Kickoff
  Crew for Each, Streaming Runtime Contract, Consuming Streams,
  Connect to any LLM, Using CrewAI Without LiteLLM, Using Multimodal
  Agents, Replay Tasks from Latest Crew Kickoff, Sequential
  Processes, Using Annotations in crew.py, Execution Hooks,
  Telemetry.
- **API Reference**: introduction.md apenas (pouca profundidade
  capturada).

### B.2 Observability providers integrados

Lista oficial (de `en/introduction.md` navegação + arquivos em
`platform/en/guides/`):

| Provider | Notas |
| --- | --- |
| **CrewAI Tracing** | Nativo (overview próprio) |
| **Arize Phoenix** | open source LLM observability |
| **Braintrust** | eval platform |
| **Datadog** | guide em `platform/en/guides/datadog.md` + `capture_telemetry_logs.md` |
| **Galileo** | |
| **LangDB** | |
| **Langfuse** | também citado no case AWS |
| **Langtrace** | |
| **Maxim** | |
| **MLflow** | |
| **Neatlogs** | |
| **OpenLIT** | |
| **Opik** | |
| **Patronus AI Evaluation** | eval, não tracing puro |
| **Portkey** | |
| **Weave** | Weights & Biases |
| **TrueFoundry** | |
| **OpenTelemetry Export** | guide em `platform/en/guides/` |

Total: **17 providers externos** + CrewAI Tracing nativo +
OpenTelemetry como padrão aberto.

### B.3 MCP / A2A — suporte declarado (observation)

- **MCP (Model Context Protocol)**: primeira-class support na docs
  OSS. Subpáginas: MCP Servers as Tools in CrewAI, MCP DSL
  Integration, Stdio Transport, SSE Transport, Streamable HTTP
  Transport, Connecting to Multiple MCP Servers, MCP Security
  Considerations. Página OSS também cita native sandbox tools E2B e
  Daytona (`open-source.md`).
- **A2A (Agent-to-Agent)**: página OSS descreve *"Connect Crews with
  the A2A protocol"*; docs OSS tem `en/learn/a2a-agent-delegation.md`
  detalhando `A2AClientConfig` (endpoint, auth, timeout, max_turns,
  response_model, fail_fast, updates streaming/polling/push) e
  `A2AServerConfig` para expor Crews como servidores A2A. Plataforma
  AMP tem `platform/en/features/a2a.md` ("A2A on AMP").
- **Async/await nativo**: *"Run crews, flows, tasks, tools,
  knowledge, memory, and LLM calls asynchronously with native
  async/await support"* (`open-source.md`).

### B.4 LLMs suportados

Da página home (`home.md`) — "Most Popular LLMs Powering AI Agents":

- OpenAI, Azure, Groq, Anthropic, Google, Ollama, Watson, Bedrock.

Classificação: `commercial_claim` (lista de popularidade, não
ranking auditado). Suporte técnico a estes + outros via LiteLLM é
documentado em `en/concepts/llms.md` (não destilado em detalhe aqui).

### B.5 Ferramenta de "Chat with our docs"

- Link: `https://chatg.pt/DWjSBZn` — redirecionamento para ChatGPT
  (OpenAI) com prompt pré-carregado. Classificação: `observation`.
  Implicação: CrewAI usa ChatGPT share link como assistant de docs
  (não produto próprio).

## C. Docs Platform AMP (`docs-platform.crewai.com`)

> Fonte: `knowledge/site/platform/en/introduction.md` e subpastas
> `features/`, `guides/`, `resources/`.

### C.1 Funcionalidades AMP documentadas

- **Build**: Automations, Studio, Marketplace, Agent Repositories,
  Tools & Integrations, PII Redaction for Traces, A2A on AMP.
- **Operate**: Traces, Webhook Streaming, Hallucination Guardrail,
  Flow HITL Management.
- **Manage**: SSO, RBAC, Secrets Manager.
- **Integration Docs** (29 documentos em `platform/en/integrations/`):
  Asana, Box, ClickUp, Databricks, GitHub, Gmail, Google Calendar,
  Google Contacts, Google Docs, Google Drive, Google Sheets, Google
  Slides, HubSpot, Jira, Linear, Microsoft Excel, Microsoft
  OneDrive, Microsoft Outlook, Microsoft SharePoint, Microsoft Teams,
  Microsoft Word, Notion, Salesforce, Shopify, Slack, Snowflake,
  Stripe, Zendesk.
- **Triggers** (11): Gmail, Google Calendar, Google Drive, Outlook,
  OneDrive, Microsoft Teams, Slack, HubSpot, Salesforce, Zapier.
- **How-To Guides**: Build Crew, Prepare for Deployment, Deploy to
  AMP, Monorepo Deployments, Private Package Registries, Kickoff
  Crew, Conversational Flow Chat API, Update Crew, Enable Crew
  Studio, OpenTelemetry Export, Datadog Integration, Azure OpenAI
  Setup, Vertex AI with Workload Identity, Tool Repository, Custom
  MCP Servers, React Component Export, Team Management, HITL
  Workflows, Webhook Automation.

## D. Estado `unknown`

- Profundidade real (existe / 404 / placeholder) de cada uma das 17
  integrations de observability e 29 integration docs: `unknown`
  (não foi feita leitura página a página; só índice de navegação).
- Estado de versionamento de A2A (spec compatibilidade): `unknown`.
- Métricas de uso real das integrations: `unknown`.
- Existência de MCP servers publicados pela CrewAI em registry
  público: `unknown` (não capturado).
- Polígono de i18n real (`pt-BR`, `ko`, `ar` são mencionados no
  banner script Mintlify): `unknown` se tradução está completa.
- Canal de suporte (Discourse vs Slack vs HubSpot) e SLAs: `unknown`.
- Existência de canal Discord/Slack oficial além do Discourse:
  `unknown` (não linkado em footer capturado).
