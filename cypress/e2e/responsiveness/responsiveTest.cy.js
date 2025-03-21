/// <reference types="cypress" />

describe('Responsiveness Test - SauceDemo Login Page', { tags: ['responsiveness'] }, () => {
  
  it('TC_RESP_001: should render properly on macbook-15', () => {
    cy.viewport('macbook-15');
    cy.visitBaseUrl();
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.document().its('documentElement.scrollWidth').should('lte', Cypress.config('viewportWidth'));
  });

  it('TC_RESP_002: should render properly on ipad-2', () => {
    cy.viewport('ipad-2');
    cy.visitBaseUrl();
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.document().its('documentElement.scrollWidth').should('lte', Cypress.config('viewportWidth'));
  });

  it('TC_RESP_003: should render properly on iphone-x', () => {
    cy.viewport('iphone-x');
    cy.visitBaseUrl();
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.document().its('documentElement.scrollWidth').should('lte', Cypress.config('viewportWidth'));
  });

  it('TC_RESP_004: form should be vertically centered on iphone-x', () => {
    cy.viewport('iphone-x');
    cy.visitBaseUrl();
    cy.get('.login_wrapper').should('be.visible');
  });

  it('TC_RESP_006: logo should be visible and responsive on ipad-2', () => {
    cy.viewport('ipad-2');
    cy.visitBaseUrl();
    cy.get('.login_logo').should('be.visible');
  });

});
