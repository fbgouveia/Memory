# Manual de uso do FGSS brain

## O que ele é

O FGSS brain é o sistema que ajuda uma LLM a escolher quanta profundidade,
contexto e ferramenta uma tarefa realmente precisa. Seu objetivo é obter a
maior qualidade verificável com o menor custo razoável.

Ele não deixa a LLM “menos inteligente”. Ele impede que uma tarefa simples use
uma máquina enorme sem necessidade e aumenta a profundidade quando risco ou
evidência exigem.

## Como uma LLM deve iniciar

Leia nesta ordem:

1. `FGSS brain/AGENTS.md`
2. `FGSS brain/fgss-brain.json`
3. `FGSS brain/instrucoes_de_funcionamento/FGSS_BRAIN_MASTER_PROTOCOL.md`

Depois classifique a tarefa:

```bash
cd "/Users/felipegouveia/Developer/CÉREBRO/FGSS brain"
python3 tools/route_task.py "descrição objetiva da tarefa" --files 1
```

Use `--production` ou `--external-write` quando a tarefa tiver esses riscos.

## Os três níveis

- Pequena: mudança local e reversível. Entender, alterar e testar.
- Média: vários arquivos ou integração conhecida. Ler contexto relevante,
  fazer plano curto, alterar e testar.
- Grande: arquitetura, migração, produção ou alto risco. Usar o FGSS Loop
  completo.

## FGSS Loop para tarefas grandes

1. Consultar somente a memória relevante.
2. Mapear a estrutura e dependências.
3. Definir contrato, entradas, saídas e persistência.
4. Construir a lógica de forma simples e fundamentada.
5. Cortar dependências e código desnecessários.
6. Testar com critérios verificáveis.
7. Registrar apenas decisões reutilizáveis.

## Fonte da verdade

`FGSS brain/fgss-brain.json` contém os parâmetros operacionais. Não duplique
esses parâmetros em outros arquivos.

Depois de alterar limites:

```bash
python3 tools/validate_brain.py
python3 tools/sync_runtime_config.py
python3 tools/sync_runtime_config.py --check
PYTHONPYCACHEPREFIX=/tmp/fgss-brain-pycache \
  python3 -m unittest discover -s tests -q
```

## Integração com LLMs

- Codex: plugin global `fgss-brain@personal` está documentado como instalado.
- Claude: precisa de regra/adaptador no ambiente utilizado.
- Gemini: precisa de regra/adaptador no ambiente utilizado.
- Outras LLMs: devem apontar para o caminho absoluto de
  `FGSS brain/AGENTS.md`.

Uma pasta existente não é uma instalação automática. A integração só está
completa quando uma sessão nova encontra as regras e classifica corretamente
uma tarefa pequena e uma tarefa crítica.

Consulte `FGSS brain/LLM_INTEGRATION.md` para manutenção dos adaptadores.

## Relação com o MAIN BRAIN

```text
FGSS brain
  decide como pensar e executar
          ↓ produz métricas permitidas
FGSS MAIN BRAIN
  valida, consolida e distribui evidências
          ↓
Admin do Felipe Portfolio
  mostra saúde, custo e recomendações
```

O `FGSS brain` não deve enviar tudo. Ele envia somente o que uma política do
MAIN BRAIN autorizou.

## Regra final

Comece pela solução mais simples compatível com os fatos. Aumente a
complexidade somente quando a segurança, o risco ou a evidência pedirem.
