import ProductPage from '../../support/pages/ProductPage';

describe('Sauce Demo - [PRODUCT PAGE]', () => {
  beforeEach(() => {
    // Using the custom login command to log in
    cy.visitBaseUrl();
    cy.userLogin('standard_user', 'secret_sauce');  // Replace with your credentials
  });

  it('TC_004: Verify all products load correctly', () => {
    ProductPage.verifyProductList();
    ProductPage.verifyProductNameAndPrice();
  });

  it('TC_005: Sort products (by price low to high)', () => {
    ProductPage.sortProductsByPriceLowToHigh();
  });

  it('TC_006: Add product to cart', () => {
    ProductPage.addProductToCart();
    ProductPage.verifyCartBadge('1');
  });

  it('TC_008: Verify checkout process', () => {
    // Add product to the cart
    ProductPage.addProductToCart();
    ProductPage.verifyCartBadge('1');  // Verify cart contains 1 product

    // Navigate to the cart and proceed to checkout
    ProductPage.navigateToCart();
    ProductPage.proceedToCheckout();

    // Fill checkout form and complete the checkout process
    ProductPage.fillCheckoutDetails('John', 'Doe', '12345');
    ProductPage.clickOnContinue();
    ProductPage.finishCheckout();

    // Verify successful checkout
    ProductPage.verifyCheckoutCompletion();
  });
});
