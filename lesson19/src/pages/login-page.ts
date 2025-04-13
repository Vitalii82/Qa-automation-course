import { Page, Locator, expect } from '@playwright/test';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export class LoginPage {
    public page: Page;
    public header: Header;
    public footer: Footer;
    private loginButton: Locator;
    private logoutButton: Locator;
    private loginModal: Locator;
    private usernameField: Locator;
    private passwordField: Locator;
    private submitLoginButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.header = new Header(page);
        this.footer = new Footer(page);

        this.loginButton = page.locator('#login2');
        this.logoutButton = page.locator('#logout2');
        this.loginModal = page.locator('#logInModal');
        this.usernameField = page.locator('#loginusername');
        this.passwordField = page.locator('#loginpassword');
        this.submitLoginButton = page.locator('#logInModal .btn-primary');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://www.demoblaze.com');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.loginButton.click();
        await expect(this.loginModal).toBeVisible();

        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitLoginButton.click();
    }

    public async logout(): Promise<void> {
        await this.logoutButton.click();
    }

    public async verifyLoggedIn(): Promise<void> {
        await expect(this.logoutButton).toBeVisible();
    }

    public async verifyHeaderAndFooterVisible(): Promise<void> {
        await this.header.verifyHeaderVisible();
        expect(await this.footer.verifyVisible()).toBeTruthy();
    }
}
