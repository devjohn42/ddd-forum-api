# DDD -> Domain driven Design <=> Design dirigido à Domínio

- Uma forma de conseguir manter uma conexão muito clara e padronizada entre todas as partes do desenvolvimento de uma aplicação
- Metodologia para design de software
- Design de Software => uma forma de converter um problema real em software

## Domínio -> Área de domínio ao qual o software está sendo desenvolvido

- Domain Experts => Pessoas que entendem a fundo a problemárica que está sendo resolvida através do software
  - Conversa (Várias com Vários Experts) - Fundamental para ter mais conhecimento do Domínio
  - A não ser que o software esteja sendo desenvolvido para si mesmo, você não é expert de domínio

- Linguagem Ubíqua/Linguagem de Domínio => Linguagem única e universal, em que todas as pessoas que estão envolvidas com a contrução do software, resolução do problema, conseguem conversar por igual

# App - Fórum

> Possível conversa com um Instrutor
- Muita dificuldade em saber as ``dúvidas`` dos  ```alunos```
- Eu tenho que ``responder`` os alunos e eu me perco em quais dúvidas já foram respondidas

### Agregados...
### Value Objects...
### Eventos de domínio...
### Subdomínios (Bounded Contexts)...

### Entities
- Objetos do domínio que representam conceitos com identidade única e continuidade ao longo do tempo. Elas são persistidas e manipuladas pela aplicação, e seu ciclo de vida é importante para o negócio

### Casos de Uso
- Representam as ``ações`` (verbos) ou ``comportamentos do sistema`` que coordenam entidades, regras de negócio e outras operações para atingir um objetico específico