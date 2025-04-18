import { Page, expect } from '@playwright/test';

export class Header {
    private page: Page;
    private headerLocator = 'header';
    private logoLocator = '#logo';
    private contactModalLocator = '#exampleModal';
    private aboutUsModalLocator = '#videoModal';
    private loginModalLocator = '#logInModal';
    private signUpModalLocator = '#signInModal';

    public constructor(page: Page) {
        this.page = page;
    }

    public async verifyHeaderVisible(): Promise<void> {
        await expect(this.page.locator(this.headerLocator)).toBeVisible();
    }

    public async clickLogo(): Promise<void> {
        await this.page.locator(this.logoLocator).click();
    }

    public async openContactModal(): Promise<void> {
        await this.page.locator('#contact').click();
    }

    public async closeContactModal(): Promise<void> {
        await this.page.locator(`${this.contactModalLocator} button.close`).click();
    }

    public async openAboutUsModal(): Promise<void> {
        await this.page.locator('#about').click();
    }

    public async closeAboutUsModal(): Promise<void> {
        await this.page.locator(`${this.aboutUsModalLocator} button.close`).click();
    }

    public async openLoginModal(): Promise<void> {
        await this.page.locator('#login').click();
    }

    public async closeLoginModal(): Promise<void> {
        await this.page.locator(`${this.loginModalLocator} button.close`).click();
    }

    public async openSignUpModal(): Promise<void> {
        await this.page.locator('#signup').click();
    }

    public async closeSignUpModal(): Promise<void> {
        await this.page.locator(`${this.signUpModalLocator} button.close`).click();
    }
}
