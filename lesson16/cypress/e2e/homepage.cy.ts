import HomePage from '../support/pageObjects/HomePage';

describe('Rozetka Shopping Flow', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('Searches for multiple products', function () {
    cy.fixture('products').then((data) => {
      data.forEach((product: string) => {
        HomePage.searchProduct(product);
        cy.wait(2000);
      });
    });
  });

  it('Takes a screenshot after adding to cart', () => {
    HomePage.searchProduct('Ноутбук');
    HomePage.selectFirstProduct();
    HomePage.addToCart();
    HomePage.openCart();
    cy.screenshot('cart-screenshot');
  });
});