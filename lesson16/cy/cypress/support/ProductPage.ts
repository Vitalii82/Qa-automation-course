/* eslint-disable unicorn/filename-case */

class ProductPage {
    addToCart() {
        cy.get('.buy-button').click();
    }
}

export const productPage = new ProductPage();
