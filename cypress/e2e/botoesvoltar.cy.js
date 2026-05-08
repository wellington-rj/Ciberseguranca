describe("Página Inicial", () => {
  it("deve carregar a página inicial", () => {
    cy.visit("/")
    cy.contains('Saiba Mais').should('be.visible')
  })

  it("Botão voltar", () => {
    cy.visit("/")
    cy.contains('Criadores').click()
    cy.contains("Página Inicial").click()
    cy.url().should('eq', 'http://localhost:8080/')
  }) 
})