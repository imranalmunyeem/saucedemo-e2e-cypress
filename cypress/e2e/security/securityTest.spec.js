/// <reference types="cypress" />

describe('🛡️ SAUCE DEMO - [Security Test Suite]', () => {

    beforeEach('Navigate to URL',() => {
      cy.visitBaseUrl();
    });

    afterEach('Run after each test',()=>{
        cy.logTestStatus();
      })
  
    // 🔐 Brute Force Attack
    describe('🔐 Brute Force Login Protection', () => {
      it('TC_SEC_001: Should lock account after multiple failed login attempts', () => {
        for (let i = 0; i < 10; i++) {
          cy.userLogin(); // assumes this command tries with wrong creds
        }
        cy.get('[data-test="error"]').should('contain', 'too many login attempts');
      });
    });
  
    // 🛑 SQL Injection
    describe('🛑 SQL Injection in Login Fields', () => {
      it('TC_SEC_002: Should not allow SQL Injection in login fields', () => {
        cy.get('[data-test="username"]').type("' OR 1=1 --");
        cy.get('[data-test="password"]').type("password");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible');
      });
    });
  
    // ⚠️ XSS Injection
    describe('⚠️ XSS Injection in Login Fields', () => {
      it('TC_SEC_003: Should not allow XSS attacks', () => {
        cy.get('[data-test="username"]').type('<script>alert(1)</script>');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.on('window:alert', (str) => {
          throw new Error('XSS Detected: ' + str);
        });
      });
    });
  
    // 🔒 Session Hijacking
    describe('🔒 Session Hijacking Protection', () => {
      it('TC_SEC_004: Should invalidate session after logout', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
  
        cy.window().then((win) => {
          const sessionToken = win.localStorage.getItem('session_token');
          expect(sessionToken).to.exist;
  
          cy.get('[data-test="logout-sidebar-link"]').click();
  
          // Attempt to restore session
          cy.window().then((win) => {
            win.localStorage.setItem('session_token', sessionToken);
            cy.reload();
            cy.url().should('include', '/');
            cy.get('[data-test="login-button"]').should('be.visible');
          });
        });
      });
    });
  
    // 🧪 Input Validation
    describe('🧪 Input Boundary & Character Injection', () => {
      it('TC_SEC_005: Should handle excessively long inputs gracefully', () => {
        const longInput = 'A'.repeat(5000);
        cy.get('[data-test="username"]').type(longInput);
        cy.get('[data-test="password"]').type(longInput);
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible');
      });
  
      it('TC_SEC_006: Should handle special characters in inputs', () => {
        cy.get('[data-test="username"]').type('!@#$%^&*()_+');
        cy.get('[data-test="password"]').type('!@#$%^&*()_+');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('be.visible');
      });
    });
  
  });
  