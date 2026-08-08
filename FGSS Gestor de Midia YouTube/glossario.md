# 📖 Glossário Técnico — FGSS Gestor de Midia YouTube

> Dicionário de leitura fácil e concisa sobre os termos técnicos de mídia
> YouTube, automação de canal, SEO, analytics e do ecossistema CÉREBRO herdado.
>
> **Como usar:** procure na tabela alfabética (§1) ou navegue por categoria (§2).
> Cada entrada traz definição curta + onde aparece (quando aplicável).

---

## §1 — Tabela Alfabética

### A

| Termo | Cat | Definição curta |
|---|---|---|
| **AdSense** | Plataforma | Programa de monetização do Google; pay-per-view/share. |
| **AEOT** | CÉREBRO | Protocolo de Adaptabilidade Estratégica e Otimização Tridimensional. |
| **Analytics API** | API | YouTube Analytics API — métricas de canal (views, watch time, revenue). |
| **Appeal** | Risco | Recurso contra strike/demonetização; processo de reverter decisão. |
| **Audience Retention** | Métrica | Curva de retenção — % do público que fica a cada segundo. |

### B

| Termo | Cat | Definição curta |
|---|---|---|
| **Bíblia G-T-M (YouTube)** | CÉREBRO | Playbooks de operação de canal (uploads, SEO, growth). |
| **Bíblia H-I (YouTube)** | CÉREBRO | Técnicas profundas (API, algoritmo, quotas, Content ID). |
| **Boost (algoritmo)** | Growth | Pico de impressões dado pelo algoritmo a vídeos novos. |

### C

| Termo | Cat | Definição curta |
|---|---|---|
| **Canal** | Contrato | Entidade raiz do YouTube; tem uploads, playlists, analytics. |
| **Cards** | Operação | Cartões interativos no vídeo (links, vídeos). |
| **Chairman de Mídia YouTube** | CÉREBRO | Persona do LLM que opera esta engine. |
| **Click-Through Rate (CTR)** | Métrica | % de cliques por impressão; saúdade da thumbnail+title. |
| **Claim (Content ID)** | Risco | Reivindicação de direitos sobre parte do vídeo. |
| **Content ID** | API/Risco | Sistema do YouTube que detecta conteúdo protegido. |
| **Cost Level (cost_level)** | CÉREBRO | low/medium/high — custo de quota por operação. |
| **Cota (quota)** | API | Limite de unidades da YouTube Data API v3 (10.000/dia default). |

### D

| Termo | Cat | Definição curta |
|---|---|---|
| **Data API v3** | API | YouTube Data API v3 — uploads, metadados, busca, playlists. |
| **Default Reply** | — | (herdado) resposta padrão de bot. |
| **Demonetização** | Risco | Remoção de anúncios do vídeo; receita cai a zero. |
| **DLQ dual** | Código | Dead Letter Queue Redis + JSONL fallback (herdado). |
| **Draft** | Operação | Vídeo não publicado; visível só ao criador. |

### E

| Termo | Cat | Definição curta |
|---|---|---|
| **End Screens** | Operação | Telas finais com links/call-to-action no fim do vídeo. |
| **Evergreen** | Conteúdo | Conteúdo com visualização estável ao longo do tempo. |

### F

| Termo | Cat | Definição curta |
|---|---|---|
| **FFmpeg** | Ferramenta | Manipulação de vídeo (transcodificação, cortes, thumbnails). |
| **Frontend de upload** | Operação | Formulário/metadata do vídeo (title, desc, tags, thumb). |

### G

| Termo | Cat | Definição curta |
|---|---|---|
| **Google API Python Client** | Ferramenta | Lib oficial de acesso a APIs Google (YouTube). |
| **Growth** | Estratégia | Crescimento do canal (inscritos, watch time, alcance). |

### H

| Termo | Cat | Definição curta |
|---|---|---|
| **Hook** | Conteúdo | Primeiros 3-15s do vídeo que retêm o espectador. |
| **H-I (High Intelligence)** | CÉREBRO | Categoria técnica avançada; Bíblia H-I. |

### I

| Termo | Cat | Definição curta |
|---|---|---|
| **Impressões** | Métrica | Vezes que o thumbnail apareceu na tela do usuário. |
| **Inscritos (subscribers)** | Métrica | Pessoas que seguem o canal. |
| **ISO 8601 (datas API)** | Código | Formato de data exigido por vários endpoints da API. |

### J

| Termo | Cat | Definição curta |
|---|---|---|
| **JSONL** | Código | JSON Lines — formato do fallback DLQ (herdado). |

### L

