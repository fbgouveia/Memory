# Monitor competitivo

## Baseline congelada em 15/08/2026

- site TheFounderOS: 56 registros, 50 locais, seis referências;
- ecossistema autorizado: manifesto separado, hashes e metadados públicos;
- repo: commit `6b852ab77c2f`, cinco commits, zero tag/release;
- GitHub: 511 stars, 138 forks, três issues abertas;
- Instagram: 76K seguidores, 18 posts;
- Whop: 4,8/14 reviews, 2.719 joined na leitura indexada;
- Skool AA: 141 membros, US$97/mês;
- Agent Accelerator: US$795 e dois membros exibidos;
- segurança: oito pacotes high no `npm audit --omit=dev`.

## Cadência e gatilhos

Semanalmente: site, repo/commits/releases/issues, preços, contagens e rotas.
Mensalmente: funil, termos, privacidade, tracking, ofertas, reviews, conteúdo e
posicionamento. Imediatamente: release, mudança de preço/garantia, incidente,
parceria, aquisição, nova entidade legal ou feature equivalente ao moat FGSS.

## Procedimento

1. Executar `python3 FGSS OS/tools/collect_public.py`.
2. Executar `python3 FGSS OS/tools/collect_ecosystem.py`.
3. Preservar os manifestos anteriores antes da corrida se o objetivo for delta;
   os coletores atuais regeneram os diretórios de captura.
4. Executar `python3 FGSS OS/tools/audit.py` e aceitar somente zero erro.
5. Comparar URL, status, tamanho, SHA-256, commit, oferta, preço e claims.
6. Classificar o delta: factual, claim, inference, unknown ou correção.
7. Atualizar scorecard/battlecard apenas com evidência e registrar no HANDOFF.

Não automatizar login, formulário, compra, DM, email, comentário ou coleta de
membros. Não contornar bloqueios de plataforma. LinkedIn retornou HTTP 999 ao
coletor; a evidência pública indexada foi analisada sem bypass e não integra o
arquivo bruto.
