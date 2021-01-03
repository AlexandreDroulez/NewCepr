describe('First result google search legration.io', function() {
  it('First result google search legration.io', function() {
    cy.visit('https://www.duckduckgo.com/');
    cy.get('#search_form_input_homepage').type('legratin.io');
    cy.get('#search_button_homepage').click();
    cy.get('#web_content_wrapper').contains('legratin.io - Le réseau sélectif freelance 100% Tech');
  });
});
