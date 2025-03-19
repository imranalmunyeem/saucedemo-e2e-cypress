///<reference types = 'cypress'/>


class HomeHeader{

    //Selectors
    elements = {
        headerLogo :() => cy.get('.login_logo')
    }

    //Actions
    verifyHeaderLogo(){
        this.elements.headerLogo().should('be.visible').contains('Swag Labs')
    }
}

export default new HomeHeader();