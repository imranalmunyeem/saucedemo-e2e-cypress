///<reference types = 'cypress'/>

describe('Sauce Demo - [Product Module]', ()=>{

    beforeEach('Run befor each test',()=>{
        cy.visitBaseUrl();
        cy.userLogin();
    })

    afterEach('Run after each test',()=>{
        cy.logout()
        cy.log('Test is completed')
    })

    it('TC001: Product page url verification',()=>{
        cy.url().should('contain','/inventory.html');
        
    })

    it('TC002: Product description verification',()=>{
        cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').click()
        cy.get('[data-test="inventory-item-desc"]').contains('American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
    })

    it('TC003: Prices are sorted high to low', () => {
        cy.get('.product_sort_container').select('hilo');

        cy.get('[data-test="inventory-item-price"]').then(($els) => {
          const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
          const sorted = [...prices].sort((a, b) => b - a); // high to low
          expect(prices).to.deep.equal(sorted);
        });
      });
      
    it('TC004: Prices are sorted low to high', () => {
        cy.get('.product_sort_container').select('lohi');

        cy.get('[data-test="inventory-item-price"]').then(($els) => {
            const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
            const sorted = [...prices].sort((a, b) => a - b); // low to high
            expect(prices).to.deep.equal(sorted);
        });
    });

    it('TC005: Products are sorted by name Z to A', () => {
        cy.get('.product_sort_container').select('za');

        cy.get('.inventory_item_name').then(($els) => {
        const names = [...$els].map(el => el.innerText.trim());
        const sorted = [...names].sort((a, b) => b.localeCompare(a)); // Z to A
        expect(names).to.deep.equal(sorted);
        });
    });

    it('TC006: Products are sorted by name A to Z', () => {
        cy.get('.product_sort_container').select('az');
      
        cy.get('.inventory_item_name').then(($els) => {
          const names = [...$els].map(el => el.innerText.trim());
          const sorted = [...names].sort((a, b) => a.localeCompare(b)); // A to Z
          expect(names).to.deep.equal(sorted);
        });
      });      

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
      
      it('TC009: Adds 3 items to the cart dynamically', () => {
     
        // Define products
        const products = [
          'sauce-labs-backpack',
          'sauce-labs-bike-light',
          'sauce-labs-bolt-t-shirt'
        ];
      
        // Add each product to cart
        products.forEach((product) => {
          cy.get(`[data-test="add-to-cart-${product}"]`).click();
        });
      
        // Assert cart shows correct number
        cy.get('.shopping_cart_badge').should('have.text', products.length.toString());
      
        // Assert remove buttons exist
        products.forEach((product) => {
          cy.get(`[data-test="remove-${product}"]`).should('exist');
        });
      
      });

      it('TC010: Removes 3 items from the cart dynamically', () => {
      
        // Define products
        const products = [
          'sauce-labs-backpack',
          'sauce-labs-bike-light',
          'sauce-labs-bolt-t-shirt'
        ];
      
        // Now remove each item
        products.forEach((product) => {
          cy.get(`[data-test="remove-${product}"]`).click();
        });
      
        // Confirm cart badge no longer exists (empty cart)
        cy.get('.shopping_cart_badge').should('not.exist');
      
      });

      it('TC011: Checkout verification', () => {
     
        // Define products
        const products = [
          'sauce-labs-backpack',
          'sauce-labs-bike-light',
          'sauce-labs-bolt-t-shirt'
        ];
      
        // Add each product to cart
        products.forEach((product) => {
          cy.get(`[data-test="add-to-cart-${product}"]`).click();
        });

        cy.get('[data-test="shopping-cart-link"]').click();
      
        // Click on checkout
        cy.get('[data-test="checkout"]').click();

        //Input user details
        cy.get('[data-test="firstName"]').type('Tester')
        cy.get('[data-test="lastName"]').type('testerlastname')
        cy.get('[data-test="postalCode"]').type('testpostcode')

        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="complete-header"]').should('contain.text', 'Thank you for your order!')
      });
      
      
})
