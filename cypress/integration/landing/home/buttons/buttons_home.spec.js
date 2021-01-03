describe('test click and redirect button form home', function() {
  it('button freelance', function() {
    cy.visit(`/`);
    cy.get('[data_test_id=button_freelance]').click();
    cy.url().should('match', /freelance/);
  });
});

describe('test click and redirect button form home', function() {
  it('button freelance', function() {
    cy.visit(`/`);
    cy.get('[data_test_id=button_company]').click();
    cy.url().should('match', /entreprise/);
  });
});

describe('test Click cookie consent', function() {
  it('cookie', function() {
    cy.visit(`/`);
    cy.get('#rcc-confirm-button').click();
  });
});

describe('test crips open ', function() {
  it('button crips', function() {
    cy.visit(`/`);
    cy.get('#rcc-confirm-button').click();
    cy.get('.cc-unoo').click();
    cy.get('.cc-1asz').click();
  });
});
