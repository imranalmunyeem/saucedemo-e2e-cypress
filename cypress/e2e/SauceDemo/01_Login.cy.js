import { faker } from '@faker-js/faker';
import LoginPage from '../../support/pages/LoginPage';

describe('SAUCE DEMO - [USER AUTHENTICATION MODULE] - 🔐', () => {
  let credentials;

  beforeEach(() => {
    cy.fixture('login_credentials.json').then((data) => {
      credentials = data; // Load credentials before each test
    });
    LoginPage.visit();
  });

  afterEach('Run after each test',()=>{
    cy.logTestStatus();
  })

  // ---------------- ✅ VALID LOGIN ---------------------
  describe('🔐 Sauce Demo - [✅- Login Positive Tests]',()=>{
    it('TC_001:Login with valid credentials', () => {
      LoginPage.enterUsername(credentials.valid_username_1);
      LoginPage.enterPassword(credentials.valid_password);
      LoginPage.clickLogin();
      cy.get('[data-test="title"]').should('be.visible').and('contain','Products')
    });
  
  })
  // ----------------- ❌ INVALID LOGIN ---------------------
  describe('🔐 Sauce Demo - [❌- Login Negative Tests]',()=>{
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
  })

    // ---------------- ✅ VALID LOGOUT ---------------------
  describe('🔐 Sauce Demo - [✅- Logout Positive Tests]',()=>{
    it('TC_006:Logout verification', () => {
      cy.userLogin();
      cy.logout();
      cy.url().should('eq', 'https://www.saucedemo.com/');
    });
  }); 

  // ---------------- ✅ INVALID LOGOUT ---------------------
  describe('🔐 Sauce Demo - [❌- Logout Negative Tests]',()=>{
    it('TC_LOGOUT_001: Cannot access protected page after logout', () => {
      cy.userLogin();
      cy.logout();
      cy.visit('/inventory.html',{failOnStatusCode: false}); 
      cy.url().should('contain', 'saucedemo');        
    });

    it('TC_LOGOUT_003: Refresh after logout should stay on login page', () => {
      cy.userLogin();
      cy.logout();
      cy.reload();
      cy.url().should('eq', 'https://www.saucedemo.com/');
      cy.get('[data-test="login-button"]').should('be.visible');
    });
  });
});
