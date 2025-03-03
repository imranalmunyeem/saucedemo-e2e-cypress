describe('Health Check for Environments', () => {
    const env = Cypress.env('ENV') || 'prod'; // Default to prod if not set
    const baseUrl = env === 'dev' ? 'https://dev.saucedemo.com' : 'https://www.saucedemo.com';
  
    it(`should verify ${env} URL is reachable`, () => {
      cy.request(baseUrl).then((response) => {
        expect(response.status).to.eq(200); // Ensure it returns 200 OK
      });
    });
  });
  