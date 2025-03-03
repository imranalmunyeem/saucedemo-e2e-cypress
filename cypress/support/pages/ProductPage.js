class ProductPage {
    // Elements
    get productList() {
      return cy.get('.inventory_item');
    }
  
    get productName() {
      return cy.get('.inventory_item_name');
    }
  
    get productPrice() {
      return cy.get('.inventory_item_price');
    }
  
    get productSortDropdown() {
      return cy.get('.product_sort_container');
    }
  
    get addToCartButton() {
      return cy.get('.btn_inventory');
    }
  
    get cartBadge() {
      return cy.get('.shopping_cart_badge');
    }
  
    // Methods
    verifyProductList() {
      this.productList.should('have.length.greaterThan', 0);
    }
  
    verifyProductNameAndPrice() {
      this.productName.first().should('be.visible');
      this.productPrice.first().should('be.visible');
    }
  
    sortProductsByPriceLowToHigh() {
      this.productSortDropdown.select('Price (low to high)');
      this.productPrice.then(($prices) => {
        const prices = [...$prices].map(item => parseFloat(item.innerText.replace('$', '')));
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sortedPrices);
      });
    }
  
    addProductToCart() {
      this.addToCartButton.first().click();
    }
  
    verifyCartBadge(cartCount) {
      this.cartBadge.should('have.text', cartCount);
    }
  
    removeProductFromCart() {
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    }

    navigateToCart() {
      cy.get('.shopping_cart_link').click();  // Navigate to the cart
    }
  
    proceedToCheckout() {
      cy.get('[data-test="checkout"]').click();  // Click on checkout button
    }
  
    fillCheckoutDetails(firstName, lastName, postalCode) {
      cy.get('[data-test="firstName"]').type(firstName);  // Type first name
      cy.get('[data-test="lastName"]').type(lastName);    // Type last name
      cy.get('[data-test="postalCode"]').type(postalCode); // Type postal code
    }
  
    clickOnContinue() {
      cy.get('[data-test="continue"]').click();  // Complete checkout
    }
    
    finishCheckout() {
      cy.get('[data-test="finish"]').click();  // Complete checkout
    }

    verifyCheckoutCompletion() {
      cy.get('[data-test="complete-header"]').should('have.text', 'THANK YOU FOR YOUR ORDER');
    }
  }
  
  export default new ProductPage();
  