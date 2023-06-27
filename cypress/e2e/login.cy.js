/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade login', () => {

     beforeEach(() => {
          cy.visit('/minha-conta')
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

     it('Deve fazer login com sucesso - Usando arquivos de dados', () => {
          cy.get('#username').type(perfil.usuario)
          cy.get('#password').type(perfil.senha)
          cy.get('.woocommerce-form > .button').click()


          cy.get('.page-title').should('contain', 'Minha conta')
     });

     it('Deve fazer login com sucesso- Usando fixture', () => {
          cy.fixture('perfil').then(dados => {

               cy.get('#username').type(dados.usuario)
               cy.get('#password').type(dados.senha, { log: false })
               cy.get('.woocommerce-form > .button').click()


               cy.get('.page-title').should('contain', 'Minha conta')
          })


     });


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