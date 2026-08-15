# Blueprint de incorporação no FGSS.io — princípios do CrewAI

## Resultado pretendido

Converter os melhores princípios observados no CrewAI em uma camada original
do FGSS: um cockpit empresarial em que conhecimento tem proveniência,
decisões têm máquinas de estado, ações têm autorização e todo resultado tem
prova. Não clonar o framework — adaptar princípios, evitar expressão
(marca, copy, layout, templates, dados da comunidade).

O repo real do FGSS.io não foi localizado (ver `foundation/AGENTS.md` e
`PENDENCIAS.md` global). Tudo aqui é especificação, não código em produção.
Sem o repo, F1/F2 são specs; não declarar implementação.

## Arquitetura alvo (adaptada do blueprint TheFounderOS)

```text
Knowledge Absorber
  fonte → snapshot → hash → extração → claim com proveniência
                    ↓
FGSS Brain
  roteamento → retrieval → conflito → promoção claim/fato/memória
                    ↓
FGSS Cockpit (fronteira ainda não localizada)
  contexto → exceções → decisão → simulação → aprovação
                    ↓
Pivô / Gestor de Automação
  capability → policy → sandbox → execução → evidência → DLQ/rollback
```

O CrewAI adiciona três primitivas que o FGSS deve absorver como conceito
(não como código): **Crews** (autonomia role-based), **Flows** (controle
event-driven) e **Skills** (capacidades reusáveis). O FGSS as reinterpreta
como máquinas de estado executáveis (F1), capability registry (F2) e
blueprints versionados (F5).

## Princípios do CrewAI mapeados a F1-F5

### F1 — Invariant Engine ↔ Crews/Flows como máquinas de estado

CrewAI expõe Crews (autonomia) e Flows (controle) como decorators
(`@start`, `@listen`, `@router`, `@CrewBase`, `@agent`, `@task`, `@crew`).
São legíveis, mas não são máquinas de estado executáveis com invariantes
testadas. `observation` — `flow/`, `project/` no repo.

**Adotar:** primitivas de orquestração legíveis por humanos com decorators
ou DSL equivalente.
**Adaptar:** cada Crew/Flow vira uma máquina de estado com `states`,
`transições permitidas`, `pré-condições`, `severidade` e `teste de
invariante`. Transição recusada explica a regra e registra evidência.
**Evitar:** copiar nomes de decorators, signatures ou exemplos do CrewAI.
**Critério de aceite:** 100% das transições testadas (caminho feliz, ilegal,
idempotência, concorrência); processo hierárquico auditável (responde à
thread 7629 — "só diz 'smooth progression', não explica ordem").

### F2 — Capability Registry ↔ Agent/Tool como capability graph

CrewAI modela `Agent` (role, goal, backstory, tools), `Task` (description,
expected_output, agent), `Tool` (BaseTool, CrewStructuredTool). Não
distingue `advertised` de `proven` — se o tool está importado, aparece como
disponível. `observation` — `agent/`, `task.py`, `tools/`.

