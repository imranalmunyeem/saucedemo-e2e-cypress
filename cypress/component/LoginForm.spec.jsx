/// <reference types="cypress" />
import React from 'react';
import LoginForm from '../../src/components/loginform';

describe('LoginForm Component', () => {
  it('should render all form elements', () => {
    cy.mount(<LoginForm />);
    cy.get('[data-test="username"]').should('exist');
    cy.get('[data-test="password"]').should('exist');
    cy.get('[data-test="login-button"]').should('exist');
  });
});
