# Distribuição, vendas e escada de valor

## Motor observado

```text
Instagram / LinkedIn / GitHub
  conteúdo técnico + números fortes + CTA por palavra-chave
                        ↓
           DM / lead magnet / repo gratuito
                        ↓
       hub gratuito / live training / waitlist
                        ↓
 Typeform (perfil, renda, orçamento, prontidão)
                        ↓
       Calendly + WhatsApp/email + call
                        ↓
  comunidade paga / curso / mentoria / implementação
```

O FounderOS gratuito serve simultaneamente como demonstração técnica, prova de
competência, objeto compartilhável e porta de entrada. A comunidade fornece
pesquisa de mercado recorrente; os problemas encontrados na educação alimentam
a oferta de implantação da Merydian. O próprio fundador descreve publicamente
esse ciclo como educação → problemas → entrega real → novos ensinamentos.

## Escada pública observada

| Degrau | Oferta/superfície | Preço público | Sinal público | Interpretação correta |
| --- | --- | ---: | ---: | --- |
| Atenção | conteúdo Instagram/LinkedIn | grátis | 76K IG; ~2K LinkedIn | alcance, não compradores |
| Prova | FounderOS-DEMO GitHub | grátis/MIT | 511 stars; 138 forks | interesse técnico, não uso produtivo |
| Comunidade | Whop AA Hub | grátis | 2.689 membros | topo/meio de funil |
| Comunidade | Skool Agency Accelerants | US$97/mês | 141 membros | listagem pública; receita ativa não auditada |
| Comunidade | Skool Life Upgrade AI | US$29/mês | 20 membros | oferta adjacente |
| Curso | Agent Accelerator | US$795 | dois membros na página pública | venda observável, volume pequeno na superfície |
| Mentoria | Agency Accelerants 1:1 | não exibido | produto listado | high-ticket provável, preço desconhecido |
| Serviço | Merydian/implantação | proposta | claims de US$5K–50K/deal | serviço consultivo; contratos não observados |

As páginas mudaram durante a pesquisa (por exemplo, o total “joined” da Whop
variou entre 2.719 e 2.721). Por isso, todas as contagens são snapshots e nunca
devem alimentar receita automaticamente.

## Qualificação e roteamento

O waitlist do FounderOS pede nome, email, telefone/WhatsApp opcional, nível de
IA, ocupação/indústria, gargalo e prontidão. A aplicação da Agency Accelerants
vai além: região, renda mensal, orçamento imediatamente acessível e disponibilidade
via dinheiro, cartão, Affirm ou Klarna. Um orçamento abaixo de US$2 mil abre uma
pergunta sobre cartão/eligibilidade; sem cartão, o usuário é desviado para um CTA
de DM. Perfis financeiramente prontos avançam para contato e Calendly.

Isto é um funil de **sales-assisted education**, com segmentação por capacidade
de pagamento antes da call. O desenho otimiza tempo comercial, mas traz riscos
de consentimento, equidade, reputação e uso de crédito que o FGSS não deve copiar
sem revisão jurídica e ética.

## Atribuição e growth ops

O script público Trakyo:

- mantém `trakyo_id` em cookie e localStorage por 90 dias;
- tenta fingerprint Thumbmark e usa ID aleatório como fallback;
- propaga identidade para Typeform, Calendly, iClosed, Tally, WebinarJam,
  HighLevel e HubSpot;
- registra URL de entrada, referrer, tela, idioma, fuso, UTMs e IDs de anúncios;
- aceita eventos de conversão com valor/moeda e PII opcional;
- usa idempotency key e fila local para falhas;
- reconhece GPC e `trakyo-no-track=1` como opt-out.

A vantagem aqui não é o pixel isolado, mas a continuidade de atribuição entre
conteúdo, formulário, booking e fechamento. O FGSS deve adaptar o princípio com
consentimento explícito, identidade pseudonimizada, retenção curta, deletion
workflow e métricas agregadas — não replicar fingerprinting por padrão.

## O que não foi possível provar

- conversão por etapa, show rate, close rate ou tempo de ciclo;
- CAC por canal, comissão, gasto em mídia ou custo de conteúdo;
- MRR/ARR, churn, refunds, inadimplência e margem de suporte;
- quantos membros são gratuitos, ativos, pagantes, duplicados ou históricos;
- scripts de call, CRM interno, follow-up e performance individual de closers;
- receita/resultado por coorte ou distribuição de resultados dos alunos.
