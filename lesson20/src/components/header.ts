import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class Header {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    private logo = 'a.navbar-brand';
    private contactLink = 'a[data-target="#exampleModal"]';
    private aboutUsLink = 'a[data-target="#videoModal"]';
    private loginLink = '#login2';
    private signUpLink = '#signin2';

    public async clickLogo(): Promise<void> {
        await this.page.click(this.logo);
    }

    public async openContactModal(): Promise<void> {
        await this.page.click(this.contactLink);
    }

    public async openAboutUsModal(): Promise<void> {
        await this.page.click(this.aboutUsLink);
    }

    public async openLoginModal(): Promise<void> {
        await this.page.click(this.loginLink);
    }

    public async openSignUpModal(): Promise<void> {
        await this.page.click(this.signUpLink);
    }

    public async verifyHeaderVisible(): Promise<void> {
        await expect(this.page.locator('header')).toBeVisible({ timeout: 5000 });
    }
}
