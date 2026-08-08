# Capítulo 4: Playbooks de Automação para Infoprodutos

A gestão de automação para infoprodutos (Lançamentos e Perpétuo) foca em duas metas: maximizar o faturamento e recuperar vendas perdidas.

---

## 1. Playbook de Lançamento (Launch Funnel)

O lançamento exige processamento em massa de dados e envios sincronizados em janelas de tempo curtas:

### A. Fluxo de Captação e Redirecionamento
1. O lead insere o e-mail na página de captura.
2. O webhook da página envia os dados para a automação (Active Campaign/Manychat).
3. O lead é taggeado (ex: `LANCAMENTO_AGOSTO_LEAD`) e enviado para a página de obrigado.
4. Na página de obrigado, um botão dinâmico o direciona para o grupo de WhatsApp oficial do lançamento.

### B. O Lembrete de Aula (Janela de 24 Horas)
* **Objetivo:** Abrir a janela de interação de 24 horas no WhatsApp e garantir o comparecimento na CPL1 (Aula 1).
* **Mecanismo:** 24 horas antes do evento, a automação dispara uma mensagem com uma imagem personalizada (ou convite interativo) perguntando se o lead quer receber o aviso direto das aulas.
* **Ação:** O lead clica no botão "Sim, me lembre!". A resposta ativa o opt-in oficial, autorizando o envio de links de aulas subsequentes sem risco de banimento.

---

## 2. Playbook de Recuperação de Vendas (Evergreen/Perpétuo)

A recuperação é acionada por webhooks das plataformas de pagamento (Hotmart, Kiwify, Eduzz, Stripe) e estruturada da seguinte forma:

### `#CARRINHO-ABANDONADO`
* **Trigger:** Evento de `checkout_abandoned` / `cart_abandoned` enviado pela plataforma.
* **Regra de Tempo:** Aguardar exatamente de **15 a 20 minutos** para dar tempo do lead finalizar por conta própria.
* **Mensagem 1 (Leveza & Apoio):**
  > *"Olá, [Nome]! Vi que você tentou realizar a inscrição no curso [Nome do Curso], mas o processo não foi concluído.*
  > *Ficou alguma dúvida sobre o conteúdo, bônus ou formas de pagamento? Responda essa mensagem para eu te ajudar!"*
* **Ação:** Se não houver resposta em 2 horas, envia o link direto de checkout facilitado.

### `#PIX-BOLETO-FOLLOWUP`
* **PIX Gerado:**
  * **Trigger:** Evento de `pix_generated`.
  * **Ação Imediata:** Envia a chave **PIX Copia e Cola** isolada em uma mensagem para facilitar a cópia no celular, acompanhada de instruções de pagamento.
  * **Lembrete de Vencimento:** 4 horas antes do vencimento do Pix, envia um lembrete informando que a vaga e os bônus exclusivos serão liberados para a lista de espera caso o pagamento não ocorra.
* **Boleto Gerado:**
  * **Trigger:** Evento de `billet_generated`.
  * **Ação:** Envia o código de barras digitável e o link para o PDF do boleto.
  * **Lembrete de Vencimento:** Mensagem na manhã do vencimento do boleto e no dia seguinte confirmando o pagamento.

---

## 3. Onboarding e Venda Imediata (Upsell/Cross-sell)

O momento de maior propensão de compra do cliente é imediatamente após ele passar o cartão.

### A. Fluxo de Boas-vindas (Onboarding)
1. **Trigger:** Evento `purchase_approved`.
2. **Disparo:** Envia mensagem no WhatsApp com o link de acesso da área de membros, dados de login (e-mail cadastrado) e um vídeo de boas-vindas do produtor.
3. **Métrica:** Reduz drasticamente o churn e reembolsos nas primeiras 24 horas.

### B. O Cross-sell Silencioso
* 10 minutos após a compra aprovada, a automação envia uma oferta complementar de ticket menor (ex: um e-book, templates ou comunidade VIP) com um cupom de desconto de uso único válido por apenas 24 horas.
