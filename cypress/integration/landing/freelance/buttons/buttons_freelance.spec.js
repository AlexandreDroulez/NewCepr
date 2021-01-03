describe('test click and redirect button form freelance', function() {
  it('Logo', function() {
    cy.visit(`/freelance`);
    cy.get('[data_test_id="button_navBar_logo"]').click();
    cy.url().should('eq', 'http://localhost:4000/');
  });
  // it('calculator', function() {
  //   cy.visit(`/freelance`);
  //   cy.get('[datatestid="button_navBar_calculator"]').click();
  //   cy.url().should('eq', 'http://localhost:4000/');
  // });
});
