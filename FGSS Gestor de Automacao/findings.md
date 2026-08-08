# Descobertas — FGSS Gestor de Automacao

Registra o que foi aprendido sobre a stack/plataforma e não estava escrito em
lugar nenhum. É o ativo mais caro de reconstruir.

## BullMQ + ioredis: armadilhas de teste de quebra física

### 1. `maxRetriesPerRequest: null` é obrigatório no BullMQ
Sem isso, o ioredis rejeita comandos após `maxRetriesPerRequest` (default 20)
durante retentativas, quebrando o BullMQ. Já corrigido pela LLM anterior em
`worker.js` e `scaffold_project.py`.

### 2. `enableOfflineQueue: false` causa OOM no worker durante queda do Redis
Quando o Redis cai, o BullMQ entra num loop apertado de `moveToActive` que
lança `Error: Stream isn't writeable and enableOfflineQueue options is false`.
Cada iteração loga o stack completo no console. Com volume massivo, as
strings de stack acumulam como `ConsString` e o V8 estoura heap (OOM em
`StringCharCodeAt`/`SlowFlatten`) — observado em ~4GB com 300 jobs.

**Solução:** `enableOfflineQueue: true` no worker/queue/events (default).
Comandos enfileiram durante a queda e retomam quando o Redis volta. Sem loop,
sem OOM. Comportamento correto e desejado.

### 3. `enableOfflineQueue: false` SÓ faz sentido na conexão do DLQ
A conexão do `dlq.js` (não do worker) usa `enableOfflineQueue: false` +
`maxRetriesPerRequest: 1` de propósito: se o Redis cair, o `rpush` falha
imediatamente e cai pro fallback JSONL. Esse é o gatilho do fallback dual.

### 4. Conexões internas do BullMQ não herdam listeners de `error`
O BullMQ cria conexões via `ioredis.duplicate()`, que herdam opções mas não
listeners. Sem `.on('error')`, o ioredis imprime `[ioredis] Unhandled error
event` no stderr a cada falha de reconexão. Em volume, também gera ruído/OOM.

**Solução no teste:** monkey-patch `Redis.prototype.duplicate` para adicionar
`.on('error', () => {})` em toda conexão duplicada, mais handlers globais
`unhandledRejection`/`uncaughtException` no-op.

### 5. Jobs órfãos de runs anteriores poluem contadores
Se o Redis não for limpo entre runs, o `queueEvents.on('completed')` conta
jobs de testes anteriores (ex: completed=54 para 30 jobs enfileirados).

**Solução:** `await queue.obliterate({ force: true })` + `await queue.drain()`
antes de enfileirar, além de `dlq.clear()`.

### 6. Timing do kill durante envio massivo
Com rate limit 80/s, 30 jobs processam em <0.5s — o `docker stop` às 1200ms
chega tarde demais (tudo já processado). Para o kill pegar no meio:
- Volume >= 200 jobs.
- Rate limit do worker reduzido (20/s) para o processamento durar ~10s.
- Kill em ~1500ms, revive em ~4500ms.

### 7. `docker start` não significa "Redis respondendo"
O container sobe mas o redis-server precisa ~0.5-1s para aceitar conexões.
O `docker exec ... redis-cli ping` com retry é necessário antes de declarar
o Redis restaurado.

### 8. DLQ dual: quando o JSONL é (e não é) acionado
Com `enableOfflineQueue: true` no worker, jobs retomam após o Redis voltar e
o `dlq.persist` roda com Redis UP → vai pro Redis, não pro JSONL. O JSONL só
dispara quando o `dlq.persist` é chamado com Redis efetivamente down. Para
PROVAR o fallback, é preciso uma fase isolada que chame `dlq.persist` direto
com Redis down (sem o offline queue do BullMQ no caminho).

## Docker local
- Container Redis do projeto: `redis_aut-teste-contingencia` (porta 6379 host).
- `docker stop` é limpo (SIGTERM → shutdown gracioso com AOF sync).
- O OOM do node não derruba o container Redis; o `finally` do teste deve
  sempre chamar `dockerStart()` para não deixar o Redis parado.
