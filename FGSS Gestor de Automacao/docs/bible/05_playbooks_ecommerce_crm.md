# Capítulo 5: Playbooks de Automação para E-commerce e CRM

Este capítulo abrange a integração de fluxos transacionais de comércio eletrônico físico e a sincronização de dados com ferramentas de relacionamento (CRM).

---

## 1. Integração de Pipeline e Sincronização de CRM

Nenhum lead deve existir apenas no canal de atendimento (WhatsApp/Instagram). Os dados de contato, tags e estágio do funil devem estar sincronizados com o CRM central (Active Campaign, HubSpot, Pipedrive):

```text
  ┌─────────────────────────────────────────────────────────────┐
  │                 Sincronização de Estados                    │
  └──────────────────────────────┬──────────────────────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
  Ação do Lead           Disparo Webhook          Ação no CRM
  - Clica no link        - Manychat envia         - Move card para "Quente"
  - Responde oferta        payload para o CRM     - Adiciona Tag de Interesse
```

### Regras de Sincronização:
* **Gatilho de Interação:** Se o lead clica em um link de proposta comercial enviado pelo WhatsApp, o Manychat dispara um webhook que move o Card do lead no CRM para a coluna **"Proposta Visualizada"** e atribui a tag `PROPOSTA_LIDA`.
* **Gatilho de Compra:** Quando a compra é aprovada, a automação remove tags de recuperação de vendas (ex: `BOLETO_GERADO`) e aplica a tag `ALUNO_ATIVO`, movendo o lead para a coluna de **"Clientes"** no CRM e parando os envios de cobrança automaticamente.

---

## 2. Playbook de E-commerce Físico

O foco em e-commerce é manter o cliente informado para reduzir a ansiedade de compra e o volume de suporte do SAC.

### A. Rastreamento e Logística
1. **Trigger:** Evento de `order_shipped` (pedido enviado) da plataforma de e-commerce (Shopify, Nuvemshop, WooCommerce).
2. **Ação:** O webhook dispara uma mensagem automática no WhatsApp do cliente informando o código de rastreamento dos Correios/transportadora e o link direto de consulta.
3. **Trigger de Entrega:** Evento de `order_delivered`. Envia mensagem celebrando a chegada do produto e solicitando uma foto/story marcando a marca no Instagram em troca de frete grátis na próxima compra.

### B. Solicitação de Reembolso Simplificada
* **O Problema:** Clientes abrindo disputas (chargebacks) diretamente no banco por falta de suporte rápido da empresa.
* **A Solução:** Criar um fluxo de "Reembolso Facilitado" via WhatsApp.
  * O cliente digita `REEMBOLSO` ou escolhe a opção no menu.
  * O fluxo solicita o número do pedido e o motivo de forma amigável.
  * Um webhook envia os dados para uma planilha do Google ou painel admin, notificando o suporte humano para aprovação imediata em 1 clique, evitando o chargeback prejudicial para a conta do gateway.
