/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
class CartPage {
    open() {
        cy.get('.cart-link').click();
    }

    getCartItem() {
        return cy.get('.cart-product');
    }

    removeFromCart() {
        cy.get('.cart-product__remove').click();
    }

    getCartCounter() {
        return cy.get('.cart-counter');
    }
}

export const cartPage = new CartPage();
