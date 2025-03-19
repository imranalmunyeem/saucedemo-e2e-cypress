import { faker } from '@faker-js/faker';
import LoginPage from '../../support/pages/LoginPage';

describe('Sauce Demo - [LOGIN]', () => {
  let credentials;

  beforeEach(() => {
    cy.fixture('login_credentials.json').then((data) => {
      credentials = data; // Load credentials before each test
    });
    LoginPage.visit();
  });

  it('TC_001:Login with valid credentials', () => {
    LoginPage.enterUsername(credentials.valid_username_1);
    LoginPage.enterPassword(credentials.valid_password);
    LoginPage.clickLogin();
    cy.get('[data-test="title"]').should('be.visible').and('contain','Products')
    
  });

  it('TC_002:Login with invalid credentials', () => {
    const randomUsername = faker.internet.userName();
    const randomPassword = faker.internet.password();

    LoginPage.enterUsername(randomUsername);
    LoginPage.enterPassword(randomPassword);
    LoginPage.clickLogin();

    LoginPage.verifyLoginFailure('Epic sadface: Username and password do not match'); 
    // This assumes the login will fail because Faker generates random, non-existing credentials
  });

  it('TC_003: Login with empty fields', () => {
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username is required');
  });

  it('TC_004: Login with empty username field', () => {
    cy.get('[data-test="username"]').clear();
    LoginPage.enterPassword(credentials.valid_password);
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username is required');
  });

  it('TC_005: Login with empty password fields', () => {
    LoginPage.enterUsername(credentials.valid_username_1);
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Password is required');
  });

});
