///<reference types = 'cypress'/>

import ProductPage from "../../support/pages/ProductPage";

describe('Sauce Demo - [Product Module] - 📦', ()=>{

    beforeEach('Run befor each test',()=>{
        cy.visitBaseUrl();
        cy.userLogin();
    })

    afterEach('Run after each test',()=>{
        cy.logout()
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.logTestStatus();
    })

    describe('🧪 Page Load and Description - [Product Module]', ()=>{
      it('TC001: Product page url verification',()=>{
        cy.url().should('contain', '/inventory');        
      })
  
      it('TC002: Product page title verification',()=>{
          ProductPage.productPageTitleVerification();        
      })
  
      it('TC003: Product description verification', () => {
        ProductPage.openItemDetails();
        ProductPage.verifyDescriptionContains(
          'American Apparel, 100% ringspun combed cotton, heather gray with red bolt.'
        );
      });
    })

    describe('🔃 Sorting Features - [Product Module]',()=>{
      it('TC004: Prices are sorted high to low', () => {
        ProductPage.selectSortOption('hilo');
        ProductPage.verifyPricesSorted('desc');
      });
    
      it('TC005: Prices are sorted low to high', () => {
        ProductPage.selectSortOption('lohi');
        ProductPage.verifyPricesSorted('asc');
      });
    
      it('TC006: Products are sorted by name Z to A', () => {
        ProductPage.selectSortOption('za');
        ProductPage.verifyNamesSorted('desc');
      });
    
      it('TC007: Products are sorted by name A to Z', () => {
        ProductPage.selectSortOption('az');
        ProductPage.verifyNamesSorted('asc');
      }); 
    })
  

    //   it('TC007: Adds multiple products to the cart', () => {
      
    //     // Adding 3 products using their button data-test values
    //     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    //     cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    //     cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
      
    //     // Assert cart has 3 items
    //     cy.get('[data-test="shopping-cart-link"]').click();
    //     cy.get('[data-test="item-quantity"]').should('have.text', '111');
    //     //cy.get('.shopping_cart_badge').should('have.text', '3');
    //   });

    //   it ('TC008: Adds multiple products to the cart', () => {

    //     // Removing 3 products using their button data-test values
    //     cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    //     cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    //     cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();
      
    //     // Assert cart has 3 items
    //     cy.get('[data-test="shopping-cart-link"]').click();
    //     cy.get('.shopping_cart_badge').should('not.exist');
    //   });
    

    describe('🛒 Cart Operations - [Product Module]',()=>{
      it('TC008: Adds 3 items to the cart dynamically', () => {
     
        // Define products
        const products = [
          'sauce-labs-backpack',
          'sauce-labs-bike-light',
          'sauce-labs-bolt-t-shirt'
        ];
      
        // Add each product to cart
        ProductPage.addProductsToCart(products)
        ProductPage.verifyCartItemCount('3');
      
      });

      it('TC009: Removes 3 items from the cart dynamically', () => {
      
        // Define products
        const products = [
          'sauce-labs-backpack',
          'sauce-labs-bike-light',
          'sauce-labs-bolt-t-shirt'
        ];
        
        // Add each product to cart
        ProductPage.addProductsToCart(products);
        ProductPage.removeProductsFromCart(products);
        ProductPage.verifyCartIsEmpty();
      
      });

      it('TC010: Checkout verification', () => {
     
        // Define products
        const products = [
          'sauce-labs-backpack',
          'sauce-labs-bike-light',
          'sauce-labs-bolt-t-shirt'
        ];

        ProductPage.addProductsToCart(products);
        ProductPage.goToCart();
        ProductPage.startCheckout('testfname','testlname','testcode')
        ProductPage.completeOrder();
        ProductPage.verifyOrderSuccessMessage();
      });
    })
})
