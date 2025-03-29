/* eslint-disable unicorn/filename-case */
export class HomePage {
    public visit(): void {
        cy.visit('https://example.com');
    }

    public searchProduct(productName: string): void {
        cy.get('.search-input').type(productName);
        cy.get('.search-button').click();
    }
}

export const homePage = new HomePage();
