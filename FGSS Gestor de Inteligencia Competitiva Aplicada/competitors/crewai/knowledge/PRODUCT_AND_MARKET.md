# CrewAI — Product and Market

> Distilled from `raw/repository/crewAI/README.md` (commit
> `754d7323beb2fd042e33444a115ea2d5a47193f0`, 2026-08-13). Pricing data
> supplemented from the captured pricing page (`knowledge/site/pricing.md`).
> All items are `observation` from CrewAI's own materials unless marked
> otherwise; CrewAI's self-descriptions are `commercial_claim` where they
> assert market position or capabilities without independent verification.

## What CrewAI Is

CrewAI is an open-source Python framework for orchestrating role-playing,
autonomous AI agents. It provides high-level abstractions and low-level APIs
for building production-ready multi-agent workflows. The framework is built
around two complementary primitives:

1. **Crews** — teams of AI agents with autonomy and collaborative intelligence,
   working through role-based collaboration (specialized roles, goals, tools,
   and tasks). Crews support dynamic task delegation and flexible
   decision-making.
2. **Flows** — production-ready, event-driven workflows with precise control
   over execution paths, secure state management, conditional branching, and
   clean integration of AI agents with production Python code.

Crews and Flows can be combined: Flows orchestrate the overall pipeline while
Crews handle autonomous reasoning within individual steps. `commercial_claim`

> Source: README.md lines 56–65, 166–188

## Self-Description (verbatim)

> "CrewAI is an open-source Python framework with high-level abstractions and
> low-level APIs for building production-ready multi-agent workflows. It gives
> developers autonomous agent collaboration through Crews and precise,
> event-driven control through Flows."

> "CrewAI is a lean, fast Python framework built specifically for orchestrating
> autonomous AI agents and production-ready agentic workflows."

`commercial_claim` — Source: README.md lines 58, 700

## Target Audience

- **Primary:** Developers and engineering teams building production-grade
  multi-agent AI workflows.
- **Secondary:** Enterprises needing a governed control plane for agent
  deployment, observability, and compliance (CrewAI AMP Suite).
- **Stated scale:** "over 100,000 developers certified through our community
  courses" at learn.crewai.com. `commercial_claim` — Source: README.md line 64
- **Enterprise positioning:** "Used by 65% of the Fortune 500."
  `commercial_claim` — Source: pricing page (`knowledge/site/pricing.md`)

## Key Features

### Framework (Open Source)

- **Crews for autonomy:** Model teams of specialized AI agents with roles,
  goals, tools, and tasks.
- **Flows for control:** Event-driven workflows with state, branching,
  routing (`@start`, `@listen`, `@router`), and logical combinators
  (`or_`, `and_`).
- **Seamless integration:** Combine Crews and Flows in a single pipeline.
- **Python-native customization:** Customize prompts, tools, execution paths,
  state, and integrations without fighting the framework.
- **Agent-ready capabilities:** Tools, memory, knowledge, checkpointing,
  async execution, MCP and A2A protocol support.
- **Production-ready patterns:** Deterministic steps, human-in-the-loop,
  structured outputs (Pydantic, JSON), conditional tasks, guardrails.
- **Process types:** Sequential and hierarchical (auto-assigns a manager
  agent for delegation and validation).

> Source: README.md lines 437–449, 435

### CrewAI AMP Suite (Commercial)

The commercial control plane built around the open-source framework:

- **Tracing & Observability:** Real-time monitoring of agents and workflows
  (metrics, logs, traces).
- **Unified Control Plane:** Centralized management, monitoring, and scaling.
- **Seamless Integrations:** Enterprise systems, data sources, cloud
  infrastructure.
- **Advanced Security:** Built-in security and compliance measures.
- **Actionable Insights:** Real-time analytics and reporting.
- **24/7 Support:** Dedicated enterprise support.
- **Deployment Options:** On-premise and cloud deployment.

> Source: README.md lines 67–84

## Pricing

The README does not list specific pricing tiers. Pricing data below is from
the captured pricing page (`knowledge/site/pricing.md`,
source: `https://crewai.com/pricing`). `observation`

| Plan | Price | Key features |
|---|---|---|
| **Basic** | Free | Visual editor and AI copilot, GitHub integration, 50 workflow executions/month |
| **Enterprise** | Custom (contact sales) | Everything in Free, plus: SSO, RBAC, workload identity, PII redaction, policies; deploy on CrewAI cloud, own VPC, or own infrastructure; 45-day onboarding; forward deployed engineering and training (à la carte) |

