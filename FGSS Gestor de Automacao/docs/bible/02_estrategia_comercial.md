# Capítulo 2: Estratégia Comercial, Vendas e Precificação

Este capítulo detalha a metodologia de vendas, precificação e o framework contratual do Gestor de Automação para fechar e manter clientes de alto valor.

---

## 1. Prospecção e Definição de Clientes

### A. Definição do Cliente Ideal (ICP)
Fugir de clientes que não faturam, pois eles enxergam a automação como custo e não como investimento. Focar em empresas que já têm tráfego, vendas diárias ou leads chegando, mas que estão perdendo dinheiro por falta de rapidez no atendimento ou erros manuais.

### B. Cidades Pequenas vs. Cidades Grandes
* **Cidade Pequena:** A proximidade física é um facilitador de confiança. Apresentar a automação como um "diferencial de cidade grande" para o comércio local (ex: hamburgueria, clínicas) gera um apelo de pioneirismo altamente lucrativo.
* **Cidade Grande:** O foco é otimização de tempo e processos em escala. Prospecções remotas exigem abordagens focadas em provas de ROI e eliminação de falhas de equipe.

---

## 2. Modelagem de Cobrança e Precificação

Para criar um negócio sustentável, dividimos o faturamento em duas forças:

```text
  ┌─────────────────────────────────────────────────────────────┐
  │                 Composição de Precificação                  │
  └──────────────────────────────┬──────────────────────────────┘
                                 │
            ┌────────────────────┴────────────────────┐
            ▼                                         ▼
   Taxa de Implementação                     Mensalidade Recorrente
  - Setup inicial, desenho de fluxos        - Monitoramento, otimizações
  - Pagamento: 50% entrada / 50% entrega    - Suporte, novas estratégias
```

* **Taxa de Implementação (Setup):** Cobre o esforço técnico de construir as integrações, desenhar as telas, configurar webhooks e testar.
* **Mensalidade Recorrente (Retainer):** Garante a saúde das conexões. Se uma API muda ou falha, o gestor atua sem custos adicionais. Também engloba a melhoria contínua de conversão dos fluxos com base em dados reais.

---

## 3. Scripts de Reunião ESTRATÉGICA (SPIN Selling)

### `#SPIN-SELLING-INFOPRODUTOS`
Perguntas para extrair a dor do infoprodutor na reunião comercial:
1. *Situação:* "Quantos infoprodutos você tem hoje na Hotmart/Kiwify? Quais são os tickets e estratégias de venda (lançamento ou perpétuo)?"
2. *Problema:* "Hoje, como funciona a sua recuperação de boleto, Pix gerado e abandono de carrinho? Qual a sua taxa atual de conversão dessas vendas perdidas?"
3. *Implicação:* "Se você deixa de converter 30% dos Pix gerados hoje por falta de um contato rápido, quanto de faturamento isso está tirando do seu caixa no final do mês?"
4. *Necessidade de Solução:* "Se tivéssemos um sistema que envia mensagens automáticas de recuperação de carrinho no WhatsApp em até 5 minutos, integrada a uma oferta de upsell, quanto isso agregaria de resultado na sua operação?"

### `#SPIN-SELLING-LOCAL`
Perguntas para extrair a dor do negócio local (clínicas, lojas, restaurantes):
1. *Situação:* "Como chegam os clientes até você hoje? Pelo Instagram, Google ou indicação? Quem responde o WhatsApp da empresa?"
2. *Problema:* "Consegue responder todos os clientes que chegam no mesmo minuto? Qual o tempo médio de resposta quando a loja está cheia ou fora do horário comercial?"
3. *Implicação:* "Você sabia que a chance de fechar com um cliente cai em 391% se ele demorar mais de 5 minutos para ser respondido? Quantos clientes você acha que vão para o concorrente por causa desse atraso?"
4. *Necessidade de Solução:* "Se criarmos um atendente automático que responde dúvidas de localização, horário, envia o cardápio/agenda e filtra os leads qualificados em tempo real, liberando sua equipe para focar no fechamento, como seria a rotina do seu negócio?"

---

## 4. Ancoragem de Preço e Pitch de Vendas

### `#ANCORAGEM-PITCH`
Script exato a ser utilizado ao final da Call de Vendas para apresentar o valor:

