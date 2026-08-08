# Capítulo 5: Resiliência Avançada, LGPD & Circuit Breakers

A alta inteligência aplicada a automações corporativas exige proteções adicionais contra limites de taxa de APIs externas (Rate Limits), vazamento de dados confidenciais nos logs e prevenção de desperdício de CPU durante quedas prolongadas de serviços externos.

---

## 1. Mascaramento de Logs para LGPD (PII Masking)

Quando uma tarefa falha e é enviada para o banco de dados de logs ou para a Dead Letter Queue (DLQ), o payload original da requisição costuma ser armazenado para auditoria técnica. 
Se este payload contiver dados pessoais sensíveis (PII - CPF, telefones, senhas, e-mails ou corpos de mensagens), a empresa estará violando a **LGPD (Lei Geral de Proteção de Dados)**.

### Filtro de Sanitização Pré-Persistência:
Antes de gravar qualquer dado em logs permanentes ou DLQs, passe o objeto de erro e o payload por uma função limpadora de chaves:
```javascript
const CHAVES_SENSIVEIS = ['senha', 'password', 'token', 'cpf', 'telefone', 'cartao', 'credit_card', 'body'];

function mascararDadosSensiveis(objeto) {
  if (typeof objeto !== 'object' || objeto === null) return objeto;
  
  const objetoSanitizado = Array.isArray(objeto) ? [] : {};
  
  for (const [chave, valor] of Object.entries(objeto)) {
    if (CHAVES_SENSIVEIS.includes(chave.toLowerCase())) {
      objetoSanitizado[chave] = '[REDACT_LGPD_COMPLIANT]';
    } else if (typeof valor === 'object') {
      objetoSanitizado[chave] = mascararDadosSensiveis(valor);
    } else {
      objetoSanitizado[chave] = valor;
    }
  }
  return objetoSanitizado;
}
```

---

## 2. Padrão Circuit Breaker (Disjuntor de Conexão)

Se um serviço externo de destino (como o CRM do cliente ou o WhatsApp Cloud API) ficar fora do ar por 4 horas, o BullMQ continuará processando e reenviando milhares de tarefas ativas em loop de backoff. Isso desperdiçará recursos de CPU do Docker, conexões com o banco de dados e tráfego de rede.

### O Padrão de Disjuntor:
* **Fechado (Closed):** Estado normal. As tarefas rodam e as chamadas externas acontecem.
* **Aberto (Open):** Trip de proteção. Se ocorrerem 5 falhas consecutivas de conexão (como HTTP 503/504), o disjuntor abre. As novas tarefas da fila falham imediatamente no código do worker por 5 minutos, sem tentar chamar a API externa, economizando tráfego e CPU.
* **Meio-Aberto (Half-Open):** Após 5 minutos, tenta enviar 1 única tarefa. Se tiver sucesso, fecha o disjuntor; se falhar, abre por mais 5 minutos.

```text
               ┌──► [ Falha consecutiva > 5 ] ──► [ DISJUNTOR ABERTO ]
               │                                         │
               │                                     (Espera 5m)
               │                                         │
       [ DISJUNTOR FECHADO ] ◄─── (Sucesso) ─── [ DISJUNTOR MEIO-ABERTO ]
```

---

## 3. Limitadores de Taxa no Lado do Cliente (BullMQ Rate Limiting)

As APIs do WhatsApp Meta, CRMs e ERPs possuem limites estritos de requisições por segundo (ex: Meta permite 80 mensagens/segundo no nível básico). Se subirmos 10 contêineres Docker com 10 workers de concorrência cada, eles estourarão esse limite, gerando erros HTTP 429 (Too Many Requests).

### Configuração de Token Bucket no BullMQ:
Gerencia a liberação de jobs no lado do cliente de acordo com o limite do destinatário:
```javascript
const worker = new Worker('FilaWhatsApp', processadorPath, {
  connection: redisConnection,
  limiter: {
    max: 80,         // Limite máximo de requisições
    duration: 1000   // Por janela de tempo (1000ms = 1 segundo)
  }
});
```

---

## 4. Health Checks Ativos no Docker Compose

Para garantir que um contêiner travado por falta de conexões com o Redis ou Postgres seja reiniciado automaticamente pela orquestração do servidor sem intervenção humana.

### Liveness Probe no `docker-compose.yml`:
```yaml
services:
  n8n_integrator:
    image: docker.n8n.io/n8nio/n8n:latest
    # ... configurações anteriores
    healthcheck:
      test: ["CMD-SHELL", "curl -f http://localhost:5678/healthz || exit 1"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 20s
```
