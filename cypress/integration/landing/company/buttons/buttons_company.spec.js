describe('test click and redirect button form company', function() {
  it('Logo', function() {
    cy.visit(`/entreprise`);
    cy.get('[data_test_id="button_navBar_logo"]').click();
    cy.url().should('eq', 'http://localhost:4000/');
  });
});
