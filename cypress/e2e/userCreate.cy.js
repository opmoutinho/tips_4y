import Inputs from '\\..\\resources\\inputs.json';

const userName = Inputs.user.name;
const email = Inputs.user.email;
const password = Inputs.user.pass;

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('a[href="/cadastro"]')
      .click()
    cy.url().should('eq',"https://seubarriga.wcaquino.me/cadastro")
    cy.get('input[id="nome"]')
      .type(userName)
    cy.get('input[id="email"]')
      .type(email)
    cy.get('input[id="senha"]')
      .type(password)
    cy.get('input[type="submit"]')
      .click()
    cy.get('div[class="alert alert-success"]')
      .should('have.text','Usuário inserido com sucesso')
  })
})