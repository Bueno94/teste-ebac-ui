/// <reference types="cypress" />

context('Funcionalidade login', () => {

     beforeEach(() => {
          cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
     });

     afterEach(() => {
          cy.screenshot()
     })

     it('Deve fazer login com sucesso', () => {

          //login
          cy.get('#username').type('Aluno_ebac@teste.com')
          cy.get('#password').type('teste@teste.com')
          cy.get('.woocommerce-form > .button').click()


          cy.get('.page-title').should('contain', 'Minha conta')
          cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
     })

     it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {

          //Erro usuario
          cy.get('#username').type('ebac@teste.com')
          cy.get('#password').type('teste@teste.com')
          cy.get('.woocommerce-form > .button').click()

          cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail ')


     })

     it('Deve exibir uma mensagem de erro ao inserir senha invalido', () => {

          //Erro senha
          cy.get('#username').type('Aluno_ebac@teste.com')
          cy.get('#password').type('teste@teste')
          cy.get('.woocommerce-form > .button').click()

          cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail')
     })

})