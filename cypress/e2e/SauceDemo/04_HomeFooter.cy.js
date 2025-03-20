///<reference types = 'cypress'/>

import HomeFooter from "../../support/pages/components/HomeFooter";



describe ('Sauce Demo - [Home Footer]',()=>{

    beforeEach('Navigate to homepage',()=>{
        cy.visitBaseUrl();
    })
    
    it('TC001:  Verify footer contains accepted usernames', () =>{
        HomeFooter.verifyFooterContainsUsernames();
    })

    it('TC001:  Verify footer contains accepted usernames', () =>{
        HomeFooter.verifyFooterContainsPasswords();
    })

})