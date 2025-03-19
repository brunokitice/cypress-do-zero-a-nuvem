describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html');
  });

  it('verifica o título da aplicação', () => {
    cy.title()
      .should('eq', 'Central de Atendimento ao Cliente TAT');
  });

  it('preenche os campos e envia formulário', () => {
    /// preenche nome e compara se é o valor esperado
    cy.get('#firstName')
      .as('nome')
      .type('Bruno');
    cy.get('@nome')
      .should('have.value', 'Bruno');

    /// preenche sobrenome e compara se é o valor esperado
    cy.get('#lastName')
      .as('sobrenome')
      .type('Kitice');
    cy.get('@sobrenome')
      .should('have.value', 'Kitice');

    /// preenche email e compara se é o valor esperado
    cy.get('#email')
      .as('email')
      .type('brunokitice@gmail.com');
    cy.get('@email')
    .should('have.value', 'brunokitice@gmail.com');

    /// preenche telefone e compara se é o valor esperado
    cy.get('#phone')
      .as('phone')
      .type('34996344406');
    cy.get('@phone')
      .should('have.value', '34996344406');
    
    /// Select an <option> within a <select>.
    cy.get('#product')
      .as('blog')
      .select('blog')
    cy.get('@blog')
      .should('have.value', 'blog');

    cy.get('#product')
      .as('cursos')
      .select('cursos')
    cy.get('@cursos')
      .should('have.value', 'cursos');

    cy.get('#product')
      .as('mentoria')
      .select('mentoria')
    cy.get('@mentoria')
      .should('have.value', 'mentoria');

    cy.get('#product')
      .as('youtube')
      .select('youtube')
    cy.get('@youtube').should('have.value', 'youtube');
    
    /// Click a DOM element.
    /// By default, Cypress will error if you're trying to click multiple elements. By passing { multiple: true } Cypress will iteratively apply the click to each element and will also log to the Command Log multiple times.
    cy.get('#support-type > :nth-child(2) > input')
      .as('ajuda')
    cy.get('@ajuda')
      .check( {multiple: true })
      .should('have.value', 'ajuda')

    cy.get(':nth-child(3) > input')
      .as('elogio')
    cy.get('@elogio')
      .check( {multiple: true })
      .should('have.value', 'elogio')

    cy.get(':nth-child(4) > input')
      .as('feedback')
    cy.get('@feedback')
      .check( {multiple: true })
      .should('have.value', 'feedback')

    /// Check checkbox or radio elements.
    cy.get('#email-checkbox')
      .as('email')
    cy.get('@email')
      .check()
      .should('have.value', 'email')

    cy.get('#phone-checkbox')
      .as('phone')
    cy.get('@phone')
      .check()
      .should('have.value', 'phone')

    /// Type into a DOM element.
    cy.get('#open-text-area')
      .type(
      'Escrevendo em uma text-area com cypress.\nAAAAAAAAAAAAAAAAAAAAAA');

    /// clicar no botão de envio
    cy.get('.button')
      .as('enviar')
      .click();

    /// verifica se a mensagem de sucesso está visível
    cy.get('.success > strong')
      .as('msgsucesso')
      .should('be.visible');

    /// valida a mensagem de sucesso
    cy.get('@msgsucesso')
      .should('have.text', 'Mensagem enviada com sucesso.');
  });
});
