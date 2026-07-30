# CÉREBRO

Esta pasta reúne dois sistemas complementares:

| Sistema | Função |
|---|---|
| `FGSS brain` | Ajuda LLMs a raciocinar, escolher ferramentas e executar com qualidade e custo controlado. |
| `FGSS MAIN BRAIN` | Recebe telemetria autorizada, valida eventos e transforma sinais dos projetos em evidências para o Admin. |

## Comece aqui

### Para uma pessoa

1. Leia `MANUAL_FGSS_BRAIN.md`.
2. Leia `MANUAL_FGSS_MAIN_BRAIN.md`.
3. Consulte `PENDENCIAS.md`.

### Para uma LLM

Comece obrigatoriamente por `AGENTS.md`. Ele indica o manual e o protocolo
corretos para cada tipo de tarefa.

## Documentos vivos

- `PENDENCIAS.md`: somente trabalho aberto.
- `DESCOBERTAS.md`: fatos confirmados que mudam decisões.
- `ATUALIZACOES.md`: mudanças concluídas e suas provas.
- `MANUAL_FGSS_BRAIN.md`: uso do cérebro de raciocínio e execução.
- `MANUAL_FGSS_MAIN_BRAIN.md`: uso da central de telemetria e evidências.

## Relação entre os sistemas

```text
Projeto ou LLM
    │
    ├─ usa FGSS brain para decidir como trabalhar
    │
    └─ reporta somente métricas autorizadas
                 ↓
          FGSS MAIN BRAIN
                 ↓
       Admin do Felipe Portfolio
```

O objetivo comum é qualidade máxima verificável com o menor custo razoável, sem
trocar inteligência por economia e sem transformar telemetria em vigilância.
