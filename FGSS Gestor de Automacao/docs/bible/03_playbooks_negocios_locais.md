# Capítulo 3: Playbooks de Automação para Negócios Locais

Negócios locais perdem vendas diariamente devido à lentidão no atendimento humano. Este playbook detalha as automações de alto valor prático para esse nicho.

---

## 1. Estrutura de Atendimento por Setor

A organização do atendimento automático deve imitar a triagem de uma recepção física:

```text
                  ┌──────────────────────────────────────────────┐
                  │          WhatsApp Principal da Empresa       │
                  └──────────────────────┬───────────────────────┘
                                         │
            ┌────────────────────────────┼────────────────────────────┐
            ▼                            ▼                            ▼
      Setor Comercial             Agendamento / Clínica       Dúvidas / Endereço
      - Cardápio/Preços           - Calendário integrado      - Horário de funcionamento
      - Ofertas especiais         - Envio de lembretes        - Link de localização
```

* **Setor Comercial / Vendas:** Fluxo rápido com exibição de produtos, serviços e botões de compra.
* **Agendamento / Consultas:** Integração do WhatsApp com ferramentas de calendário (ex: Cal.com, Calendly) para o cliente marcar seu próprio horário.
* **Informações Básicas:** Respostas imediatas e automáticas para dúvidas repetitivas (como endereço, horário de funcionamento e formas de pagamento).

---

## 2. Gatilhos de Atração de Clientes (Triggers locais)

A entrada do cliente no funil de atendimento pode ser ativada por múltiplos gatilhos:

### A. Gatilho Físico: QR Code
* **Como funciona:** Um QR Code impresso em mesas, cardápios, vitrines ou balcões.
* **Ação:** O cliente escaneia o QR Code com a câmera do celular. O link abre o WhatsApp da empresa com uma mensagem pré-preenchida (ex: `Olá, gostaria de ver as promoções de hoje!`).
* **Resultado:** O chatbot reconhece o texto e dispara instantaneamente o fluxo de cupom ou fidelidade, capturando o contato do cliente.

### B. Gatilho Digital: Palavras-chave em Comentários (Instagram Manychat)
* **Como funciona:** O cliente publica um post ou story convidando a audiência a comentar uma palavra-chave.
* **Configuração Manychat:** Gatilho ativado quando alguém comenta `PREÇO`, `CUPOM` ou `QUERO` nas publicações ou stories.
* **Resultado:** O Manychat envia automaticamente uma mensagem privada no Direct do usuário com o link do cardápio, agendamento ou cupom de desconto.

### C. Gatilho de Posicionamento: Google Meu Negócio
* **Como funciona:** Integração via webhook do Google para enviar uma mensagem automatizada de agradecimento no WhatsApp do cliente após ele realizar uma compra.
* **Ação:** O fluxo envia uma mensagem carinhosa com o link direto para o cliente avaliar a empresa no Google Meu Negócio em troca de um benefício (ex: desconto na próxima visita).
* **Resultado:** Aumento rápido do posicionamento local e atração orgânica de mais clientes.

---

## 3. Modelo de Cronograma de Entrega

O segredo de vender para negócios locais é a rapidez na entrega e a simplicidade técnica:

| Fase | Ação | Prazo |
|---|---|---|
| **Fase 1: Alinhamento** | Coleta de dados (horários, cardápios, links) e copies iniciais. | Dia 1 |
| **Fase 2: Construção** | Criação do fluxo de triagem e integrações no Manychat/Plataforma. | Dias 2 a 4 |
| **Fase 3: Testes** | Homologação em ambiente Sandbox (simulação de cliente real). | Dia 5 |
| **Fase 4: Deploy** | Conexão do número oficial do cliente e treinamento básico da equipe. | Dia 6 |
| **Fase 5: Entrega** | Assinatura de conclusão e início da observabilidade. | Dia 7 |
