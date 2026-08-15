# CrewAI — Technical Architecture

> Distilled from repository snapshot at commit `754d7323beb2fd042e33444a115ea2d5a47193f0`
> (2026-08-13). Source: `raw/repository/crewAI/`. All items below are
> `observation` unless marked otherwise.

## Language and Runtime

- **Language:** Python (`requires-python = ">=3.10, <3.14"`)
- **Package manager:** uv (Astral); `uv.lock` present (1.6 MB)
- **Build backend:** hatchling (`hatchling.build`)
- **Workspace type:** uv workspace monorepo with 6 member packages

## Workspace Packages

The root `pyproject.toml` (`lib/crewai/pyproject.toml`) declares a uv workspace
(`[tool.uv.workspace]`) with the following members under `lib/`:

| Package | Path | Import name | Description |
|---|---|---|---|
| crewai | `lib/crewai` | `crewai` | Core framework — agents, crews, flows, tasks, tools, memory |
| crewai-core | `lib/crewai-core` | `crewai_core` | Shared utilities — version, paths, user-data, telemetry, printer |
| crewai-tools | `lib/crewai-tools` | `crewai_tools` | Agent tooling extras (SerperDevTool, etc.) |
| crewai-files | `lib/crewai-files` | `crewai_files` | File processing utilities |
| cli | `lib/cli` | `crewai_cli` | Command-line interface (`crewai` command) |
| devtools | `lib/devtools` | `crewai_devtools` | Release tooling and developer utilities |

## Version

- `__version__ = "1.15.16"` (from `lib/crewai/src/crewai/__init__.py:51`)
- Version is dynamic via hatchling (`[tool.hatch.version]` path =
  `src/crewai/__init__.py`)

## Key Dependencies (crewai package)

Core runtime dependencies from `lib/crewai/pyproject.toml`:

- **pydantic** `>=2.11.9,<2.13` — data validation and models
- **openai** `>=2.30.0,<3` — OpenAI SDK (default LLM provider)
- **instructor** `>=1.3.3` — structured LLM outputs
- **chromadb** `~=1.1.0` — vector store for memory/knowledge
- **lancedb** `>=0.29.2,<0.30.1` — vector database
- **opentelemetry-api/sdk/exporter-otlp-proto-http** `~=1.42.0` — telemetry
- **httpx** `~=0.28.1` — HTTP client
- **mcp** `~=1.28.1` — Model Context Protocol support
- **click** `>=8.1.7,<9` — CLI framework
- **tokenizers** `>=0.21,<1` — tokenization
- **pdfplumber** `~=0.11.4` — PDF text extraction
- **pyjwt** `>=2.13.0,<3` — JWT authentication
- **pydantic-settings** `>=2.14.2,<3` — settings management
- **aiofiles** `~=24.1.0`, **aiosqlite** `~=0.21.0` — async file/DB I/O

### Optional Dependency Extras

- `tools` — crewai-tools
- `embeddings` — tiktoken
- `pandas` — pandas
- `docling` — document chunking (docling + docling-core[chunking])
- `qdrant` — Qdrant vector store with fastembed
- `aws` / `bedrock` — boto3 + aiobotocore
- `watson` — IBM Watsonx AI
- `voyageai` — Voyage embeddings
- `litellm` — LiteLLM multi-provider routing
- `google-genai` — Google Gemini
- `azure-ai-inference` — Azure AI
- `anthropic` — Anthropic Claude
- `a2a` — Agent-to-Agent protocol (a2a-sdk, httpx-auth, httpx-sse, aiocache)
- `file-processing` — crewai-files
- `mem0` — Mem0 memory
- `qdrant-edge` — Qdrant edge client

## Top-Level Directory Structure

