describe("Central de Atendimento ao Cliente TAT", () => {
  it("verifica o título da aplicação", () => {
    cy.visit("src/index.html");
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
  });
});
