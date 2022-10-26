# TIPS 4Y
## Cypress Challenge

Na TIPS 4Y foi desenvolvida uma nova plataforma interna que visa melhorar a gestão financeira dos seus colaboradores.
Trata-se de uma plataforma onde os colaboradores podem fazer registo das suas despesas e dividir essas despesas pelas respetivas contas que têm.

Após o desenvolvimento deste novo produto interno, a equipa de desenvolvimento necessita que o mesmo seja testado para que possamos fazer a passagem a produção o quanto antes!

Internamente, a equipa de QA Testers da TIPS 4Y, tem usado a ferramenta Cypress para desenvolvimento de testes manuais que posteriormente hão de ser automatizados por essa mesma equipa.

### Step By Step

### 1 - Configuração
Como nunca tinha trabalhado com cypress o primeiro obstáculo foi fazer a configuração. O desafio real foi desbravar a [documentação](https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install).

### 2 - Primeiras observações
Antes de meter as mãos no Cypress. E visto não haver requisitos de desenvolvimento foi necessário conhecer um pouco as funcionalidades da aplicação antes de escrver os casos de testes. Primeiramente criei um usuário para saber se era possível fazer testes à funcionalidade de CRUD relativamente ao usuário. Reparei que apenas daria para criar um e anotei que esse seria um dos testes possíveis dentro do login. Talve quiçá dividir entre um testes de criação e um teste de circuito de login simples para começar.