# Progresso — FGSS Gestor de Automacao

Atualizado em: 09 ago 2026.

## Sessão: testes físicos de quebra de infraestrutura (aut-teste-contingencia)

**Objetivo:** concluir a pendência de testes físicos de quebra — derrubar Redis
durante envio massivo e auditar integridade de logs e DLQ.

### Decisão arquitetural (VLAEG — contrato antes do código)
- **DLQ dual:** Redis primário + JSONL append-only local como fallback.
- Se Redis cair, o payload sanitizado sobrevive em `.tmp/dlq_fallback.jsonl`.
- Auditoria consolida Redis + JSONL.
- Postgres fica fora deste ciclo (pendência fala "Redis OU Postgres"; Redis basta).

### O que foi feito
1. Criado `integrations/aut-teste-contingencia/src/dlq.js` — módulo DLQ dual
   (`persist`, `readAll`, `clear`, `close`). Fallback JSONL via stdlib `fs`.
2. Criado `integrations/aut-teste-contingencia/src/test_chaos_break.js` — teste
   de quebra física massivo (200 jobs, `docker stop` forçado do Redis mid-run,
   auditoria de integridade + fase 2 isolada de fallback JSONL).
3. Atualizado `src/worker.js` para usar DLQ dual (removeu TODO).
4. Atualizado `tools/scaffold/scaffold_project.py` — propaga `dlq.js`, worker
   dual, `__test_mask` no logger, `dlq_mode: dual_redis_jsonl` no manifest.
5. Atualizado `automation-manifest.json` com contingência dual.

### Resultados dos testes (prova)
- `test_recovery_flow.js`: APROVADO — DLQ + mascaramento LGPD em job isolado.
- `test_chaos_break.js`: APROVADO — ambas as fases.
  - Fase 1 (integridade pós-queda): 200/200 jobs processados, 0 perdidos,
    66 no DLQ Redis, 0 duplicatas, PII mascarado, IDs preservados.
  - Fase 2 (fallback JSONL): 3/3 registros gravados no JSONL com Redis down,
    PII mascarado, IDs preservados.

### Pendências restantes
- Ativação do MAIN BRAIN em produção (VPS/Vercel/Docker) — fora do escopo
  deste repositório; depende do Felipe configurar envs reais.
- Piloto de 7 dias + retenção/agregação/custos — depende do piloto rodar.
