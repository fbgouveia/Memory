# TheFounderOS — inteligência competitiva para o FGSS.io

Subprojeto auditável para preservar, destilar e comparar as superfícies públicas
do [TheFounderOS](https://www.thefounderos.com/) e do repositório público
[`Bennettxai/FounderOS-DEMO`](https://github.com/Bennettxai/FounderOS-DEMO).

## Estrutura

- `raw/site/`: snapshots públicos do site e ativos no mesmo domínio.
- `raw/repository/`: snapshot do código aberto, com licença e revisão de origem.
- `inventory/`: manifestos com URL, hash, tipo, tamanho e caminho local.
- `knowledge/`: conhecimento destilado e mapas técnicos.
- `strategy/`: análise competitiva e plano de injeção original no FGSS.io.
- `tools/`: coleta e auditoria reproduzíveis, sem dependências externas.

## Resultado congelado

- Site: 56 registros, 50 capturados, seis referências externas, zero erro.
- Mídia: nove imagens, zero áudio e zero vídeo público descoberto.
- Código: 332 arquivos no commit `6b852ab`, com licença MIT preservada.
- Validação: 888 testes, typecheck, build e seed aprovados.
- Grafo: 1.773 nós, 4.270 arestas e 90 comunidades.
- Ecossistema: funil, Typeforms, tracking, comunidades, ofertas e canais
  congelados em manifesto próprio, respeitando bloqueios/noarchive.
- Risco: histórico, auth, dependências, licenças e claims classificados sem
  teste contra sistemas reais.

Comece por `findings.md`, `knowledge/COMPETITOR_INTELLIGENCE_MODEL.md`,
`strategy/FGSS_BATTLECARD.md` e `strategy/FGSS_INJECTION_BLUEPRINT.md`.

Para novas capturas, preserve primeiro o manifesto anterior e use
`tools/compare_manifests.py <antes> <depois>` para gerar o delta.

## Limite de uso

O código do `FounderOS-DEMO` está sob licença MIT e deve manter o aviso de
copyright e a licença. O site comercial e seus ativos visuais são preservados
para pesquisa interna e proveniência; não são automaticamente cobertos pela
licença do repositório. O plano para o FGSS.io deve adaptar princípios e criar
uma implementação original.

Veja [CONTRACT.md](CONTRACT.md) para o critério de conclusão.
