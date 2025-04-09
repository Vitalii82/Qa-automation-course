import { Page, Locator } from '@playwright/test';

export class MainPage {
    private page: Page;
    private loginButton: Locator;
    private logoutButton: Locator;
    private cartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('#login-button');
        this.logoutButton = page.locator('#logout-button');
        this.cartButton = page.locator('#cart-button');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.demoblaze.com');
    }

    public async login(): Promise<void> {
        await this.loginButton.click();
    }

    public async logout(): Promise<void> {
        await this.logoutButton.click();
    }

    public async openCart(): Promise<void> {
        await this.cartButton.click();
    }
}
