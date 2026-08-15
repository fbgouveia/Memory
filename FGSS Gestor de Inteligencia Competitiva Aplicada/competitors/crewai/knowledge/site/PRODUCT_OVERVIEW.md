# CrewAI — Product Overview

> Distilação de `knowledge/site/home.md`, `pricing.md`, `open-source.md`,
> `agent-management-platform.md`, `case-studies.md`, `en/introduction.md`,
> `en/concepts/{agents,crews,flows,memory,collaboration}.md`,
> `en/learn/a2a-agent-delegation.md`, `platform/en/introduction.md`.
> Todos os itens abaixo têm como contraprova o arquivo `raw/site/pages/<slug>.html`
> correspondente e o SHA-256 registrado no topo de cada `.md` fonte.

## 1. O que a CrewAI vende

A CrewAI vende uma **plataforma de agentes multi-agente** em duas camadas:

- **CrewAI OSS** — framework open-source (MIT) para orquestrar `Crews` e
  `Flows` em código Python/YAML/JSONC. Repo público:
  `https://github.com/crewAIInc/crewAI`. Versão atual capturada: `v1.15.16`
  (cabeçalho da docs, `en/introduction.md`).
- **CrewAI AMP (Agent Management Platform)** — camada comercial/enterprise
  que envolve o OSS: Studio (editor visual + AI copilot), governança
  (SSO, RBAC, workload identity, PII redaction, políticas), observabilidade
  (Traces, Webhook Streaming, Hallucination Guardrail, Flow HITL),
  Marketplace, Agent Repositories, Tools & Integrations, A2A on AMP,
  Secrets Manager, triggers (Slack, Gmail, Salesforce, HubSpot, etc.).
  URLs canônicas: `https://crewai.com/agent-management-platform` e
  `https://docs-platform.crewai.com/platform/en/introduction`.

A página de AMP descreve o posicionamento como: *"Discover, Build, Manage
Agents At Scale"* — descoberta de onde automatizar, build no-code/low-code,
deploy com observabilidade, governança e escala a partir de um control plane
único (`agent-management-platform.md`).

## 2. Primitivas-chave (observação, cópia literal de termos da docs)

- **Flows** — *"The backbone of your AI application"*; orquestração
  event-driven com state management (Pydantic ou dict), control flow
  (`@start`, `@listen`, `@router`, `or_`, `and_`), persistência SQLite
  (`@persist`), forking/resume de state via UUID. Fonte:
  `en/concepts/flows.md`.
- **Crews** — *"The intelligence"*; unidade de trabalho dentro de um Flow,
  composta por `Agents` + `Tasks` em processo `sequential` ou
  `hierarchical` (com `manager_llm`). Suporta `kickoff`, `kickoff_for_each`,
  `akickoff`, `akickoff_for_each`, `checkpoint`, `usage_metrics`. Fonte:
  `en/concepts/crews.md`.
- **Agents** — entidades com `role`, `goal`, `backstory`, `llm`,
  `tools`, `memory`, `reasoning`, `multimodal`, `inject_date`,
  `respect_context_window`, `max_iter`, `max_rpm`, `max_execution_time`,
  `allow_delegation`. Configuráveis em JSONC (recomendado), YAML ou
  Python. `allow_delegation=True` habilita as tools *Delegate work* e
  *Ask question* entre agentes. Fonte: `en/concepts/agents.md`,
  `en/concepts/collaboration.md`.
- **Memory** — camada cognitiva unificada (`Memory()`) com escopos
  hierárquicos (`/project/alpha`, `/agent/researcher`, ...), scoring
  composto `semantic + recency + importance`, `MemoryScope.subscope()`,
  `Memory.slice(read_only=...)`, `extract_memories()`, `tree()`, `info()`,
  `forget()`. Fonte: `en/concepts/memory.md`. A página OSS também
  descreve a memory como *"cognitive layer that intelligently remembers,
  resolves contradictions, forgets intentionally, and knows when it lacks
  context"* (`open-source.md`).