| Termo | Cat | Definição curta |
|---|---|---|
| **Legendas (captions)** | Operação | Arquivo .vtt/.srt sincronizado com o vídeo. |
| **LGPD** | Sigla | Lei Geral de Proteção de Dados; aplica-se a dados de audiência. |
| **Liveness Probe** | Infra | Probe de saúde do contêiner (herdado). |

### M

| Termo | Cat | Definição curta |
|---|---|---|
| **Manifesto Unificado** | CÉREBRO | `automation-manifest.json` — metadados da automação. |
| **Métricas de receita** | Analytics | RPM, CPM, receita estimada, receita final. |

### N

| Termo | Cat | Definição curta |
|---|---|---|
| **n8n** | Plataforma | Automação no-code; integra com YouTube via HTTP nodes. |

### O

| Termo | Cat | Definição curta |
|---|---|---|
| **OAuth 2.0** | API | Protocolo de autorização; YouTube exige refresh token. |
| **Outro** | Conteúdo | Trecho final do vídeo antes da end screen. |

### P

| Termo | Cat | Definição curta |
|---|---|---|
| **PII Masking** | Técnica | Mascaramento de dados sensíveis em logs (herdado). |
| **Playback** | Métrica | Reprodução do vídeo; base do watch time. |
| **Playlist** | Contrato | Coleção ordenada de vídeos no canal. |
| **Pillar video** | Estratégia | Vídeo longo que sustenta série de Shorts. |
| **Points (quota)** | API | Unidades de cota consumidas por cada chamada à API. |
| **Preflight Search** | CÉREBRO | Busca de estado da arte antes de codar (herdado). |
| **Privacy status** | Contrato | public/unlisted/private — visibilidade do vídeo. |
| **P.R.O.M.P.T.** | Técnica | Framework de prompt (herdado). |

### Q

| Termo | Cat | Definição curta |
|---|---|---|
| **Quota (cota)** | API | Limite de uso da API; cota padrão = 10.000 points/dia. |

### R

| Termo | Cat | Definição curta |
|---|---|---|
| **Rate Limit** | Código | Limite de requisições por janela (herdado + YouTube API). |
| **Reach** | Métrica | Alcance do vídeo — quantas pessoas únicas viram. |
| **Recommendação (algoritmo)** | Algoritmo | Sistema que escolhe o próximo vídeo a assistir. |
| **Refresh Token** | API | Token que renova o access token OAuth expirado. |
| **Reporting API** | API | YouTube Reporting API — relatórios bulk em CSV. |
| **Retention** | Métrica | Veja Audience Retention. |
| **Roteiro (script)** | Conteúdo | Texto-base do vídeo; hook, corpo, CTA. |
| **RPM** | Métrica | Receita por mil visualizações. |

### S

| Termo | Cat | Definição curta |
|---|---|---|
| **Sandbox-First** | CÉREBRO | Isolamento de chaves `_TEST` vs `_LIVE` (herdado). |
| **Scaffold** | Técnica | Geração de esqueleto de automação (herdado). |
| **SEO YouTube** | Estratégia | Otimização de title/desc/tags para busca e recomendação. |
| **Shorts** | Formato | Vídeos verticais até 60s; feed dedicado. |
| **Shorts Analytics** | Métrica | Métricas específicas de Shorts (swipe-away, loops). |
| **Strike** | Risco | Advertência formal por violação; 3 = canal removido. |
| **Subscribers** | Métrica | Veja Inscritos. |
| **Suggested Videos** | Algoritmo | Coluna lateral de "próximo vídeo". |
| **Sustainability** | Estratégia | Sustentabilidade do canal a longo prazo. |

### T

| Termo | Cat | Definição curta |
|---|---|---|
| **Tags** | SEO | Palavras-chave do vídeo (metadados). |
| **Telemetria** | CÉREBRO | Coleta de métricas; enviada ao MAIN BRAIN. |
| **Thumbnails** | Operação | Imagem de capa do vídeo; A/B, alta CTR. |
| **Title** | SEO | Título do vídeo; peso alto em CTR e busca. |
| **Traffic Source** | Analytics | De onde vieram as views (busca, suggested, browse, external). |
| **Tríade de Valor** | CÉREBRO | Custo × Robustez × Simplicidade (herdado). |

### U

| Termo | Cat | Definição curta |
|---|---|---|
| **Upload (resumable)** | API | Upload que pode retomar de onde parou após falha. |
| **Upload Session** | API | Sessão de upload aberta pela API antes de enviar bytes. |

### V

| Termo | Cat | Definição curta |
|---|---|---|
| **VET (Video Engagement Time)** | Métrica | Tempo de engajamento ponderado. |
| **Vídeo longo** | Formato | Conteúdo tradicional >1min; sustenta receita e SEO. |
| **VLAEG** | CÉREBRO | Constituição do FGSS Brain (herdado). |
| **VTT** | Arquivo | Formato de legenda WebVTT. |

