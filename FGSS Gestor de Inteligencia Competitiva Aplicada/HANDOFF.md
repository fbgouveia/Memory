# Handoff — FGSS Gestor de Inteligência Competitiva Aplicada

Vertente de memória da FGSS.io. Absorve conhecimento, destila princípios e
produz requisitos originais para o produto FGSS.io.

---

## Estado atual — 16 de agosto de 2026 (fim de sessão)

### Dossiê TheFounderOS (1º concorrente)

- **Local**: `FGSS OS/` (467 arquivos, baseline 15/08/2026, audit PASS).
- **Lacunas de absorção pendentes**: JSON-LD/SEO, preços/garantias, BENNETT
  OS/Heuresis, 4 workspaces/personas, 14+ OS licenciados não capturados.
  Sem rede externa — usar HTMLs já em disco.

### Dossiê CrewAI (2º concorrente)

- **Local**: `competitors/crewai/` (26.369 arquivos repo + 449 páginas site,
  baseline 16/08/2026, audit PASS, 0 erros).
- **Knowledge**: 11 arquivos (TECHNICAL_ARCHITECTURE, PRODUCT_AND_MARKET,
  COMPETITOR_INTELLIGENCE_MODEL, 5 site distillations, 3 ecosystem).
- **Strategy**: 6 arquivos (COMPETITIVE_ANALYSIS, FGSS_BATTLECARD,
  TECHNOLOGY_MATURITY_SCORECARD, THREAT_SCENARIOS, FGSS_INJECTION_BLUEPRINT,
  CHANGE_MONITOR).
- **Bugs corrigidos**: path collision no coletor, LICENSE check flexível.

### Fundação FGSS.io (especificação)

- **Estado**: PRÉ-IMPLEMENTAÇÃO. Repo localizado: é privado em
  `fbgouveia/Felipe-Portfolio` (GitHub), em outro computador. Sem auth
  neste ambiente — precisa gh CLI ou token para ler conteúdo.
- **Backlog**: F1-F5 detalhados em `foundation/AGENTS.md`.
- **Visuais F1-F5**: padrões destilados em
  `FGSS OS/knowledge/site/VISUAL_AND_INTERACTION_PATTERNS.md` (1053 linhas).
  Implementação bloqueada até repo acessível. Registrado em `PENDENCIAS.md`.

### Pesquisas (a iniciar)

- `research/` criado mas vazio. Protocolo definido em `research/AGENTS.md`.

---

## Próximos passos

1. Fechar lacunas de absorção do TheFounderOS (sem rede externa).
2. Iniciar primeira pesquisa original em `research/`.
3. Avançar F1-F5 como spec executável (schemas + testes de contrato).
4. Configurar auth para repo `fbgouveia/Felipe-Portfolio` (gh CLI ou token)
   e começar implementação.

## Commits da sessão

- `ab6615c` — fundação do gestor + renomear thefounderos/ → FGSS OS/
- `a58d6a4` — dossiê CrewAI baseline
- `a3b0259` — CrewAI site knowledge distillation
- `8237c9b` — registros globais atualizados
- `b59d59a` — fix 2 bugs (path collision + LICENSE)
- `20664d4` — 2 bugs CrewAI corrigidos, audit pass
- `c69b2ed` — handoff do gestor atualizado

## Guardrails finais

- O FGSS.io supera por governança, evidence graph, execução comprovada e
  valor auditável — não por quantidade de agentes, logos ou claims.