- **Tools / Skills / Knowledge** — centenas de tools open-source, suporte
  first-class a **MCP** (Model Context Protocol) com Stdio/SSE/Streamable
  HTTP transports e DSL de integração, native sandboxes **E2B** e
  **Daytona**, RAG tools, knowledge sources. Fonte: `open-source.md` e
  índice da docs `en/introduction.md`.
- **A2A (Agent-to-Agent)** — protocolo nativo para descoberta e delegação
  entre agentes remotos (`A2AClientConfig` com `endpoint` apontando para
  `/.well-known/agent-card.json`, auth Bearer/APIKey/OAuth2/HTTPBasic,
  updates Streaming/Polling/Push, `A2AServerConfig` para expor Crews como
  servidores A2A). Fonte: `en/learn/a2a-agent-delegation.md`,
  `platform/en/features/a2a.md`.
- **Checkpointing** — captura de estado a cada step; `Crew.from_checkpoint`
  para resumir, `CheckpointConfig(location, on_events, max_checkpoints)`.
  Fonte: `en/concepts/crews.md`, `en/concepts/checkpointing.md`,
  `open-source.md`.

## 3. Posicionamento declarado (commercial_claim — não verificado)

- *"Loved by AI builders. Trusted by AI leaders. Used by 65% of the
  Fortune 500."* — repetido no footer de todas as páginas capturadas.
  Classificação: **commercial_claim**. Sem prova independente no snapshot.
- *"The agent harness powering agentic systems used by 63% of the
  Fortune 500"* — aparece em `open-source.md`. **Inconsistência
  interna**: 63% (OSS) vs 65% (footer AMP/pricing). Classificação:
  **commercial_claim** + flag de inconsistência.
- *"Backed by more than 100,000 developers"* — `open-source.md`.
  Classificação: **commercial_claim** (número não auditável pela
  superfície capturada; princípio 7 do AGENTS.md proíbe inferir adoção
  por stars/membros).
- *"CrewAI unblocks the enterprise agent backlog by giving both business
  teams and engineers a unified build and runtime platform that is
  centrally governed"* — `pricing.md`. **commercial_claim**.
- *"Discover… cross-references it against billions of real-world agent
  deployments"* — `agent-management-platform.md`. **commercial_claim**
  (claim forte sem métrica de fonte).
- *"700k use case patterns observed in production environments similar
  to yours"* — `agent-management-platform.md`. **commercial_claim**.

## 4. Domínios e stack público observados

- Site comercial: `https://crewai.com/` (Next.js, deploy Vercel —
  `dpl_…` hashes presentes; footer "CrewAI © Copyright 2026").
- Insights subdomain: `https://insights.crewai.com/` (`home.md` descreve
  "Multi AI Agents In Production").
- Docs OSS: `https://docs.crewai.com/en/` (Mintlify, versionado em URL
  `/v1.15.16/...`, expõe `/llms.txt`).
- Docs AMP: `https://docs-platform.crewai.com/platform/en/` (também
  Mintlify).
- Blog: `https://blog.crewai.com/` (Ghost; canonical das postagens
  aponta para `blog.crewai.com`).
- Comunidade: `https://community.crewai.com/` (Discourse).
- App / Sign-in / Sign-up: `https://app.crewai.com/`,
  `https://login.crewai.com/sign-up`.
- Status: `http://status.crewai.com/`.
- Trust center: `https://trust.crewai.com/`.
- GitHub: `https://github.com/crewAIInc/crewAI` (footer) e
  `https://github.com/crewaiinc/crewai` (link SVG do footer).
  Observação: dois casings diferentes no próprio site.

## 5. Fronteira / Estado não verificável (`unknown`)

- Receita, ARR, valuation, número de clientes Enterprise pagos, número
  de crews em produção, LLMs mais usados em valor: `unknown`.
- Validação independente dos claims "65%/63% of Fortune 500": `unknown`.
- Existência efetiva de clientes adicionais além dos cinco case studies
  publicados: `unknown`.
- Maturidade real dos recursos descritos (Memory, A2A, MCP DSL) em
  produção: `unknown` pela superfície do site.
