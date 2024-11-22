
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na minha lista de toDo', () =>{


    beforeEach(()=>{
        cy.visit('/')
    })

    it.skip('Adicionar um item na lista', () => {
        telaInicial.inputText("dado1")
        telaInicial.inputText("dado2")
        telaInicial.inputText("dado3")
       
      })

      it('Adicionar um item na lista', () => {
      
        var todoItens = ["Maça", "Banana", "Cenoura"]

        todoItens.forEach(function(item,indice,array){
            telaInicial.inputText(item)
        })
      });


});      