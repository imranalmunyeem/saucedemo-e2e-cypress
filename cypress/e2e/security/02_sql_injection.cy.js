///<reference types = 'cypress'/>

describe('Security Test - SQL Injection in Login', { tags: ['security'] },() => {
    it('Should not allow SQL Injection in login fields', () => {
      cy.visitBaseUrl();
      cy.get('[data-test="username"]').type("' OR 1=1 --");
      cy.get('[data-test="password"]').type("password");
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('be.visible'); // Should not bypass login
    });
  });
  