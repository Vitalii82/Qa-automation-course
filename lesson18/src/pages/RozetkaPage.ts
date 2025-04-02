
import { Page, Locator } from '@playwright/test';

export class RozetkaPage {
    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    // Гетери для локаторів
    public get header(): Locator {
        return this.page.locator('header');
    }

    public get menuCategories(): Locator {
        return this.page.locator('.menu-categories');
    }

    public get authModal(): Locator {
        return this.page.locator('.auth-modal');
    }

    public get footer(): Locator {
        return this.page.locator('footer');
    }

    public get languageSwitcherPopup(): Locator {
        return this.page.locator('.language-switcher-popup');
    }

    public get promoSection(): Locator {
        return this.page.locator('.promo-section');
    }

    public get wishlistNotification(): Locator {
        return this.page.locator('.wishlist-notification');
    }

    public get comparisonNotification(): Locator {
        return this.page.locator('.comparison-notification');
    }

    public get productCount(): Locator {
        return this.page.locator('.product-count');
    }

    get cartItemsCount(): Locator {
        return this.page.locator('.cart-items-count');
    }

    // Методи для взаємодії з елементами
    async navigate() {
        await this.page.goto('https://rozetka.com.ua/');
    }

    async searchForProduct(query: string) {
        await this.page.fill('.search-input', query);
        await this.page.press('.search-input', 'Enter');
    }

    async openFirstProduct() {
        await this.page.locator('.product-item:first-child').click();
    }

    async addToCart() {
        await this.page.locator('.add-to-cart-button').click();
    }

    async goToCart() {
        await this.page.locator('.cart-icon').click();
    }

    async openCatalog() {
        await this.page.locator('.catalog-button').click();
    }

    async openLoginPopup() {
        await this.page.locator('.login-button').click();
    }

    async switchLanguage() {
        await this.page.locator('.language-switcher').click();
    }

    async filterByBrand(brand: string) {
        await this.page.locator('.brand-filter').selectOption({ label: brand });
    }

    async openContactsPage() {
        await this.page.locator('.contacts-link').click();
    }

    async addToWishlist() {
        await this.page.locator('.add-to-wishlist-button').click();
    }

    async goToCheckout() {
        await this.page.locator('.checkout-button').click();
    }

    async openStoresPage() {
        await this.page.locator('.stores-link').click();
    }

    async openBlogPage() {
        await this.page.locator('.blog-link').click();
    }

    async openTrackingPage() {
        await this.page.locator('.tracking-link').click();
    }

    async openHelpCenter() {
        await this.page.locator('.help-center-link').click();
    }
}
