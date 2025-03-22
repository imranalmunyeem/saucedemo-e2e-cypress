import * as XLSX from 'xlsx';

Cypress.Commands.add('visitBaseUrl', (path = '') => {
    const baseUrl = Cypress.env('ENV') === 'dev'
      ? 'https://dev.saucedemo.com'
      : 'https://www.saucedemo.com';  // Default to prod if not 'dev'
  
    cy.visit(`${baseUrl}${path}`);  // You can add a path after the base URL if needed
  });
  

  Cypress.Commands.add('userLogin', () => {
    cy.get('[data-test="username"]').clear().type('standard_user');
    cy.get('[data-test="password"]').clear().type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="logout-sidebar-link"]').click();
  });
  

  Cypress.Commands.add('logBug', (testCaseId, issueDescription, screenshotPath = '') => {
    cy.task('writeBugReport', { testCaseId, issueDescription, screenshotPath });
  });

  Cypress.Commands.add('logTestStatus', () => {
    cy.log('--- Test Execution Completed ---');
    if (Cypress.env('testFailed')) {
      cy.log('❌ Test Failed');
    } else {
      cy.log('✅ Test Passed');
    }
  });
  
  