it('testa a página da política de privacidade de forma independente', () => {
  Cypress._.times(3, () => {
    cy.visit('./src/privacy.html');
    cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible');
    cy.contains('p', 'Talking About Testing').should('be.visible');
  });
});
