///<reference types = 'cypress'/>

describe('Security Test - Brute Force Login',{ tags: ['security'] },()=>{
    it('Should lock account after multiple failed login attempts',()=>{
        for(let i=0; i<10; i++){
            cy.visitBaseUrl();
            cy.get('[data-test="username"]').type('standard_user');
            cy.get('[data-test="password"]').type('wrong_password' + i);
            cy.get('[data-test="login-button"]').click()
        }
        cy.get('[data-test="error"]').should('contain', 'too many login attempts');
    })
})