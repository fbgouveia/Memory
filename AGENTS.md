# CÉREBRO — ponto de entrada para LLMs

Estas regras valem para qualquer LLM trabalhando dentro desta pasta.

## Inicialização obrigatória

1. Leia `PENDENCIAS.md` para não repetir trabalho nem declarar como pronto o que
   ainda depende de ativação.
2. Leia somente as descobertas relacionadas à tarefa em `DESCOBERTAS.md`.
3. Escolha o sistema correto:
   - raciocínio, roteamento, ferramentas ou execução:
     leia `MANUAL_FGSS_BRAIN.md` e depois `FGSS brain/AGENTS.md`;
   - telemetria, custos, evidências ou integração com o Admin:
     leia `MANUAL_FGSS_MAIN_BRAIN.md` e depois `FGSS MAIN BRAIN/AGENTS.md`;
   - tarefa que envolve os dois: leia os dois manuais, mas preserve a fronteira
     entre execução e observação.
4. Consulte `ATUALIZACOES.md` apenas quando precisar saber o que já mudou.

## Fronteira obrigatória

- `FGSS brain` orienta como pensar e executar.
- `FGSS MAIN BRAIN` valida e consolida evidências dos projetos.
- O MAIN BRAIN não comanda automaticamente agentes ou produção.
- Não modificar `FGSS brain` durante trabalho no MAIN BRAIN sem pedido
  explícito do usuário.
- Não declarar integração global de uma LLM sem validar uma sessão nova naquele
  aplicativo.

## Segurança

- Nunca ler, copiar ou registrar valores de `.env`, chaves, tokens ou senhas em
  documentação, telemetria ou respostas.
- Nunca enviar prompts, conversas, código-fonte, stack traces completos ou dados
  pessoais ao MAIN BRAIN.
- Mudança de banco ou produção exige confirmar o alvo antes de executar.
- Ausência de dado é `null` ou “não medido”; nunca inventar zero.
- Custos de períodos diferentes não devem ser somados.

## Encerramento

- Execute os testes definidos pelo sistema alterado.
- Registre conclusão e prova em `ATUALIZACOES.md`.
- Registre trabalho restante em `PENDENCIAS.md`.
- Registre fatos novos com consequência em `DESCOBERTAS.md`.
- Não duplique pendências em outros arquivos.
