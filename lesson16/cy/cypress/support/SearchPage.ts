/* eslint-disable @typescript-eslint/explicit-member-accessibility */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

class SearchPage {
    getSearchResults() {
        return cy.get('.search-results');
    }

    getFirstProductTitle() {
        return cy.get('.goods-tile').first().find('.goods-tile__title');
    }

    selectFirstProduct() {
        cy.get('.goods-tile').first().click();
    }

    applyPriceFilter(min: number, max: number) {
        cy.get('.price-filter-inputs').within(() => {
            cy.get('[name="pricefrom"]').clear().type(min.toString());
            cy.get('[name="priceto"]').clear().type(max.toString());
        });
        cy.get('.filter-apply-button').click();
    }
}

export const searchPage = new SearchPage();
