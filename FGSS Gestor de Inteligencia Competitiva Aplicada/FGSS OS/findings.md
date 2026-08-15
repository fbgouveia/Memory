# Findings — registro de verdade

## Verificado

- O domínio público expôs 56 registros: 50 capturados e seis referências
  externas. Entre os capturados há oito HTML, 21 JavaScript, 11 CSS, uma fonte,
  três PNG e seis WEBP.
- Há nove imagens e nenhum arquivo de áudio ou vídeo. O quadro de “live call” é
  uma imagem estática, não prova de vídeo público disponível.
- As rotas públicas observadas são a home, `/os`, `/waitlist` e cinco demos
  incorporadas: Creator, CRM, Finance, Project Management e Second Brain.
- O site liga explicitamente ao repositório público `FounderOS-DEMO`.
- O snapshot analisado contém 332 arquivos úteis e 1.944.760 bytes, sob MIT.
- A aplicação é Next.js 14/TypeScript/Tailwind, com SQLite, Zod, Vitest, Vercel
  AI SDK e D3. Há 20 páginas, 38 rotas API, 101 arquivos de teste e 24 arquivos
  no diretório de conectores.
- `npm test` passou 888 testes; typecheck e build de produção passaram. O seed
  criou seis departamentos, 30 agentes, 36 ferramentas e 13 itens de roadmap.
- O chat de agente público é deliberadamente somente leitura; ele não promete
  que enviou, publicou ou agendou algo. Conectores usam os estados honestos
  `connected`, `not_configured` e `error`.
- Graphify encontrou 1.773 nós, 4.270 arestas e 90 comunidades. `getDb()` e
  `openDb()` são os principais pontos de acoplamento.

## Alegado pela fonte, não verificado de forma independente

- Economia superior a 20 horas por semana.
- Receita adicional de US$ 120 mil em dois meses.
- Experiência comercial completa, comunidade e gravações da coorte.
- Cinco níveis de autonomia por decisão e a totalidade da arquitetura de
  produção “Optimal Engine”. O repositório demonstra conceitos, mas não prova
  toda a infraestrutura produtiva descrita.
- US$ 1,2 milhão em resultados combinados, clientes obtidos 3× mais rápido,
  30 alunos acima de US$5 mil/mês e Merydian como agência de sete dígitos.

## Inferências

- A estratégia de aquisição é product-led education: demo open source → prova
  visual/live → waitlist/free drops → coorte → consultoria 1:1.
- A escada pública combina hub gratuito, comunidade a US$97/mês, curso a
  US$795, mentoria sem preço público e implantação sob proposta.
- O produto vende compressão operacional e propriedade do sistema, não apenas
  aulas ou um SaaS genérico.
- O moat público é mais forte em linguagem de produto, dados semeados e
  invariantes de domínio do que em autonomia irrestrita de agentes.
- A superfície pública valoriza alta agência; isso estreita o público e cria
  espaço para o FGSS oferecer progressão guiada, governança e prova de valor.

## Lacunas e riscos

- Não há repositório local identificado como `FGSS.io`; portanto a injeção
  entregue é um blueprint, não uma alteração no produto final.
- Catálogo de integrações é maior que o conjunto de conectores comprovadamente
  implementados; presença visual não equivale a integração operacional.
- SQLite e singleton local são adequados para demo, não demonstram isolamento
  multi-tenant, concorrência ou recuperação de desastre.
- Segurança, privacidade, acessibilidade, SLOs, telemetria e gestão de consentimento
  não aparecem com profundidade proporcional a um sistema operacional empresarial.
- A issue #2 de rotas sem autenticação permanece aberta; a PR #1 de token está
  marcada como merged, mas seu código não existe no snapshot/histórico atual.
- `npm audit --omit=dev` encontrou oito pacotes com severidade agregada alta;
  isso requer triagem de reachability e não prova exploração.
- Reviews independentes, churn, refunds, CAC, LTV, margem, receita e resultado
  por coorte não são verificáveis nas fontes públicas atuais.
