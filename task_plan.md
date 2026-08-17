# Plano — absorção do backup no CÉREBRO

Objetivo: transferir as cinco pastas de `backup/` para a raiz sem perder a
versão já existente de nenhum arquivo.

## Contrato de absorção

- Pastas ausentes na raiz são transferidas integralmente e verificadas.
- Nas pastas já existentes, arquivos exclusivos do backup entram no mesmo
  caminho relativo.
- Arquivos idênticos não são duplicados.
- Arquivos com o mesmo caminho e conteúdo divergente não sobrescrevem a versão
  ativa: a cópia do backup é preservada em `.backup-absorvido/2026-08-17/`, com
  a mesma árvore relativa.
- A origem só pode ser removida depois de cada arquivo estar comprovadamente
  representado no destino, no caminho ativo ou na área de preservação.
- Nenhum valor de `.env`, token, chave ou senha será lido ou registrado.

## Fases

- [x] Inventariar pastas, arquivos, tamanhos, sobreposições e links simbólicos.
- [x] Classificar arquivos exclusivos, idênticos e divergentes.
- [x] Transferir três pastas ausentes na raiz.
- [x] Absorver conteúdo exclusivo das duas pastas sobrepostas.
- [x] Preservar versões divergentes sem sobrescrita.
- [x] Verificar integridade e executar testes aplicáveis.
- [x] Registrar conclusão, provas e pendências nos arquivos canônicos.
