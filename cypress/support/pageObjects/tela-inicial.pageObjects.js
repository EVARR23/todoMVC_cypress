const elem = require('../elements/tela-inicial.elements').ELEMENTS;
const concluirItem = require('../elements/tela-inicial.elements').ITENS;
const filtrarItem = require('../elements/tela-inicial.elements').FILTROS;

class TelaInicial {
    inputText(dado) {
        cy.get(elem.inputToDo, { timeout: 10000 })
            .should('not.be.disabled')
            .type(dado)
            .type('{enter}');
    }

    validarInput(texto) {
        cy.get(elem.inputToDo, { timeout: 10000 })  // Increase timeout to 10 seconds
            .should('have.attr', 'placeholder')
            .and('include', texto.toLowerCase());
    }
    
    

    marcarItemComoConcluido() {
        cy.get(concluirItem.buttonConcluirItem)
            .last()
            .should('be.visible')
            .click();
    }

    filtrarItem(menu) {
        cy.get(filtrarItem.filtroToDo)
            .contains(menu)
            .should('be.visible')
            .click();
    }

    deletarItem() {
        cy.get(concluirItem.listaItens)
            .first()
            .should('be.visible')
            .find('button')
            .should('be.visible')
            .click();
    }
}

export default new TelaInicial();
