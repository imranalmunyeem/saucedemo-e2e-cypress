///<reference types = 'cypress'/>

describe('Security Test - XSS Injection',{ tags: ['security'] }, () => {
    it('Should not allow XSS attacks', () => {
      cy.visitBaseUrl();
      cy.get('[data-test="username"]').type('<script>alert(1)</script>');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.on('window:alert', (str) => {
        throw new Error('XSS Detected: ' + str);
      });
    });
  });
  