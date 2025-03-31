Cypress.Commands.add(
  'fillMandatoryFieldsAndSubmit',
  (
    data = {
      firstName: 'John',
      lastName: 'Nex',
      email: 'johnnex@mail.com',
      text: 'testing again',
    },
  ) => {
    cy.get('#firstName').as('nome').type(data.firstName);
    cy.get('#lastName').as('sobrenome').type(data.lastName);
    cy.get('#email').as('email').type(data.email);
    cy.get('#open-text-area').as('textArea');
    cy.get('textArea').type(data.text);
    cy.contains('button', 'Enviar').click();
  },
);
