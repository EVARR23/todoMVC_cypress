
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar itens da lista', () =>{


    beforeEach(()=>{
        cy.visit('/')
        var todoItens = ["Maça", "Banana", "Cenoura"]

        todoItens.forEach(function(item,indice,array){
            telaInicial.inputText(item)
        })

        telaInicial.concluirItem()
      })



      it('Deleção de um item da lista', () => {
       telaInicial.deletarItem()
      });

      
      it('Filtrar itens concluidos', () => {
       
      });

});      