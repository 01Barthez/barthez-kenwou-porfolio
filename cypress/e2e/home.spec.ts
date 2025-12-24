describe('Home page', () => {
  beforeEach(() => {
    // Simple API mock example: adjust the route to your real API endpoints
    cy.intercept('GET', '/api/**', { statusCode: 200, body: {} });
    cy.visit('/');
    cy.injectAxe();
  });

  it('loads and is accessible', () => {
    cy.get('body').should('exist');
    cy.checkA11y();
  });
});
