describe("Página Inicial", () => {
  it("deve carregar a página inicial", () => {
    cy.visit("https://concientizacaociber.netlify.app")
    cy.contains('Saiba Mais').should('be.visible')

})

   it("Botão voltar",  () => {
    cy.visit("https://concientizacaociber.netlify.app")
    cy.contains('Criadores').click()
    cy.contains("Página Inicial").click()
    cy.url().should('eq', 'https://concientizacaociber.netlify.app/')

   }) 

});