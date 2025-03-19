///<reference types = 'cypress'/>



class HomeFooter {

    // Elements
    elements = {
        usernameCredentials : () => cy.get('[data-test="login-credentials"]'),
        passwordCredentials : () => cy.get('[data-test="login-password"]')
    }

    //Actions
    verifyFooterContainsUsernames(){
        this.elements.usernameCredentials().should('be.visible')
        .should('contain', 'standard_user')
        .and('contain', 'locked_out_user')
        .and('contain', 'problem_user')
        .and('contain', 'performance_glitch_user')
        .and('contain', 'error_user')
        .and('contain', 'visual_user');
    }

    verifyFooterContainsPasswords(){
        this.elements.passwordCredentials().should('be.visible')
        .should('contain', 'secret_sauce')
    }

}

export default new HomeFooter();