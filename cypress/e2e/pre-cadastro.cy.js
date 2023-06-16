/// <reference types="cypress" />

describe('Funcionalidade Pré cadastro ', () => {

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
    

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type('teste3101133@teste.com')
        cy.get('#reg_password').type('!Junior10!?')
        cy.get(':nth-child(4) > .button').click()

        cy.get(':nth-child(4) > .button').click()
        cy.get('#account_first_name').type('Rogério')
        cy.get('#account_last_name').type('Bueno')
        cy.get('.woocommerce-Button').click()

    });
    
});