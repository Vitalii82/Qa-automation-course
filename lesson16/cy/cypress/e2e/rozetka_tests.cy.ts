/* eslint-disable unicorn/filename-case */
import { homePage } from '../support/HomePage';
import { searchPage } from '../support/SearchPage';
import { cartPage } from '../support/CartPage';
import { productPage } from '../support/ProductPage';

describe('Rozetka Website Tests', () => {

    // 1. Пошук продукту
    it('should search for a product and display results', () => {
        homePage.visit();
        homePage.searchProduct('Ноутбук');
        searchPage.getSearchResults().should('be.visible');
        searchPage.getFirstProductTitle().should('contain', 'Ноутбук');
    });

    // 2. Додавання товару до кошика
    it('should add the first product to the cart', () => {
        homePage.visit();
        homePage.searchProduct('Смартфон');
        searchPage.selectFirstProduct();
        productPage.addToCart();
        cartPage.getCartCounter().should('have.text', '1');
    });

    // 3. Перевірка наявності товару в кошику
    it('should display the added product in the cart', () => {
        homePage.visit();
        homePage.searchProduct('Ноутбук');
        searchPage.selectFirstProduct();
        productPage.addToCart();
        cartPage.open();
        cartPage.getCartItem().should('contain', 'Ноутбук');
    });

    // 4. Применення фільтру за ціною
    it('should apply the price filter and display products within the specified range', () => {
        homePage.visit();
        homePage.searchProduct('Смартфон');
        searchPage.applyPriceFilter(5000, 15000);
        cy.get('.goods-tile').each(($el) => {
            cy.wrap($el).find('.price').should('match', /^[5-9][0-9]{3,}/);
        });
    });

    // 5. Перевірка категорії товарів
    it('should filter products by category', () => {
        homePage.visit();
        cy.get('.category-menu').contains('Ноутбуки').click();
        cy.get('.category-products').should('be.visible');
        cy.get('.goods-tile').should('have.length.greaterThan', 0);
    });

    // 6. Перевірка сортування товарів за ціною
    it('should sort products by price ascending', () => {
        homePage.visit();
        homePage.searchProduct('Телевізор');
        cy.get('.sort-select').select('Ціна: від низької до високої');
        cy.get('.goods-tile').first().should('contain', 'від');
        cy.get('.goods-tile').last().should('contain', 'до');
    });

    // 7. Перевірка зміни мови на сайті
    it('should change the language to English and verify the language change', () => {
        homePage.visit();
        cy.get('.language-selector').click();
        cy.get('.language-list').contains('English').click();
        cy.get('h1').should('contain', 'Search results');
    });

});
