import { Page, Locator } from '@playwright/test';

export class Footer {
    public footerText: Locator;
    public socialIcons: Locator;

    public constructor(public page: Page) {
        this.footerText = page.locator('footer .footer .footer-text');
        this.socialIcons = page.locator('footer .footer .social-icons i'); // або уточнити селектор
    }

    public async verifyVisible(): Promise<boolean> {
        const textVisible = await this.footerText.isVisible();
        const iconsVisible = await this.socialIcons.first().isVisible();
        return textVisible && iconsVisible;
    }
}
