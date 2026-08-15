# Produto, mercado e teoria operacional

## Posição

TheFounderOS se apresenta como um sistema operacional de IA que o fundador
constrói e possui. A promessa não é “mais uma ferramenta”, mas uma pasta e uma
interface que codificam a empresa: contexto, ferramentas, workspaces/agentes e
skills/agendamentos.

O cliente central é um fundador ou operador de alta agência, disposto a montar
o próprio sistema. A copy rejeita o consumo passivo. Isso sustenta duas ofertas:
uma coorte de seis sessões ao vivo em duas semanas, anunciada por US$ 1.497, e
um trabalho 1:1 de oito semanas, anunciado por US$ 5.800. A primeira coorte
aparece como esgotada; a waitlist oferece drops semanais gratuitos.

## Funil observado

1. Repositório e demo públicos reduzem risco e provam tangibilidade.
2. Home e imagem de office hours adicionam autoridade e acompanhamento.
3. `/os` traduz a implementação em teoria de sistema.
4. Waitlist/Typeform captura demanda.
5. Coorte monetiza implementação em grupo.
6. Serviço 1:1 monetiza customização e velocidade.

## Arquitetura conceitual

O núcleo proposto tem uma “spine” documental (`system.md`, `encoding.md`,
`invariants.md`, `company.yaml`, `readme.md`), um manager, especialistas,
skills, regras de decisão e máquinas de estado. A consequência mais útil é:
decisões operacionais deixam de ser texto solto e ganham estados permitidos,
pré-condições, efeitos, exceções e evidência.

As cinco demos tornam a teoria concreta:

| OS | Máquina principal | Invariantes exemplares |
| --- | --- | --- |
| Creator | ideia → publicação | publicar exige data/plataforma; negócio e pagamento são estados independentes |
| CRM | proposta → ganho/perda | receita confiável passa pelo gate; perda exige motivo; contato é deduplicado |
| Finance | eventos → saldos | saldos/progresso derivam de eventos; transferência tem um destino; pagamento deriva do ciclo |
| Project Management | lead → fechamento e entrega | negócio exige cliente; perda exige razão; dependência escreve os dois lados |
| Second Brain | captura → triagem → revisão/arquivo | captura sem fricção; arquivo/revisão exigem registro; métricas derivam na leitura |

## Prova versus promoção

- **Comprovado:** páginas e demos navegáveis, snapshot MIT, suite de testes,
  repository layer, schemas, estados de conexão honestos e runtimes de agente.
- **Promocional:** resultados financeiros/horas poupadas e experiência da coorte.
- **Plano declarado:** backend produtivo multi-serviço e Optimal Engine completo.

Essa separação deve ser preservada em qualquer benchmark do FGSS.
