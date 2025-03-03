Cypress.Commands.add('visitBaseUrl', (path = '') => {
    const baseUrl = Cypress.env('ENV') === 'dev'
      ? 'https://dev.saucedemo.com'
      : 'https://www.saucedemo.com';  // Default to prod if not 'dev'
  
    cy.visit(`${baseUrl}${path}`);  // You can add a path after the base URL if needed
  });
  

  Cypress.Commands.add('userLogin', (username, password) => {
    cy.get('[data-test="username"]').clear().type(username);
    cy.get('[data-test="password"]').clear().type(password);
    cy.get('[data-test="login-button"]').click();
  });