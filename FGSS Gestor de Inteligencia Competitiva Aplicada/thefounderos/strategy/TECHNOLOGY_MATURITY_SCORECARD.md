# Scorecard de maturidade tecnológica

Escala: 0 ausente, 1 claim, 2 parcial/demo, 3 demonstrado no repo, 4 pronto para
produção com prova pública. A nota mede apenas evidência disponível.

| Dimensão | Nota | Evidência/limite |
| --- | ---: | --- |
| Clareza de produto | 4 | demos e narrativa coerentes |
| UX de demonstração | 4 | cinco experiências e seed rico |
| Modelagem de domínio | 3 | invariantes/estados/testes no repo |
| Qualidade de código | 3 | 888 testes, typecheck/build; histórico muito curto |
| CI/release | 2 | CI recente; zero tag/release |
| Integrações | 2 | muitos conectores/logos; saúde real não provada |
| Agentes/autonomia | 2 | UI/prompt/chat; execução produtiva limitada |
| Conhecimento/memória | 2 | arquitetura e fallback; governança parcial |
| Autenticação/autorização | 1 | proteção ausente no snapshot; issue aberta |
| Multi-tenancy | 0 | não demonstrado |
| Supply chain | 1 | MIT presente; oito pacotes high no audit atual |
| Privacidade/consentimento | 1 | funil sofisticado; governança não demonstrada |
| Observabilidade/SLO | 1 | conceitos, sem prova operacional suficiente |
| Backup/DR/rollback | 1 | não demonstrado end-to-end |
| Acessibilidade | 1 | sem auditoria/critério público observado |
| Portabilidade | 3 | código MIT/local e dados SQLite favorecem posse |

**Leitura:** forte artefato de marketing/educação e excelente seed de produto;
maturidade produtiva empresarial não comprovada. O FGSS deve preservar a mesma
tangibilidade, mas fazer auth, evidence, tenancy, consent, observabilidade e
rollback virarem critérios de aceite, não slides futuros.
