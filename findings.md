# Descobertas de trabalho — absorção do backup

## Fatos observados

- `backup/` contém cinco pastas e aproximadamente 840 MB.
- Três não existem na raiz: `FGSS Gestor de Inteligencia Competitiva Aplicada`,
  `FGSS Gestor de Midias Sociais` e `FGSS Gestor de Motion Design`.
- Duas já existem: `FGSS Gestor de Automacao` e
  `FGSS Gestor de Midia YouTube`.
- Automação: 1.971 arquivos no backup; 33 exclusivos, 1.924 idênticos e 14
  divergentes em caminhos compartilhados.
- YouTube: 5.289 arquivos regulares no backup; 5.282 exclusivos e 7 divergentes
  em caminhos compartilhados, além de links simbólicos exclusivos sob
  `node_modules/.bin`.
- A árvore Git já possui mudanças não relacionadas; elas devem ser preservadas.

## Decisão

A absorção será aditiva. A versão ativa atual vence todo conflito de caminho;
a versão divergente do backup será guardada dentro da própria pasta de destino,
em `.backup-absorvido/2026-08-17/`. Isso mantém as duas versões disponíveis sem
escolher arbitrariamente qual é mais atual.

## Resultado verificado

- As três pastas novas passaram em comparação integral por checksum e estrutura.
- Automação passou a conter todos os 1.971 arquivos regulares da origem; 14
  versões divergentes foram preservadas byte a byte.
- YouTube passou a conter todos os 5.289 arquivos regulares e todos os links
  simbólicos da origem; 7 versões divergentes foram preservadas byte a byte.
- A pasta `backup/` foi removida somente depois das verificações.
- Automação, YouTube, Motion Design e os dois dossiês de Inteligência
  Competitiva passaram nos validadores locais aplicáveis.
- Mídias Sociais executou 36 testes com sucesso, mas seu preflight encontrou
  692 dos 718 arquivos brutos inventariados ausentes. A ausência já existia na
  origem transferida e ficou registrada como pendência canônica.
