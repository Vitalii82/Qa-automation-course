class HomePage {
  visit() {
    cy.visit('https://rozetka.com.ua/');
  }

  searchProduct(product: string) {
    cy.get('input.search-form__input').type(`${product}{enter}`);
  }

  selectFirstProduct() {
    cy.get('.goods-tile__heading').first().click();
  }

  addToCart() {
    cy.get('button.buy-button').click();
  }

  openCart() {
    cy.get('button.header-actions__button_type_cart').click();
  }

  checkCartItem() {
    cy.get('.cart-product__title').should('be.visible');
  }
}
export default new HomePage();