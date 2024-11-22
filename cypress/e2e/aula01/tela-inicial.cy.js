import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Acessar a pagina do todoMvc', () => {
    it('Abrir o site', () => {
      cy.visit('https://todomvc.com/examples/react-redux/dist/#/')
      telaInicial.inputText()
    })
  })