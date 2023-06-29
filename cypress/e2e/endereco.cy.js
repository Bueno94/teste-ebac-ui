/// <reference types="cypress" />
import enderecoPage from "../support/page-objects/endereco.page";

describe('Funcionalidade endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('/minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('Deve fazer cadastro de faturamento com sucesso ', () => {
        enderecoPage.editarEnderecoFaturamento('Rogerio', 'bueno', 'Einstein', 'Brasil', 'Rua americana', '143', 'Osasco', 'Sáo paulo', '06223-020',)



    });
});