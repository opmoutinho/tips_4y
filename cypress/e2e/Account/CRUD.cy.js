import Inputs from '\\..\\resources\\inputs.json';

const email = Inputs.user.email;
const password = Inputs.user.pass;

describe('Account - CRUD', () => {
  it('Performs CRUD operations on an Account', () => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get('input[id="email"]')
      .type(email)
    cy.get('input[id="senha"]')
      .type(password)
    cy.get('button[type="submit"]')
      .click()
    cy.contains('a[data-toggle="dropdown"]', 'Contas')
      .click()
    cy.contains('a[href="/addConta"]', 'Adicionar')
      .click()
    cy.get('input[id="nome"]')
      .type('CRUDAccount')
    cy.get('button[type="submit"]')
      .click()
    cy.get('div[class="alert alert-success"]')
      .should('have.text','Conta adicionada com sucesso!')
    cy.get('span[class="glyphicon glyphicon-edit"]')
      .click()
    cy.get('input[id="nome"]')
      .type('Edit')
    cy.get('button[type="submit"]')
      .click()
    cy.get('div[class="alert alert-success"]')
      .should('have.text','Conta alterada com sucesso!')
    cy.get('span[class="glyphicon glyphicon-remove-circle"]')
      .click()
    cy.get('div[class="alert alert-success"]')
      .should('have.text','Conta removida com sucesso!') 
  })
})