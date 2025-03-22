class ProductPage {

    // -------------------Selectors-----------------------
    get productPageTitle(){
        return cy.get('[data-test="title"]');
    }

    get sortDropdown() {
      return cy.get('.product_sort_container');
    }
  
    get itemDescription() {
      return cy.get('[data-test="inventory-item-desc"]');
    }
  
    get itemLink() {
      return cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]');
    }
  
    get productPrices() {
      return cy.get('[data-test="inventory-item-price"]');
    }
  
    get productNames() {
      return cy.get('.inventory_item_name');
    }
  
    get cartBadge() {
      return cy.get('.shopping_cart_badge');
    }
  
    get cartLink() {
      return cy.get('[data-test="shopping-cart-link"]');
    }
  
    get checkoutBtn() {
      return cy.get('[data-test="checkout"]');
    }
  
    get firstNameInput() {
      return cy.get('[data-test="firstName"]');
    }
  
    get lastNameInput() {
      return cy.get('[data-test="lastName"]');
    }
  
    get postalCodeInput() {
      return cy.get('[data-test="postalCode"]');
    }
  
    get continueBtn() {
      return cy.get('[data-test="continue"]');
    }
  
    get finishBtn() {
      return cy.get('[data-test="finish"]');
    }
  
    get completeHeader() {
      return cy.get('[data-test="complete-header"]');
    }

  
    //----------------------------------Actions------------------------------------
    productPageTitleVerification(){
        this.productPageTitle.should('contain', 'Products');
    } 

    selectSortOption(option) {
      this.sortDropdown.select(option);
    }
  
    openItemDetails() {
      this.itemLink.click();
    }
  
    verifyDescriptionContains(text) {
      this.itemDescription.should('contain', text);
    }
  
    addProductsToCart(products) {
      products.forEach((product) => {
        cy.get(`[data-test="add-to-cart-${product}"]`).click();
      });
    }
  
    removeProductsFromCart(products) {
      products.forEach((product) => {
        cy.get(`[data-test="remove-${product}"]`).click();
      });
    }
  
    goToCart() {
      this.cartLink.click();
    }
  
    startCheckout(firstName, lastName, postalCode) {
      this.checkoutBtn.click();
      this.firstNameInput.type(firstName);
      this.lastNameInput.type(lastName);
      this.postalCodeInput.type(postalCode);
      this.continueBtn.click();
    }
  
    completeOrder() {
      this.finishBtn.click();
    }
  
    verifyOrderSuccessMessage() {
      this.completeHeader.should('contain.text', 'Thank you for your order!');
    }
  
    verifyCartItemCount(expectedCount) {
      this.cartBadge.should('have.text', expectedCount.toString());
    }
  
    verifyCartIsEmpty() {
      this.cartBadge.should('not.exist');
    }
  
    verifyPricesSorted(order = 'asc') {
      this.productPrices.then(($els) => {
        const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
        const sorted = [...prices].sort((a, b) => order === 'asc' ? a - b : b - a);
        expect(prices).to.deep.equal(sorted);
      });
    }
  
    verifyNamesSorted(order = 'asc') {
      this.productNames.then(($els) => {
        const names = [...$els].map(el => el.innerText.trim());
        const sorted = [...names].sort((a, b) => order === 'asc' ? a.localeCompare(b) : b.localeCompare(a));
        expect(names).to.deep.equal(sorted);
      });
    }
  }
  
  export default new ProductPage();
  