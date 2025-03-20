///<reference types = 'cypress'/>

describe('Security Test - Session Hijacking', { tags: ['security'] },() => {
    it('Should invalidate session after logout', () => {
      cy.visitBaseUrl()
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      // Capture the session token
      cy.window().then((win) => {
        const sessionToken = win.localStorage.getItem('session_token');
        expect(sessionToken).to.exist;
  
        // Logout
        cy.get('[data-test="logout-sidebar-link"]').click();
  
        // Try to restore the session
        cy.window().then((win) => {
          win.localStorage.setItem('session_token', sessionToken);
          cy.reload();
          cy.url().should('include', '/login'); // Should not restore session
        });
      });
    });
  });
  