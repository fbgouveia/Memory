# Capítulo 2: Lâmina de Contingência, Filas & BullMQ

A tolerância a falhas é o pilar que diferencia soluções amadoras de arquiteturas profissionais. Webhooks de pagamento ou sincronizações de estado não podem ser perdidos caso um serviço de destino ou banco de dados enfrente lentidão.

---

## 1. Controle de Retentativas e Jitter (BullMQ)

A ocorrência de falhas em conexões externas de rede (APIs fora do ar) exige um controle inteligente de reenvio. Disparar retentativas sequenciais imediatas satura o serviço de destino.

### Lógica de Exponential Backoff com Jitter:
* **Fórmula de Atraso:**
  $$D = \text{delay} \times 2^{\text{attempts}} \pm \text{Jitter}$$
* **O Jitter:** Consiste em adicionar uma variação aleatória de tempo (ex: de $\pm 500\text{ms}$) ao cálculo do delay para evitar que milhares de tarefas agendadas tentem fazer o retry exatamente no mesmo milissegundo, gerando um ataque de negação de serviço acidental.
* **Configuração no BullMQ:**
  ```javascript
  const queueOptions = {
    defaultJobOptions: {
      attempts: 5,
      backoff: {
        type: 'exponential',
        delay: 1000 // Inicia com 1s, duplica a cada tentativa
      }
    }
  };
  ```

---

## 2. Chaves de Idempotência — `#IDEMPOTENCY-KEY-CHECK`

Toda ação transacional (como enviar uma transação de Pix ou efetuar uma cobrança) deve ser protegida por uma chave de idempotência para evitar execuções duplicadas durante o reenvio de tarefas falhas.

### Algoritmo de Validação no Redis:
```javascript
async function processarTransacao(idempotencyKey, payload) {
  // NX = Apenas insere se não existir; EX = Expira em 24h
  const lock = await redis.set(idempotencyKey, 'processing', 'NX', 'EX', 86400);
  
  if (!lock) {
    throw new Error('Erro: Requisição duplicada em processamento.');
  }
  
  try {
    const resultado = await executarCobrança(payload);
    await redis.set(idempotencyKey, JSON.stringify({ status: 'done', data: resultado }), 'EX', 86400);
    return resultado;
  } catch (err) {
    await redis.del(idempotencyKey); // Libera a chave para nova tentativa
    throw err;
  }
}
```

---

## 3. Lâmina de Contingência: Fila de Erros (Dead Letter Queue) — `#BULLMQ-DLQ-FLOW`

Quando uma tarefa esgota todas as tentativas de reenvio configuradas sem sucesso, ela não deve ser descartada nem re-executada em loop infinito. Ela deve ser movida para a Lâmina de Contingência (DLQ).

```text
       [ Entrada Webhook ]
               │
               ▼
         [ Fila Principal ] ──► (Sucesso) ──► Processado
               │
           (Falhou 5x)
               │
               ▼
   [ Dead Letter Queue (DLQ) ]
               │
       ┌───────┴───────┐
       ▼               ▼
  Alerta Slack      Auditoria Humana / Reprocessar
```

### Event Listener para Fila DLQ:
```javascript
const worker = new Worker('FilaPrincipal', async job => {
  // Lógica de integração aqui
}, { connection: redisConnection });

worker.on('failed', async (job, err) => {
  // Verifica se todas as tentativas se esgotaram
  if (job.attemptsMade >= job.opts.attempts) {
    console.error(`Tarefa ${job.id} falhou definitivamente. Movendo para DLQ. Erro: ${err.message}`);
    
    // Insere na fila de contingência para análise técnica
    await dlqQueue.add('tarefa_falha', {
      originalJobId: job.id,
      originalQueue: job.queueName,
      payload: job.data,
      errorStack: err.stack,
      failedAt: new Date().toISOString()
    });
    
    // Aciona webhook de telemetria do MAIN BRAIN
    await dispararAlertaIntegracao(job.id, err.message);
  }
});
```

* **Graceful Shutdown:** Antes de o processo Docker ser terminado, o trabalhador deve executar `await worker.close()` para finalizar as tarefas em execução e evitar o status de jobs órfãos (stalled) no Redis.

---

## 4. Prevenção e Resolução de Tarefas Travadas (Stalled Jobs)

Em BullMQ, uma tarefa travada (stalled) ocorre quando um trabalhador (worker) assume a tarefa mas para de responder ou de atualizar o bloqueio (lock heartbeat) no Redis.

### A. Causas Comuns em 2026:
* **Bloqueio do Event Loop:** Node.js é single-threaded. Computações síncronas pesadas (como loops extensos ou criptografia no thread principal) travam o event loop, impedindo o worker de enviar o heartbeat de renovação de trava para o Redis.
* **Terminações Abruptas:** Desligamentos bruscos do contêiner Docker durante deploys sem o tratamento correto de sinais do sistema.

### B. Boas Práticas de Resolução:
1. **Processadores Isolados (Sandboxed Processors):** Para processamento de arquivos pesados, criptografia ou IA, use processadores sandboxed. BullMQ executará a tarefa em um processo Node child isolado, mantendo o thread principal do worker livre para renovar a trava.
2. **Graceful Shutdown (SIGTERM/SIGINT):** Trate desligamentos sistematicamente:
   ```javascript
   const worker = new Worker('FilaPrincipal', processadorPath);
   
   async function shutdown() {
     console.log('Fechando worker graciosamente...');
     await worker.close(); // Conclui tarefas ativas e rejeita novas
     process.exit(0);
   }
   
   process.on('SIGTERM', shutdown);
   process.on('SIGINT', shutdown);
   ```
3. **Escuta do Evento `stalled`:**
   ```javascript
   queueEvents.on('stalled', ({ jobId }) => {
     console.warn(`Alerta: Tarefa ${jobId} travou e foi reinserida na fila.`);
   });
   ```

---

## 5. Política de Memória do Redis & Limpeza Automática de Filas

Por padrão, instâncias de cache do Redis utilizam políticas de despejo (como `volatile-lru` ou `allkeys-lru`) para liberar memória apagando chaves antigas. **Para BullMQ, isso é fatal.**

### A. Política `noeviction` Obrigatória:
Se o Redis atingir o limite de memória e apagar um metadado de fila, uma trava (lock) ou o payload de uma tarefa ativa, a fila se corromperá, gerando a perda definitiva de mensagens transacionais.
* **Regra:** O Redis das filas de automação deve ser isolado (não compartilhado com cache do site) e configurado com a política:
  ```ini
  maxmemory-policy noeviction
  ```

### B. Limpeza Automática de Jobs (removeOnComplete/removeOnFail):
Como o Redis não liberará memória automaticamente (`noeviction`), é dever do código cliente limpar as tarefas finalizadas para evitar o estouro de memória física.
* **Configuração Recomendada no BullMQ:**
  ```javascript
  const jobOptions = {
    // Mantém no histórico apenas as últimas 100 tarefas concluídas ou das últimas 24 horas
    removeOnComplete: {
      count: 100,
      age: 24 * 3600 // 24 horas em segundos
    },
    // Mantém as últimas 1000 falhas para auditoria por até 7 dias
    removeOnFail: {
      count: 1000,
      age: 7 * 24 * 3600 // 7 dias
    }
  };
  
  await myQueue.add('nome_tarefa', payload, { removeOnComplete: jobOptions.removeOnComplete, removeOnFail: jobOptions.removeOnFail });
  ```