```
crewAI/
├── .editorconfig
├── .env.test
├── .github/              # CI workflows, CONTRIBUTING.md, issue templates
├── .gitignore
├── .pre-commit-config.yaml
├── .python-version
├── AGENTS.md             # Contributor guidelines for AI coding agents
├── DOCS_TRANSLATIONS.md
├── LICENSE               # MIT (see License section below)
├── README.md
├── conftest.py           # Root pytest conftest (17 KB)
├── docs/                 # Mintlify documentation (24,041 .mdx files)
├── lib/                  # uv workspace packages (6 members)
├── pyproject.toml        # Workspace root config
├── scripts/              # Helper scripts (age90_file_input_runner.py, docs/)
└── uv.lock
```

## Core Modules (`lib/crewai/src/crewai/`)

| Module | Purpose |
|---|---|
| `__init__.py` | Public API exports; lazy imports for heavy modules (Memory→lancedb) |
| `agent/` | Single-agent core (`Agent` class, `PlanningConfig`) |
| `agents/` | Agent builders, executors, `crew_agent_executor`, `tools_handler` |
| `a2a/` | Agent-to-Agent protocol config (`A2AConfig`, `A2AClientConfig`, `A2AServerConfig`) |
| `auth/` | Authentication modules |
| `cli/` | CLI entry points (delegates to `crewai_cli`) |
| `constants.py` | Framework constants (13 KB) |
| `context.py` | `ExecutionContext` |
| `core/` | Core abstractions |
| `crew.py` | `Crew` class — the central orchestrator (94 KB, largest source file) |
| `crews/` | `CrewOutput` and crew-related types |
| `events/` | Event system for flows and crew lifecycle |
| `execution.py` | Execution helpers |
| `experimental/` | `AgentExecutor` and experimental features |
| `flow/` | `Flow` class, `@start`, `@listen`, `@router` decorators, `or_`/`and_` combinators |
| `hooks/` | LLM call hooks (`LLMCallHookContext`) |
| `knowledge/` | `Knowledge` class and knowledge source abstractions |
| `lite_agent.py` | Lite agent implementation (39 KB) |
| `llm.py` | `LLM` class — model abstraction (106 KB) |
| `llms/` | `BaseLLM` and provider integrations |
| `mcp/` | Model Context Protocol integration |
| `memory/` | Memory system: short-term, long-term, entity, unified (`Memory`) |
| `project/` | Project decorators: `@CrewBase`, `@agent`, `@task`, `@crew` |
| `rag/` | RAG integration |
| `security/` | Security utilities |
| `skills/` | Agent skills |
| `state/` | `RuntimeState`, `CheckpointConfig` |
| `task.py` | `Task` class (60 KB) |
| `tasks/` | `ConditionalTask`, `LLMGuardrail`, `TaskOutput` |
| `telemetry/` | OpenTelemetry instrumentation |
| `tools/` | `BaseTool`, `CrewStructuredTool`, tool types, tool handler |
| `translations/` | i18n |
| `types/` | Type definitions |
| `utilities/` | Utilities (49 entries — largest subdirectory by count) |

## CLI Package (`lib/cli/src/crewai_cli/`)

Key modules:

- `cli.py` — entry point (`crewai` command)
- `create_crew.py`, `create_flow.py`, `create_json_crew.py` — project scaffolding
- `run_crew.py`, `kickoff_flow.py` — execution
- `crew_chat.py`, `crew_run_tui.py`, `memory_tui.py`, `checkpoint_tui.py` — interactive TUIs
- `train_crew.py`, `evaluate_crew.py` — training and evaluation
- `deploy/` — deployment commands
- `enterprise/` — enterprise CLI commands
- `organization/` — org management
- `model_catalog.py` — model provider catalog
- `provider.py` — LLM provider configuration
- `templates/` — project templates (excluded from linting)
- `triggers/` — flow trigger utilities

## Entry Points

- **Console script:** `crewai` → `crewai_cli.cli:crewai`
  (declared in `lib/crewai/pyproject.toml` `[project.scripts]`)
