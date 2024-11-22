
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir itens na minha lista de toDo', () =>{


    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]

        todoItens.forEach(function(item,indice,array){
            telaInicial.inputText(item)
        })
    })

    it('Concluir um item na lista de toDo', () => {
      telaInicial.concluirItem()
      });

     


});      