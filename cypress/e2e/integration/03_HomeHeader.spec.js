///<reference types = 'cypress'/>

import HomeHeader from "../../support/pages/components/HomeHeader";

describe ('Sauce Demo - [Home Header]',()=>{
    it('TC001: Header should contain Swag Labs Logo and Text',()=>{
        cy.visitBaseUrl();
        HomeHeader.verifyHeaderLogo();
    })
})