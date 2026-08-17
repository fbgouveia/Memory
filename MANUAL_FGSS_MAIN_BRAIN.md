# Manual de uso do FGSS MAIN BRAIN

## O que ele é

O FGSS MAIN BRAIN é o “painel central de sinais”. Imagine vários projetos como
carros. O MAIN BRAIN não dirige os carros; ele recebe informações permitidas,
como tempo, falha e custo, e mostra ao Admin o que está acontecendo.

Ele não substitui o `FGSS brain`. O `FGSS brain` ajuda uma LLM a pensar e
executar. O MAIN BRAIN consolida evidências produzidas pelos projetos.

## Regra principal

O Admin pergunta primeiro; o projeto responde depois:

```text
função do Admin declara uma pergunta
→ demanda define a métrica
→ política limita os campos
→ coletor observa somente esses campos
→ gateway valida o envelope
→ banco guarda o evento
→ visão entrega evidência ao Admin
```

Se não existe uma pergunta e uma política, o dado não deve ser coletado.

## Antes de usar

Leia nesta ordem:

1. `FGSS MAIN BRAIN/AGENTS.md`
2. `FGSS MAIN BRAIN/README.md`
3. `FGSS MAIN BRAIN/main-brain.json`
4. `FGSS MAIN BRAIN/docs/ARCHITECTURE.md`
5. `FGSS MAIN BRAIN/docs/PORTFOLIO-INTEGRATION.md`

## Modo local

Entre na pasta:

```bash
cd "/Users/felipegouveia/Developer/CÉREBRO/FGSS MAIN BRAIN"
```

Inicialize e confira:

```bash
python3 tools/main_brain.py init
python3 tools/main_brain.py status
PYTHONPYCACHEPREFIX=/tmp/fgss-main-brain-pycache \
  python3 -m unittest discover -s tests -q
```

Cadastre projeto, coletor, demanda e política usando os exemplos de
`FGSS MAIN BRAIN/README.md`. Essa ordem é obrigatória porque o coletor não decide
sozinho o que observar.

## Assinatura e gateway

Defina `FGSS_MAIN_BRAIN_SECRET` com no mínimo 32 caracteres fora do repositório.
Nunca use prefixo `VITE_`.

```bash
export FGSS_MAIN_BRAIN_SECRET='segredo-longo-gerenciado-fora-do-git'
python3 tools/http_server.py
```

O gateway local oferece:

- `GET /health`
- `POST /v1/events`

No Felipe Portfolio, o equivalente é:

- `POST /api/fgss/v1/events`
- `GET /api/admin/main-brain/overview`

O endpoint do Admin exige HTTPS em produção. O frontend nunca deve receber a
`service_role` nem o segredo mestre.

## Evento permitido

Envie somente métricas operacionais mínimas, por exemplo:

- identificadores técnicos;
- horário e duração;
- resultado;
- tokens e cache;
- custo medido ou estimado, com qualidade declarada;
- resultado de testes.
- ativação, rodadas, candidatos, achados materiais, veredito e razão de parada
  do gauntlet-loop, somente quando a política autorizar.

Nunca envie:

- prompt ou resposta completa;
- conversa;
- código-fonte;
- `.env`, token ou credencial;
- stack trace completo;
- nome, e-mail, documento ou comportamento pessoal de cliente.
- propostas, críticas, respostas ou qualquer conteúdo produzido no
  gauntlet-loop.

## Produção com Supabase

1. Confirme o projeto Supabase.
2. Configure `SUPABASE_SERVICE_ROLE_KEY` somente no backend.
3. Configure `FGSS_MAIN_BRAIN_SECRET`.
4. Aplique `FGSS MAIN BRAIN/supabase/001_fgss_main.sql`.
5. Aplique `FGSS MAIN BRAIN/supabase/002_gauntlet_observability.sql`.
6. Execute `FGSS MAIN BRAIN/supabase/verify_fgss_main.sql`.
7. Só libere tráfego se todas as verificações retornarem zero linhas.
8. Comece com um único subprojeto piloto.

## Como interpretar respostas

- Evento aceito: entrou pela primeira vez.
- Duplicado/idempotente: já havia entrado; não é falha.
- Quarentena: foi recusado; o motivo é guardado, mas não o corpo sensível.
- Custo confiável: apenas `measured` ou `estimated`.
- `simulated`, `derived` e `unclassified`: não entram no custo confiável.

## Encerramento de uma alteração

Antes de declarar concluído:

```bash
PYTHONPYCACHEPREFIX=/tmp/fgss-main-brain-pycache \
  python3 -m unittest discover -s tests -q
```

Depois atualize `ATUALIZACOES.md`. Se algo permanecer aberto, registre em
`PENDENCIAS.md`.
