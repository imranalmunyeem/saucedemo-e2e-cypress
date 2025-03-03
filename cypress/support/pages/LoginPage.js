class LoginPage {
    // Selectors
    elements = {
      usernameInput: () => cy.get('[data-test="username"]'),
      passwordInput: () => cy.get('[data-test="password"]'),
      loginButton: () => cy.get('[data-test="login-button"]'),
      pageTitle: () => cy.get('[data-test="title"]'),
      errorMessage: () => cy.get('[data-test="error"]'),
    };
  
    // Actions
    visit() {
      cy.visitBaseUrl();
    }
  
    enterUsername(username) {
      this.elements.usernameInput().clear().type(username);
    }
  
    enterPassword(password) {
      this.elements.passwordInput().clear().type(password);
    }
  
    clickLogin() {
      this.elements.loginButton().click();
    }
  
    verifyLoginSuccess() {
      this.elements.pageTitle().should('have.text', 'Products');
    }
  
    verifyLoginFailure(expectedMessage) {
      this.elements.errorMessage().should('be.visible').and('contain', expectedMessage);
    }
  }
  
  export default new LoginPage();
  