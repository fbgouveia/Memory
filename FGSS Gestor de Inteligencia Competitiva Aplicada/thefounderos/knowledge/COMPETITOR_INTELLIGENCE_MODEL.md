# Modelo integral de inteligência do concorrente

“Scrape” é só a camada de aquisição. Um dossiê útil precisa separar o que o
concorrente **publica**, o que ele **implementa**, o que o mercado **confirma** e
o que ainda é apenas **hipótese**. Este subprojeto usa as camadas abaixo.

| Camada | Pergunta | Evidência desejada | Estado atual |
| --- | --- | --- | --- |
| Identidade | Quem controla marca, empresa, domínios e contratos? | entidades legais, termos, marcas | parcial |
| Categoria | Qual problema, comprador e alternativa ele substitui? | copy, demos, entrevistas | forte na oferta; fraca no comprador real |
| Produto | O que existe, está configurado e funciona? | código, testes, build, uso real | forte no demo; produção não provada |
| Tecnologia | Arquitetura, dados, modelos, integrações e dívida | snapshot, grafo, SBOM, issues | forte no repo público |
| Segurança | Auth, tenant, segredos, supply chain, incidentes | threat model, audit, pentest autorizado | passivo/parcial |
| Conhecimento | Ontologia, método, prompts, invariantes e teoria | documentação e comportamento | forte no material público |
| Experiência | Jornada, ativação, tempo até valor, acessibilidade | walkthrough e métricas | parcial |
| Oferta | Packaging, preço, garantia, contrato e upsells | checkout, termos, páginas públicas | moderado |
| Vendas | ICP, qualificação, objeções, call e follow-up | formulário, CRM, mensagens | funil público forte; execução interna ausente |
| Distribuição | Conteúdo, SEO, comunidade, afiliados e loops | canais e séries temporais | forte no desenho; histórico curto |
| Cliente | Resultado, retenção, churn, NPS, suporte, reembolso | reviews verificadas e coortes | fraco |
| Economia | Receita, CAC, LTV, margem, payback e concentração | contas/relatórios ou sinais auditáveis | não verificável publicamente |
| Operação | Equipe, parceiros, capacidade, SLA e implantação | vagas, organograma, contratos, cases | parcial |
| Ecossistema | Plataformas, dependências, parceiros e poder de canal | integrações e termos de terceiros | forte na superfície |
| Legal/ética | Privacidade, consentimento, IP, claims e jurisdição | políticas, DPIA, licenças | riscos identificados; prova parcial |
| Velocidade | Roadmap, releases, mudanças e resposta a falhas | deltas versionados | baseline criado |
| Moat | O que continua valioso se código/copy forem copiados? | retenção, dados, distribuição, processo | autoridade + distribuição são a hipótese forte |
| Resposta | Como ele reagiria ao FGSS? | cenários, preço, bundling, narrativa | modelado, não observado |

## O que costumamos esquecer

1. **Denominadores.** Seguidores, “joined”, estrelas, avaliações e receita não
   são a mesma população. Cada métrica precisa dizer quem está sendo contado.
2. **Tempo.** Uma captura é fotografia. Crescimento, churn e resposta competitiva
   exigem série temporal reproduzível.
3. **Capacidade de entrega.** Um funil eficiente pode vender mais rápido do que
   mentoria, suporte ou implantação conseguem entregar.
4. **Pós-venda.** Onboarding, suporte, renovação, comunidade ativa, refunds e
   expansão normalmente determinam o negócio mais que a landing page.
5. **Economia real.** Preço não revela margem; audiência não revela CAC; membros
   não revelam MRR; resultado alegado não revela distribuição nem coorte.
6. **Dependência de pessoa-chave.** A autoridade de Bennett acelera aquisição,
   mas cria risco de concentração de canal, reputação e atendimento.
7. **Poder das plataformas.** Instagram, LinkedIn, Whop, Skool, Typeform,
   Calendly, WebinarJam e Trakyo controlam partes do funil e podem mudar termos,
   alcance ou dados.
8. **Privacidade e atribuição.** Fingerprinting, propagação de identificadores e
   PII em múltiplas ferramentas precisam de finalidade, consentimento, retenção,
   exclusão e reconciliação de identidade.
9. **Prova negativa.** “Não encontrado” não significa “não existe”; significa
   apenas que não foi demonstrado na superfície autorizada.
10. **Resposta do concorrente.** Toda vantagem copiável deve ser tratada como
    temporária. A defesa do FGSS precisa estar em evidência acumulada, governança,
    dados do cliente e execução confiável.

## Regra de incorporação no FGSS

O FGSS pode absorver princípios, padrões e fatos públicos com proveniência. Não
deve copiar marca, texto, layout, imagens, comunidades, dados pessoais ou ativos
com licença incerta. Cada item entra como `observation`, `commercial_claim`,
`independent_signal`, `inference` ou `unknown`; apenas observações provadas podem
promover estado de produto.
