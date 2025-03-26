describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html');
  });

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
  });

  it('preenche os campos, envia formulário e valida mensagem de sucesso', () => {
    /// funcionalidades cypress
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwxyz0123456789', 10);
    /// preenche nome e compara se é o valor esperado
    cy.get('#firstName').as('nome').type('Bruno');
    cy.get('@nome').should('have.value', 'Bruno');
    /// preenche sobrenome e compara se é o valor esperado
    cy.get('#lastName').as('sobrenome').type('Kitice');
    cy.get('@sobrenome').should('have.value', 'Kitice');
    /// preenche email e compara se é o valor esperado
    cy.get('#email').as('email').type('brunokitice@gmail.com');
    cy.get('@email').should('have.value', 'brunokitice@gmail.com');
    /// preenche telefone e compara se é o valor esperado
    cy.get('#phone').as('phone').type('34996344406');
    cy.get('@phone').should('have.value', '34996344406');
    /// Select an <option> within a <select>
    cy.get('#product').as('blog').select('blog');
    cy.get('@blog').should('have.value', 'blog');
    cy.get('#product').as('cursos').select('cursos');
    cy.get('@cursos').should('have.value', 'cursos');
    cy.get('#product').as('mentoria').select('mentoria');
    cy.get('@mentoria').should('have.value', 'mentoria');
    cy.get('#product').as('youtube').select('youtube');
    cy.get('@youtube').should('have.value', 'youtube');
    /// click checkbox or radio elements
    /// Click a DOM element
    /// By default, Cypress will error if you're trying to click multiple elements. By passing { multiple: true } Cypress will iteratively apply the click to each element and will also log to the Command Log multiple times
    cy.get('#support-type > :nth-child(2) > input').as('ajuda');
    cy.get('@ajuda')
      .click({
        multiple: true,
      })
      .should('have.value', 'ajuda');
    cy.get(':nth-child(3) > input').as('elogio');
    cy.get('@elogio')
      .click({
        multiple: true,
      })
      .should('have.value', 'elogio');
    cy.get(':nth-child(4) > input').as('feedback');
    cy.get('@feedback')
      .click({
        multiple: true,
      })
      .should('have.value', 'feedback');
    /// click checkbox or radio elements
    cy.get('#email-checkbox').as('email');
    cy.get('@email').click().should('have.value', 'email');
    cy.get('#phone-checkbox').as('phone');
    cy.get('@phone').click().should('have.value', 'phone');
    /// Type into a DOM element
    cy.get('#open-text-area').as('textArea');
    cy.get('textArea').type(longText, { delay: 0 }).should('have.value', longText);
    /// Click no botão de envio
    cy.get('.button[type="submit"]').as('enviar').click();
    /// verifica se a mensagem de sucesso está visível
    cy.get('.success').as('msgsucesso').should('be.visible');
    /// valida a mensagem de sucesso
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').as('nome').type('Bruno');
    cy.get('#lastName').as('sobrenome').type('Kitice');
    cy.get('#email').as('email').type('brunokitice');
    cy.get('#phone').as('phone').type('34996344406');
    cy.get('#open-text-area').as('textArea');
    cy.get('textArea').type('teste');
    cy.get('.button[type="submit"]').as('enviar').click();
    cy.get('.error').as('msgerror').should('be.visible');
  });

  it('verifica se o telefone só aceita números', () => {
    cy.get('#phone').as('phone').type('qwrqwerzfasdfa.,-+').should('have.value', '');
  });

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').as('nome').type('Bruno');
    cy.get('#lastName').as('sobrenome').type('Kitice');
    cy.get('#email').as('email').type('brunokitice@gmail.com');
    cy.get('#phone-checkbox').as('phone').click();
    cy.get('#open-text-area').as('textArea');
    cy.get('textArea').type('teste');
    cy.get('.button[type="submit"]').as('enviar').click();
    cy.get('.error').as('msgerror').should('be.visible');
  });

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').as('nome').type('Bruno').should('have.value', 'Bruno').clear();
    cy.get('#lastName').as('sobrenome').type('Kitice').should('have.value', 'Kitice').clear();
    cy.get('#email')
      .as('email')
      .type('brunokitice@gmail.com')
      .should('have.value', 'brunokitice@gmail.com')
      .clear();
    cy.get('#phone').as('phone').type('34996344406').should('have.value', '34996344406').clear();
  });
});