**Adotar:** role-based agents com goal, tools e tasks como abstração clara.
**Adaptar:** cada agent/tool vira capability com cinco estados
(`advertised`/`implemented`/`configured`/`healthy`/`proven`), owner,
credencial, risco, idempotência e rollback. Orçamento de autonomia
compartilhado por crew (responde à thread 7726 — "runaway spend sem shared
ceiling").
**Evitar:** listar tool como "disponível" só porque está importada; usar
contagem de agentes/tools como métrica primária.
**Critério de aceite:** zero falso "conectado"; nenhum write fora da
policy; orçamento de crew respeitado independentemente de qual agente decide
gastar.

### F3 — Cockpit de exceções ↔ Studio + tracing

CrewAI tem Studio visual (commercial), tracing OTel nativo e 17+ backends
de observability. O cockpit é de monitoramento, não de exceção com lineage
e rollback. `observation` — `knowledge/`, `v1.15.16/en/observability/`.

**Adotar:** tracing OTel nativo e integração com backends existentes
(Datadog, Langfuse, Phoenix, MLflow) — não reinventar observability.
**Adaptar:** cockpit orientado a exceção: toda métrica abre lineage, toda
escrita abre simulação/aprovação/trilha, toda divergência mostra próximo
gate. O FGSS não compete com Studio em prototipagem; compete em governança de
decisão.
**Evitar:** copiar layout do Studio, AI copilot ou templates visuais.
**Critério de aceite:** 100% de números com lineage; todo write gera
plano/simulação; recuperação medida por classe via DLQ/replay/rollback.

### F4 — Memory Promotion ↔ Memory/Knowledge do CrewAI

CrewAI tem `Memory` (short-term, long-term, entity, unified) e `Knowledge`
(knowledge sources, embeddings, vector stores Chroma/LanceDB/Qdrant/Mem0).
Não há pipeline de promoção `source → signal → claim → fact` com validade
temporal, conflito e supersessão. `observation` — `memory/`, `knowledge/`.

**Adotar:** memory estruturada (short/long/entity) e knowledge sources com
embeddings e vector stores — não reinventar armazenamento.
**Adaptar:** alinhar a `source → signal → claim → fact → memory` com
confiança, validade temporal, conflito, revisor e supersessão. Agente não
usa claim pendente como fato e consegue explicar a origem da memória
(responde à thread 7244 — "agents as unreliable narrators passing text
without validation of claims").
**Evitar:** copiar schemas, prompts de entity extraction ou dados de
comunidade.
**Critério de aceite:** zero claim pendente usado como fato; toda memória
explica origem, validade e revisor.

### F5 — Blueprint SDK ↔ CLI scaffolding + Skills + community

CrewAI tem `crewai create crew/flow` (scaffolding), `crewai run/train/
evaluate`, TUIs (chat, memory, checkpoint), templates versionados, Skills
para Claude Code/Cursor/Codex/Windsurf, examples repo (6.132 stars),
quickstarts, awesome-list e 100k+ certificados (`commercial_claim`).
`observation` — `cli/`, `templates/`, `skills/`, repos da org.

**Adotar:** CLI scaffolding com templates versionados; Skills para coding
agents; examples/quickstarts como topo de funil; docs versionadas por
release (`docs/v<X.Y.Z>/`).
**Adaptar:** empacotar domínios originais (Creator/CRM/Finance) como
blueprints baseados em necessidades universais, não no código do CrewAI.
Modo demo claramente rotulado, wizard de conexão, fixtures e score de
prontidão. Instalação sem credenciais funciona como simulação; conexão real
substitui o provider sem alterar a UI.
**Evitar:** copiar nomes de templates, copy de exemplos, imagens ou dados de
cursos da comunidade; declarar "100k+ developers" — é `commercial_claim`.
**Critério de aceite:** novo domínio sem fork do core; instalação sem
credenciais funciona como simulação rotulada; troca de provider não altera
a UI.

## Princípios transversais (não atrelados a F1-F5)

### Observability integration

CrewAI integra 17+ backends de observability (Datadog, Langfuse, Phoenix,
MLflow, Arize, Galileo, Braintrust, Langtrace, OpenLIT, Opik, Portkey,
Weave, Maxim, Neatlogs, LangDB, TrueFoundry, Patronus). `observation` —
`v1.15.16/en/observability/`.

**Adotar:** não reinventar observability. O FGSS deve expor OTel e
integrar com os mesmos backends. O moat do FGSS não é observability — é
evidence graph e governança de decisão em cima dos traces.

### MCP/A2A support

CrewAI suporta MCP (`mcp~=1.28.1`) e A2A (`a2a-sdk~=0.3.10`) como
primitivas nativas. MCP tem docs dedicadas (security, stdio, SSE,
streamable HTTP, multiple servers). A2A tem server/client config.
`observation` — `mcp/`, `a2a/`, `v1.15.16/en/mcp/`.

**Adotar:** MCP e A2A como protocolos abertos no FGSS. Não competir com
protocolos — competir com threat model por connector (prompt injection,
SSRF, confused deputy, exfilração, webhook replay).
**Adaptar:** cada connector MCP/A2A passa pelo capability registry (F2)
com owner, permissão, idempotência e egress allowlist.
**Evitar:** replicar enterprise A2A "Plus API token" — é lock-in comercial,
não padrão aberto.

### Community building

CrewAI constrói comunidade em quatro vetores (`observation`): fórum
Discourse (`community.crewai.com`), courses (learn.crewai.com,
DeepLearning.ai), examples/quickstarts/awesome-list, e Skills para coding
agents (Claude Code, Cursor, Codex, Windsurf).

**Adotar:** fórum próprio, courses, examples e skills para coding agents
como topo de funil — são padrões de categoria, não expressão protegida.
**Adaptar:** comunidade FGSS deve valorizar evidência e governança, não só
velocidade. Courses com certificação em invariantes e capability proven,
não em "how to build a crew in 60s".
**Evitar:** copiar nomes de courses, copy de landing pages, dados de
membros ou estrutura do fórum Discourse do CrewAI.

## Backlog priorizado (adaptado do blueprint TheFounderOS)

| Prioridade | Entrega | Dependência | Métrica |
| --- | --- | --- | --- |
| P0 | schemas de state machine/invariant/evidence (F1) | FGSS Brain | 100% das transições testadas |
| P0 | status de capability em cinco níveis (F2) | Pivô | zero falso "conectado" |
| P0 | provenance + claim promotion (F4) | Brain/Absorber | zero claim pendente usado como fato |
| P0 | orçamento de autonomia compartilhado por crew (F2) | Pivô | zero runaway spend |
| P1 | cockpit de exceções com lineage (F3) | repo FGSS.io | 100% de números com lineage |
| P1 | simulador e approval gate (F3) | Pivô | zero write fora da policy |
| P1 | DLQ/replay/rollback visível (F3) | Pivô | recuperação medida por classe |
| P1 | consent ledger e privacidade-by-design | gates | telemetria opt-in com finalidade |
| P1 | egress allowlist e credential broker (F2) | Pivô | zero exfiltração por tool |
| P2 | SDK de blueprints (F5) | todos | novo domínio sem fork do core |
| P2 | integração OTel com 17+ backends (F3) | repo FGSS.io | traces exportáveis |
| P2 | MCP/A2A com threat model por connector (F2) | Pivô | cada connector com owner e risco |
| P2 | CLI scaffolding e Skills para coding agents (F5) | repo FGSS.io | demo vertical em <60s com provas |
| P2 | value ledger | cockpit | horas/receita associadas a evidência |

## O que ainda não havia sido explicitado (herdado + CrewAI-specific)

- Threat model para prompt injection vindo de conhecimento absorvido e de
  tools MCP/A2A (CrewAI não demonstra publicamente).
- Isolamento de tenant e segregação de credenciais (thread 7705 pede como
  sidecar; FGSS deve ter como produto).
- Consentimento, retenção, exportação e exclusão de dados (telemetria
  default-on do CrewAI não demonstra isso).
- Validade temporal e supersessão de fatos (F4).
- Orçamento de autonomia por risco, dinheiro e reversibilidade (thread
  7726 — "shared spend ceiling que ninguém respeita").
- Idempotência, concorrência, replay e compensação de ações.
- Métrica de valor verificável, não apenas atividade de agente.
- Acessibilidade, latência, custo por execução e SLOs.
- Supply-chain/licenças de conectores, templates e ativos.
- Portabilidade: exportar contexto, regras, memória e evidências sem
  lock-in (contraponto ao `project_id` OSS→enterprise do CrewAI).

Esses itens são onde o FGSS pode ultrapassar o CrewAI de forma defensável —
não em cadência de release, mas em governança e prova.
