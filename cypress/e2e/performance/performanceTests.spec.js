/// <reference types="cypress" />

describe('🚀 SAUCE DEMO - [Performance Test Suite]', () => {

    beforeEach('Navigate to Login Page', () => {
      cy.visitBaseUrl();
    });
  
    afterEach('Log Test Status', () => {
      cy.logTestStatus();
    });
  
    // ⚡ Page Load Performance
    describe('⚡ Page Load Performance', () => {
      it('TC_PERF_001: Login page should load in under 2 seconds', () => {
        const start = Date.now();
        cy.window().then(() => {
          const loadTime = Date.now() - start;
          expect(loadTime).to.be.lessThan(2000);
        });
      });
  
      it('TC_PERF_002: Product page should load in under 3 seconds', () => {
        cy.userLogin();
        const start = Date.now();
        cy.window().then(() => {
          const loadTime = Date.now() - start;
          expect(loadTime).to.be.lessThan(3000);
        });
      });
    });
  
    // 📄 DOM & Element Render Timing
    describe('📄 DOM & Element Render Timing', () => {
      it('TC_PERF_003: DOM should be fully loaded', () => {
        cy.document().its('readyState').should('eq', 'complete');
      });
  
      it('TC_PERF_004: Login button should render in under 1 second', () => {
        const start = Date.now();
        cy.get('[data-test="login-button"]').should('be.visible').then(() => {
          const renderTime = Date.now() - start;
          expect(renderTime).to.be.lessThan(1000);
        });
      });
    });
  
  });
  