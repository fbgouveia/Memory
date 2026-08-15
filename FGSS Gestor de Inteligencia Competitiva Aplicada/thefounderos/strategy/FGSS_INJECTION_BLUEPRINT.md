# Blueprint de incorporação no FGSS.io

## Resultado pretendido

Converter os melhores princípios observados em uma camada original do FGSS:
um cockpit empresarial em que conhecimento tem proveniência, decisões têm
máquinas de estado, ações têm autorização e todo resultado tem prova.

Não foi encontrado um repositório local chamado `FGSS.io`. A implementação deve
ser distribuída pelos componentes já identificados — FGSS Brain, Knowledge
Absorber e Gestor de Automação/Pivô — e depois conectada ao frontend do produto
quando sua fronteira estiver disponível.

## Arquitetura alvo

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

## Modelo canônico proposto

Cada “OS” ou blueprint precisa versionar:

- `context`: empresa, objetivo, owner, escopo e fonte;
- `entities`: objetos e relações do domínio;
- `states`: estado inicial, terminais e transições permitidas;
- `invariants`: pré-condição, mensagem, severidade e teste;
- `derived_fields`: valor, eventos-fonte e regra de cálculo;
- `capabilities`: leitura/escrita, conector, permissão e idempotência;
- `autonomy`: nível 0–4 por ação, limite financeiro e aprovação;
- `evidence`: input hash, execução, output, timestamp e validade;
- `observability`: SLI, alerta, DLQ, replay e rollback;
- `privacy`: finalidade, consentimento, retenção e residência;
- `evaluation`: fixture, teste de contrato e métrica de negócio.

## Fases

### F0 — Registro de verdade (agora)

Ingerir este dossiê como fonte concorrencial, não como memória factual do
negócio do Felipe. Preservar URL, data, hash, licença e rótulo
`external_competitor`. Aceite: nenhuma alegação promocional promovida a fato.

### F1 — Invariant Engine

Criar schema e validador de máquinas de estado no FGSS Brain. Começar com três
provas: conteúdo, venda e automação. Cada transição recusada deve explicar a
regra e registrar evidência. Aceite: testes de caminho feliz, transição ilegal,
idempotência e concorrência.

### F2 — Capability Registry no Pivô

Estender o catálogo atual para distinguir `advertised`, `implemented`,
`configured`, `healthy` e `proven`. Vincular cada ação a leitura/escrita,
credencial, sandbox, owner, risco, aprovação e rollback. Aceite: nenhuma luz
verde sem healthcheck e prova recente.

### F3 — Cockpit de exceções

Construir a interface original sobre contratos, não sobre mock. Mostrar estado,
próximo gate, invariantes, dados derivados, validade e divergências. A ação
escrita gera plano/simulação e entra no Pivô. Aceite: todo número abre sua
linhagem; toda ação abre sua trilha.

### F4 — Memory Promotion

Alinhar FGSS Brain a `source → signal → claim → fact → memory`, acrescentando
confiança, validade temporal, conflito, revisor e supersessão. Aceite: agente
não usa claim pendente como fato e consegue explicar a origem da memória.

### F5 — Blueprint SDK e onboarding

Empacotar Creator/CRM/Finance como primeiros blueprints originais, baseados em
necessidades universais, não no código visual do concorrente. Fornecer modo
demo, wizard de conexão, fixtures e score de prontidão. Aceite: instalação sem
credenciais funciona como simulação claramente rotulada; conexão real substitui
o provider sem alterar a UI.

## Backlog priorizado

| Prioridade | Entrega | Dependência | Métrica |
| --- | --- | --- | --- |
| P0 | schemas de state machine/invariant/evidence | FGSS Brain | 100% das transições testadas |
| P0 | status de capability em cinco níveis | Pivô | zero falso “conectado” |
| P0 | provenance + claim promotion | Brain/Absorber | zero claim pendente usado como fato |
| P1 | cockpit de exceções | repo FGSS.io | 100% de números com lineage |
| P1 | simulador e approval gate | Pivô | zero write fora da policy |
| P1 | DLQ/replay/rollback visível | Pivô | recuperação medida por classe |
| P2 | SDK de blueprints | todos | novo domínio sem fork do core |
| P2 | value ledger | cockpit | horas/receita associadas a evidência |

## O que ainda não havia sido explicitado

- Threat model para prompt injection vindo de conhecimento absorvido.
- Isolamento de tenant e segregação de credenciais.
- Consentimento, retenção, exportação e exclusão de dados.
- Validade temporal e supersessão de fatos.
- Orçamento de autonomia por risco, dinheiro e reversibilidade.
- Idempotência, concorrência, replay e compensação de ações.
- Métrica de valor verificável, não apenas atividade de agente.
- Acessibilidade, latência, custo por execução e SLOs.
- Supply-chain/licenças de conectores, templates e ativos.
- Portabilidade: exportar contexto, regras, memória e evidências sem lock-in.

Esses itens são onde o FGSS pode ultrapassar o concorrente de forma defensável.
