# HANDOFF — FGSS Gestor de Automacao

Última atualização: 09 ago 2026 (sessão: testes físicos de quebra).

## Pendências em aberto
1. **Ativação MAIN BRAIN em produção** (pendência 2 da lista original):
   - Configurar `SUPABASE_SERVICE_ROLE_KEY` e `FGSS_MAIN_BRAIN_SECRET` no
     ambiente real do Admin (VPS/Vercel/Docker). **Requer acesso ao ambiente
     de produção do Felipe — não executável sem credenciais/deploy access.**
   - Conectar um subprojeto piloto de automação ao MAIN BRAIN e observar 7
     dias. **Requer decisão de qual piloto + tempo de observação.**
   - Definir retenção, agregação de custos e alertas baseado no volume real
     do piloto. **Depende do piloto rodar.**
2. Commit/push das mudanças desta sessão (não feito — aguardando OK do Felipe).

## Atualizações desta sessão
- Implementada **DLQ dual** (Redis + JSONL fallback) em
  `integrations/aut-teste-contingencia/src/dlq.js`.
- Criado `src/test_chaos_break.js` — teste de quebra física massivo.
- `src/worker.js` usa DLQ dual (TODO removido).
- `tools/scaffold/scaffold_project.py` propaga DLQ dual + `__test_mask` +
  `dlq_mode: dual_redis_jsonl` no manifest.
- `automation-manifest.json` reflete contingência dual.
- Criados `progress.md` e `findings.md` (memória do projeto).
- `PENDENCIAS.md` (raiz CÉREBRO): item de teste de quebra marcado [x].
- `ATUALIZACOES.md` (raiz CÉREBRO): prova registrada em 09/08/2026.

## Descobertas (ativo caro de reconstruir — ver findings.md para detalhe)
1. `maxRetriesPerRequest: null` é obrigatório no BullMQ (já corrigido).
2. `enableOfflineQueue: false` no worker causa OOM (loop "Stream isn't
   writeable" com stacks acumulando). Usar `true` (default) no worker.
3. `enableOfflineQueue: false` SÓ faz sentido na conexão do DLQ (`dlq.js`)
   para forçar fallback JSONL imediato.
4. `ioredis.duplicate()` não herda listeners de `error` — monkey-patch
   `Redis.prototype.duplicate` no teste para suprimir "Unhandled error event".
5. Limpar fila (`queue.obliterate` + `queue.drain`) entre runs senão jobs
   órfãos poluem contadores.
6. `docker start` ≠ Redis respondendo; usar `redis-cli ping` com retry.
7. JSONL só é acionado quando `dlq.persist` roda com Redis efetivamente down
   (fase 2 isolada do teste prova isso).

## Arquivos tocados
- `integrations/aut-teste-contingencia/src/dlq.js` (novo)
- `integrations/aut-teste-contingencia/src/test_chaos_break.js` (novo)
- `integrations/aut-teste-contingencia/src/worker.js` (editado)
- `integrations/aut-teste-contingencia/src/logger.js` (editado — `__test_mask`)
- `integrations/aut-teste-contingencia/automation-manifest.json` (editado)
- `tools/scaffold/scaffold_project.py` (editado — DLQ dual + `__test_mask`)
- `progress.md`, `findings.md`, `HANDOFF.md` (novos)
- `PENDENCIAS.md`, `ATUALIZACOES.md` (raiz CÉREBRO, editados)

## Como reproduzir a prova
```bash
cd "FGSS Gestor de Automacao/integrations/aut-teste-contingencia"
docker start redis_aut-teste-contingencia
npm install            # se preciso
node src/test_recovery_flow.js      # exit 0 = APROVADO
node --max-old-space-size=256 src/test_chaos_break.js   # exit 0 = APROVADO
```