> *"Perfeito, então agora que entendi o seu negócio e vi que sua maior dor é perder leads por demora no atendimento do WhatsApp, vou te apresentar a solução:*
>
> *Nós vamos implementar a triagem automática de leads via Manychat e a automação de pós-venda. Normalmente, o valor de mercado para essa implementação completa de arquitetura é de **R$ 5.000,00** (pagamento único) e uma recorrência mensal de **R$ 2.000,00** para manter as conexões ativas, otimizar fluxos e trazer novas campanhas de vendas.*
>
> *Mas como você está em call comigo hoje e demonstrou total comprometimento para destravar esse faturamento, eu faço uma condição especial de fechamento agora:*
>
> *A implementação fica por **R$ 3.500,00** (50% agora na assinatura e 50% na entrega) e a recorrência mensal por **R$ 1.500,00**.*
>
> *Tirando a questão do valor que acabei de te passar, essa é a solução que você quer para o seu negócio? Como fica melhor o pagamento para iniciarmos: via Pix ou boleto?"*

---

## 5. Minuta Contratual Padronizada

### `#CONTRATO-TEMPLATE`
Abaixo está o modelo legal completo a ser utilizado na prestação de serviços de automação:

```markdown
CONTRATO DE PRESTAÇÃO DE SERVIÇOS

CONTRATADA: [NOME DA SUA EMPRESA/SEU NOME], inscrita no CNPJ/CPF nº [CNPJ/CPF], com sede à [ENDEREÇO COMPLETO].
CONTRATANTE: [NOME DA EMPRESA DO CLIENTE], inscrita no CNPJ nº [CNPJ], representada por [NOME DO REPRESENTANTE], com sede à [ENDEREÇO COMPLETO].

CLÁUSULA PRIMEIRA - OBJETO
1.1 O presente contrato tem por objeto a prestação de serviços profissionais especializados em automações por parte da CONTRATADA de acordo com os termos e especificações descritos no ANEXO I deste instrumento.

CLÁUSULA SEGUNDA - OBRIGAÇÕES DA CONTRATANTE
2.1 Fornecer todas as informações necessárias, bem como copies, criativos e designs para a perfeita consecução das automações.
2.2 Contratar e arcar com os custos de licenciamento das ferramentas necessárias para o funcionamento do sistema (ex: Manychat Pro, API do WhatsApp, Webhooks, Active Campaign).

CLÁUSULA TERCEIRA - OBRIGAÇÕES DA CONTRATADA
3.1 Prestar os serviços conforme descritivo e prazos fixados no ANEXO I.
3.2 Manter absoluto sigilo sobre operações, dados, estratégias e materiais da CONTRATANTE, mesmo após o encerramento da relação contratual (Observância Estrita à LGPD).

CLÁUSULA QUARTA - ALTERAÇÕES E APROVAÇÃO
4.1 A CONTRATADA realizará até 03 (três) alterações em cada fluxo desenhado, com prazo de atendimento de 48 horas.
4.2 A CONTRATANTE tem o prazo de 48 horas para validar e aprovar o fluxo apresentado. A ausência de resposta neste prazo implicará em aprovação tácita.

CLÁUSULA SEXTA - VALORES E FORMA DE PAGAMENTO
6.1 Pela prestação dos serviços objeto deste contrato, a CONTRATANTE pagará à CONTRATADA o valor de R$ [VALOR SETUP] a título de taxa de implementação (sendo 50% na assinatura deste contrato e 50% na conclusão da entrega) e o valor mensal de R$ [VALOR RECORRENTE] a título de manutenção.
6.2 O atraso nos pagamentos acarretará multa contratual de 10% e juros moratórios de 1% ao mês.

CLÁUSULA NONA - ISENÇÃO DE RESPONSABILIDADE FINANCEIRA E BLOQUEIOS
9.1 Por se tratar de atividade de meio e de resultados variáveis, a CONTRATADA não garante nenhum retorno financeiro específico decorrente das automações.
9.2 A CONTRATADA se isenta de responsabilidade civil ou financeira em caso de restrições temporárias ou bloqueios permanentes das contas de Instagram, Facebook Ads, chips de WhatsApp ou plataformas de pagamentos utilizados pela CONTRATANTE, mesmo com o uso de APIs oficiais da Meta.

CLÁUSULA DÉCIMA SEGUNDA - FORO
12.1 As partes elegem o Foro da Comarca de São Paulo para dirimir eventuais controvérsias judiciais deste contrato.

[Local, Data]

____________________________         ____________________________
        CONTRATADA                            CONTRATANTE
```
