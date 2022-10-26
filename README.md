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

### 3 - Casos de criação de utilizador
Para o caso de Criação de user. Visto não ser possível apagar o utilizador. Um caso de teste possível com dois cenários.
| Path  | Caso de teste                                               |
| Happy | Testar a criação de um utilizador não existente             |
| Sad   | Testar a criação de um utilizador com um email já existente |
[^1]
[^1]: Para o caso de teste happy é necessário atualizar o ficheiro - tips_4y\resources\inputs.json com um novo e-mail.

### 4 - LoginLogout
Teste simples que valida o circuito de login e logout na aplicação.
| Path  | Caso de teste                                    |
| Happy | Testar o circuito de login - logout da aplicação |

### 5 - CRUD Contas
Para as contas optei por fazer a validação CRUD, testando o circuito completo de criar uma conta sendo este o happy path. E testando dois Sad Paths em que tento criar e editar uma conta para um nome já existente.
| Path  | Caso de teste                                         |
| Happy | Validação CRUD de uma conta                           |
| Happy | Tentar apagar uma conta com movimentos                |
| Sad   | Criar conta com o nome de uma conta já existente      |
| Sad   | Editar uma conta com o nome de uma conta já existente |

### 6 - Movimentação
Para este caso precisei de criar uma árvore de decisão. De modo a conseguir validar se não todos os caminhos possíveis, pelo menos os mais relevantes.
| Path  | Caso de teste                                                   |
| Happy | Criação de uma Receita (com todos os campos válidos) e Paga     |
| Happy | Criação de uma Receita (com todos os campos válidos) e Pendente |
| Happy | Criação de uma Despesa (com todos os campos válidos) e Paga     |
| Happy | Criação de uma Despesa (com todos os campos válidos) e Pendente |
| Sad   | Criar uma Despesa sem dados                                     |
| Sad   | Criar uma Receita sem dados                                     |

[^2]
[^3]
[^4]
[^2]: Optei por não realizar os testes de validação nos campos de entrada obrigatórios por se tornarem redudantes.
[^3]: Obs. Em termos de UX. As datas deveriam ser seletores de datas com as limitações da plataforma. Visto que é possível inserir qualquer data desde que tenha o formato correto. Mas apenas é possível pesquisar entre dia 01/01/2010 e 31/12/2030. Isto levanta um BUG no saldo da conta.
[^4]: É possível introduzir valores negativos no campo do valor. Podendo dificultar ou adulterar o processo de cálculo.

### 7 - Home - Listagem de contas e saldo
Circuito de adicionar despesas e receitas, e visualização das mesmas na conta correta na página home.
| Path  | Caso de teste                                                                        |
| Happy | Criação de Receitas e despesas para a Conta1 e Conta 2, valores corretos no Home     |

### 8 - Resumo Mensal
Listagem das despesas criadas por conta no Resumo Mensal
| Path  | Caso de teste                                                 |
| Happy | Seleção de um mês no Resumo Mensal para vizualição das contas |