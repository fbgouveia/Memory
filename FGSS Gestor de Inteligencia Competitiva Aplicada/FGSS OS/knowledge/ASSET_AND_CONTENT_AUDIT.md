# Auditoria de conteúdo e ativos

## Cobertura

- 56 registros totais.
- 50 recursos same-origin capturados e verificados por SHA-256.
- Seis links externos registrados sem travessia.
- Oito HTML, 21 JavaScript, 11 CSS, uma fonte WOFF2, três PNG e seis WEBP.
- Nove imagens; zero áudio; zero vídeo.
- 332 arquivos úteis no snapshot do repositório, 1.944.760 bytes.

O domínio não forneceu sitemap/robots utilizáveis na captura; ambos resolveram
para a superfície 404 do Next.js. Por isso a cobertura é delimitada pelas
rotas, iframes e ativos descobertos a partir das sementes contratuais.

## Imagens

As imagens incluem marca, favicons, retratos, telas das cinco demos e o quadro
“BENNETT LIVE / OFFICE-HOURS”. São evidência visual de posicionamento e produto,
não ativos licenciados para publicação pelo FGSS. O arquivo de live call é uma
imagem estática; não há mídia audiovisual pública correspondente no inventário.

## Código e licença

O snapshot `FounderOS-DEMO` preserva `LICENSE` MIT e a revisão de origem. Isso
permite estudo e reutilização nos termos da licença, mas não transfere direitos
sobre nome, copy, fotografias, identidade visual ou demais ativos do site.

## Reprodutibilidade

`tools/collect_public.py` refaz a captura somente dentro das pastas geradas do
subprojeto. `tools/audit.py` reconcilia disco, manifesto, hash, tamanho, órfãos,
licença e commit. O relatório terminal está em `inventory/audit_report.json`.