- **Python API:** `from crewai import Agent, Crew, Task, Flow, Process, LLM, Knowledge`
- **Project decorators:** `from crewai.project import CrewBase, agent, task, crew`

## Test Framework

- **Framework:** pytest `9.0.3`
- **Plugins:**
  - `pytest-asyncio` `1.3.0` (strict mode)
  - `pytest-xdist` `3.8.0` (parallel: `-n auto`, `--dist=loadfile`)
  - `pytest-recording` `0.13.4` + `vcrpy` `8.2.1` (HTTP cassette recording)
  - `pytest-timeout` `2.4.0` (60s timeout per test)
  - `pytest-split` `0.11.0` (test splitting)
  - `pytest-randomly` `4.0.1` (random ordering)
  - `pytest-subprocess` `1.5.3`
- **Test paths:** `lib/crewai/tests`, `lib/crewai-tools/tests`,
  `lib/crewai-files/tests`, `lib/cli/tests`, `lib/crewai-core/tests`
- **addopts:** `--tb=short -n auto --timeout=60 --dist=loadfile
  --max-worker-restart=2 --block-network --import-mode=importlib`
- **Root conftest:** `conftest.py` (17 KB) at repo root

### Test File Count

| Package | Test files (`test_*.py`) |
|---|---|
| crewai | 226 |
| cli | 40 |
| crewai-tools | 31 |
| crewai-files | 8 |
| crewai-core | 3 |
| devtools | 2 |
| **Total** | **310** |

## Code Quality Tooling

- **Linter:** ruff `0.15.1` (E, F, B, S, RUF, N, W, I, T, PERF, PIE, TID, ASYNC,
  RET, UP rules; `target-version = "py310"`)
- **Type checker:** mypy `1.19.1` (strict mode, `disallow_untyped_defs`,
  `disallow_any_unimported`, `no_implicit_optional`, pydantic plugin)
- **Security scanner:** bandit `1.9.2`
- **Pre-commit:** `4.5.1`
- **Commit linter:** commitizen (Conventional Commits)
- **Dependency audit:** pip-audit `2.9.0`

## Documentation

- **Platform:** Mintlify (`docs/`)
- **Structure:** Directory-based versioning — `docs/edge/en/` for live edits,
  `docs/v<X.Y.Z>/` for frozen release snapshots
- **Translations:** `ar`, `ko`, `pt-BR` (per `DOCS_TRANSLATIONS.md`)
- **File count:** 24,041 `.mdx` files, 104 `.md` files, 91 `.png` images

## Audit Report Summary

- **Repository manifest:** `inventory/repository_manifest.json` generated
- **Audit report:** `inventory/audit_report.json` generated
- **Status:** `fail` (expected — placeholder `site_manifest.json` with empty
  records; 33 site orphan errors from pre-existing `raw/site/pages/` files
  not yet registered in the manifest)
- **Repository stats:** 26,369 files, 352,713,677 bytes (336 MB)
- **Extension highlights:** `.py` 1302, `.mdx` 24041, `.yaml` 742, `.md` 104,
  `.png` 91, `.json` 16, `.toml` 12

## License

- **Type:** MIT
- **File:** `raw/repository/crewAI/LICENSE` (1,055 bytes)
- **Copyright:** `Copyright (c) 2025 crewAI, Inc.`
- **Confirmation:** The file contains the standard MIT permission grant text
  (lines 3–11) and the standard no-warranty disclaimer (lines 13–19). This is
  a valid MIT license. `observation`
- **Audit note:** The audit script (`tools/audit.py:128`) checks for the
  literal string `"MIT License"` in the file. The CrewAI LICENSE file omits
  the title line `MIT License` (it starts directly with the copyright line),
  causing the audit to flag `"MIT LICENSE missing or invalid"`. This is a
  checker limitation, not a license defect. `inference`
- **Scope:** MIT covers the code only. Per AGENTS.md principle 9, MIT does not
  license brand, copy, site, photos, videos, communities or commercial assets.