### W

| Termo | Cat | Definição curta |
|---|---|---|
| **Watch Time** | Métrica | Minutos totais assistidos; métrica-rainha do algoritmo. |
| **Webhook de YouTube** | API | Notificação push do YouTube (PubSubHubbub) para novos vídeos. |

### Y

| Termo | Cat | Definição curta |
|---|---|---|
| **YAGNI** | Sigla | "You Aren't Gonna Need It" (herdado). |
| **YouTube Studio** | Plataforma | Painel web de gestão do canal. |

---

## §2 — Índice por Categoria

### 🔌 APIs YouTube
`Analytics API` · `Content ID` · `Data API v3` · `Reporting API` · `OAuth 2.0` · `Refresh Token` · `Quota/Points` · `Upload resumable` · `Upload Session` · `Webhook YouTube (PubSubHubbub)` · `ISO 8601`

### 📊 Métricas / Analytics
`Audience Retention` · `CTR` · `Impressões` · `Inscritos` · `Playback` · `Reach` · `RPM/CPM` · `Shorts Analytics` · `Traffic Source` · `VET` · `Watch Time` · `Métricas de receita`

### 🎬 Operação de Canal
`Canal` · `Cards` · `Draft` · `End Screens` · `Legendas (captions)` · `Playlist` · `Privacy status` · `Tags` · `Thumbnails` · `Title` · `Upload` · `Vídeo longo` · `FFmpeg` · `YouTube Studio`

### 📈 SEO / Growth
`Boost` · `Evergreen` · `Growth` · `Hook` · `Pillar video` · `Recommendação` · `SEO YouTube` · `Shorts` · `Suggested Videos` · `Sustainability`

### ⚠️ Risco / Políticas
`Appeal` · `Claim` · `Content ID` · `Demonetização` · `Strike` · `AdSense`

### 💻 Código (herdado do Gestor de Automação)
`DLQ dual` · `JSONL` · `Liveness Probe` · `PII Masking` · `Rate Limit` · `Scaffold` · `LGPD` · `n8n` · `FFmpeg` · `Google API Python Client`

### 🧠 Ecossistema CÉREBRO (herdado)
`AEOT` · `Bíblia G-T-M` · `Bíblia H-I` · `Chairman` · `Cost Level` · `Manifesto Unificado` · `Preflight Search` · `Sandbox-First` · `Telemetria` · `Tríade de Valor` · `VLAEG` · `YAGNI` · `P.R.O.M.P.T.`

### 🔤 Siglas
`AEOT` · `API` · `CPM` · `CTR` · `DLQ` · `H-I` · `JSONL` · `LGPD` · `PII` · `RPM` · `SEO` · `VET` · `VLAEG` · `VTT` · `YAGNI`

---

## §3 — Conceitos-chave para leitura rápida

> Para quem precisa entender a engine em 2 minutos.

**O que a engine faz:** Gerencia, automatiza e analisa canais YouTube —
uploads, metadados, SEO, analytics, Shorts, growth, risco — sob o ecossistema
CÉREBRO, observada pelo FGSS MAIN BRAIN.

**Diretriz-mestra (AEOT):**
1. **Horizonte Tecnológico Ativo** — Preflight Web Search sobre APIs/algoritmo 2026.
2. **Prospecção de Estratégias Alternativas** — múltiplos caminhos (Shorts vs longo, API vs scraping).
3. **Equacionamento da Tríade** — Quota de API × Qualidade × Sustentabilidade.

**4 Pilares (adaptados):**
1. **Manifesto Unificado** (`automation-manifest.json`) — metadados da automação YouTube.
2. **Lâmina de Contingência** — DLQ dual para falhas de upload/quota/Content ID.
3. **Sandbox-First** — chaves `_TEST` vs `_LIVE`; nunca tocar canal real em teste.
4. **CLI de Scaffold** — `tools/scaffold/scaffold_yt.py` gera automação YouTube.

**Fluxo padrão de uma automação YouTube:**
1. Gatilho (cron, webhook de novo vídeo, alerta de analytics) → enfileira job.
2. Worker BullMQ processa com rate limit (respeita quota da API).
3. Se falha: retry com backoff exponencial + jitter.
4. Se falha definitivo (403 quota, Content ID): vai para DLQ dual.
5. Logs mascarados (PII/LGPD) em `logger.js`.

---

> *Mantenha este glossário atualizado ao introduzir novos termos. Cada termo
> novo em código/arquitetura/playbook YouTube deve ganhar uma linha aqui.*
