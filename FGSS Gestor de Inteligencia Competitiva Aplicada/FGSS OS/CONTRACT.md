# Contrato de absorção — TheFounderOS

## Visão

Tratar o TheFounderOS como concorrente e referência estratégica do FGSS.io,
capturando toda a superfície pública ou autorizada e transformando-a em
conhecimento verificável, sem confundir cópia de arquivo com entendimento.

## Fontes congeladas

1. Site público informado pelo Felipe: `https://www.thefounderos.com/`.
2. Rotas públicas descobertas no site, incluindo `/os` e `/waitlist`.
3. Experiências incorporadas no mesmo domínio em `/heuresis-os/`.
4. Repositório público declarado open source pelo próprio site:
   `https://github.com/Bennettxai/FounderOS-DEMO`.
5. Links externos são inventariados, mas não atravessados automaticamente.

## Schema mínimo por artefato

Cada item do inventário deve registrar:

- URL ou origem Git;
- revisão/data de captura;
- tipo de conteúdo e categoria;
- SHA-256 e tamanho em bytes;
- caminho local;
- estado (`captured`, `blocked`, `external_reference` ou `error`);
- relação com a fonte que levou à descoberta.

## Camadas

1. **Raw:** evidência imutável, código, HTML, imagens, estilos e scripts públicos.
2. **Knowledge:** produto, arquitetura, dados, agentes, memória, integrações,
   experiência, funil, oferta, prova, teoria e riscos.
3. **Strategy:** concorrência, lacunas e matriz `adotar / adaptar / evitar` para o
   FGSS.io, com prioridade, dependências, risco e critério de aceite.

## Critério de conclusão

Só declarar cobertura integral quando:

1. todas as URLs/arquivos descobertos estiverem uma vez no manifesto;
2. todo item `captured` existir no disco e tiver o mesmo hash/tamanho;
3. itens ausentes estiverem explicitamente marcados como bloqueados, externos ou
   erro, com motivo;
4. imagens, áudio e vídeo forem contabilizados, inclusive quando a contagem for
   zero;
5. o snapshot MIT preservar `LICENSE` e a revisão de origem;
6. o código aberto passar por testes, typecheck e build, ou cada falha estiver
   documentada com evidência;
7. a destilação cobrir oferta, produto, arquitetura, teoria, UX, aquisição,
   monetização, confiança, segurança, privacidade, acessibilidade, performance,
   observabilidade e operação;
8. o plano do FGSS.io separar claramente reutilização licenciada, adaptação de
   conceito e implementação original.

## Fora do escopo automático

- submissão de formulários, mensagens ou compras;
- contorno de login, paywall, rate limit ou proteção técnica;
- coleta de credenciais, dados pessoais ou segredos;
- download de terceiros apenas porque foram referenciados pela página;
- declaração de “100% da empresa”: a prova limita-se às superfícies acessíveis
  e congeladas neste contrato.