- Free trial of the Crew Control Plane available at `app.crewai.com`.
  `observation` — Source: README.md line 71, pricing page
- No mid-tier paid plan visible on the pricing page. `unknown` (may exist
  behind sales contact)

## Ecosystem and Integrations

### LLM Providers

The README mentions OpenAI as the default and references Ollama and LM Studio
for local models. The `pyproject.toml` optional dependencies reveal broader
provider support: `observation`

- OpenAI (default, `openai>=2.30.0`)
- Anthropic (`anthropic~=0.73.0`)
- Google Gemini (`google-genai~=1.65.0`)
- Azure AI (`azure-ai-inference`)
- AWS Bedrock (`boto3`, `aiobotocore`)
- IBM Watsonx (`ibm-watsonx-ai`)
- LiteLLM (multi-provider routing, `litellm>=1.84.0`)
- Voyage AI embeddings (`voyageai`)
- Ollama / LM Studio (local models, referenced in README/docs)

### Protocols

- **MCP (Model Context Protocol):** `mcp~=1.28.1` — native MCP support for
  tool/context integration. CrewAI also hosts a docs MCP server
  (`https://docs.crewai.com/mcp`).
- **A2A (Agent-to-Agent):** `a2a-sdk~=0.3.10` — inter-agent delegation
  protocol with server/client config.

### Vector Stores and Memory

- ChromaDB (`chromadb~=1.1.0`)
- LanceDB (`lancedb>=0.29.2`)
- Qdrant (`qdrant-client[fastembed]`)
- Mem0 (`mem0ai>=2.0.0`)

### Document Processing

- PDF extraction (`pdfplumber`)
- Document chunking (`docling`, `docling-core[chunking]`)
- File processing (`crewai-files`)

### Developer Tooling

- **AI coding agent skills:** Official CrewAI Skills package for Claude Code,
  Cursor, Codex, Windsurf (`github.com/crewAIInc/skills`). Four skills:
  `getting-started`, `design-agent`, `design-task`, `ask-docs`.
- **CLI:** `crewai` command for project scaffolding (`crewai create crew`,
  `crewai create flow`), running (`crewai run`), training, evaluation,
  deployment, and TUI-based interaction.
- **Dependency management:** uv (Astral)

### Community and Education

- **Community forum:** `community.crewai.com`
- **Certified developers:** 100,000+ via learn.crewai.com `commercial_claim`
- **DeepLearning.ai courses:** Two courses referenced
  (Multi AI Agent Systems; Practical Multi AI Agents and Advanced Use Cases)
- **Examples repo:** `github.com/crewAIInc/crewAI-examples` (landing page
  generator, trip planner, stock analysis, job postings)

### Documentation

- **Docs site:** `docs.crewai.com` (Mintlify, directory-based versioning)
- **Blog:** `blog.crewai.com`
- **Status:** `status.crewai.com`

## Telemetry

CrewAI collects anonymous telemetry by default (version, Python version, OS,
agent/task counts, process type, memory usage, parallel/sequential execution,
LLM model, agent roles, tool names). No prompts, task descriptions, goals,
backstories, API calls, responses, or secrets are collected unless `share_crew`
is explicitly enabled. Users can disable via `OTEL_SDK_DISABLED=true`.
`observation` — Source: README.md lines 636–664

## Market Positioning Claims

The following are `commercial_claim` items from CrewAI's own materials — they
have not been independently verified:

- "rapidly becoming the standard for production-ready agentic automation"
- "over 100,000 developers certified"
- "Used by 65% of the Fortune 500"
- "purpose-built architecture" designed "specifically for agent orchestration"
- "high performance" — "optimized for speed and minimal resource usage"

## When to Use CrewAI (per their guidance)

CrewAI recommends the framework when you need:

- More than a single prompt or chatbot
- Multi-step work with specialized agents
- Tool use and structured outputs
- Human review steps
- Workflows combining autonomous reasoning with explicit business logic
- Coordination of multiple agents with clear roles and tasks
- Deterministic, event-driven workflow wrapping
- Python-native application logic
- Path from experiment to production without changing frameworks

> Source: README.md lines 587–597

## Uncertainty Log

- **Mid-tier pricing:** No paid tier between Free and Enterprise visible on the
  captured pricing page. `unknown`
- **Actual Fortune 500 adoption:** Claimed at 65% but not independently
  verified from this snapshot. `unknown`
- **Actual certified developer count:** Claimed at 100,000+ but not
  independently verified. `unknown`
- **Revenue:** Not inferable from available data. `unknown`
- **Market share:** Not inferable from available data. `unknown`
