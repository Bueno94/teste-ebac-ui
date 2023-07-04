/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";
const dadosEndereco = require ('../fixtures/endereco.json')

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('/minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso ', () => {
        enderecoPage.editarEnderecoFaturamento('Rogerio', 'bueno', 'Einstein', 'Brasil', 'Rua americana', '143', 'Osasco', 'Sáo paulo', '06223-020',)
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivos de dados', () => {
        enderecoPage.editarEnderecoFaturamento
        (dadosEndereco[1].nome,
        dadosEndereco[1].sobrenome,
        dadosEndereco[1].Empresa,
        dadosEndereco[1].pais,
        dadosEndereco[1].endereco,
        dadosEndereco[1].numero,
        dadosEndereco[1].cidade,
        dadosEndereco[1].estado,
        dadosEndereco[1].cep,


    )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });




});
