# HANDOFF — FGSS Gestor de Midia YouTube

Última atualização: 09 ago 2026 (criação da engine).

## Estado
Engine irmã recém-criada. Estrutura de pastas e lei fundacional prontas.
Bíblias (`docs/bible/`, `docs/bible_hi/`) vazias — aguardando ingestão de
conhecimento de YouTube.

## Pendências em aberto
1. Ingerir/produzir a Bíblia G-T-M de YouTube (playbooks de operação).
2. Ingerir/produzir a Bíblia H-I de YouTube (técnicas profundas de API/SEO).
3. Adaptar `scaffold_yt.py` a partir do `scaffold_project.py` do Gestor de
   Automacao (gerar `aut-yt-*` com módulos de upload/analytics + DLQ dual).
4. Definir primeiras automações piloto (ex: upload agendado, ingestão de
   analytics para o MAIN BRAIN).

## Atualizações desta sessão
- Criada estrutura de pastas espelhada do `FGSS Gestor de Automacao`.
- `AGENTS.md` — lei do Chairman de Mídia YouTube, escopo, herança CÉREBRO.
- `README.md` — AEOT + 4 Pilares adaptados a YouTube, estrutura de pastas.
- `glossario.md` — semente com ~80 termos de YouTube + herdados.
- `schemas/automation-manifest-schema.json` — manifesto YouTube (com
  `channel_id` e `youtube_quota_points_per_day`).

## Decisões
- Engine é **irmã**, não subordinada — mesmo nível do Gestor de Automacao.
- Herda FGSS Brain (6 lobos), AEOT, 4 Pilares, DLQ dual, PII Masking.
- `AGENTS.md` local vence em conflito de escopo dentro desta pasta.
- Fora do escopo: produção de vídeo (filmagem/edição) — isso é HyperFrames/CÉREBRO.

## Arquivos criados
- `AGENTS.md`, `README.md`, `glossario.md`, `HANDOFF.md`, `progress.md`,
  `findings.md`
- `schemas/automation-manifest-schema.json`
- Pastas: `docs/bible/`, `docs/bible_hi/`, `docs/raw_markdown/`,
  `integrations/`, `tools/scaffold/`, `tools/validation/`
