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
    LoginPage.enterPassword(credentials.valid_password_1);
    LoginPage.clickLogin();
    LoginPage.verifyLoginSuccess();
  });

  it('TC_002:Login with invalid credentials', () => {
    LoginPage.enterUsername(credentials.invalid_username);
    LoginPage.enterPassword(credentials.invalid_password);
    LoginPage.clickLogin();
    
    // Verify error message
    LoginPage.verifyLoginFailure('Username and password do not match');
  });

  it('TC_003: Login with empty fields', () => {
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="password"]').clear();
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Username is required');
  });

});
