import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private page: Page;
    private loginButton: Locator;
    private logoutButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator('#login-button');
        this.logoutButton = page.locator('#logout-button');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.demoblaze.com');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.page.locator('#login-username').fill(username);
        await this.page.locator('#login-password').fill(password);
        await this.loginButton.click();
    }

    public async logout(): Promise<void> {
        await this.logoutButton.click();
    }
}
