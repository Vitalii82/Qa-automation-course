import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main-page';
import { ProductPage } from '../src/pages/product-page';
import { CartPage } from '../src/pages/cart-page';
import { LoginPage } from '../src/pages/login-page';

test.describe('Demoblaze UI Tests', () => {
    let mainPage: MainPage;
    let productPage: ProductPage;
    let cartPage: CartPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page);
        await mainPage.goto();
    });

    test('01: Main page - header and footer are visible', async () => {
        await mainPage.verifyHeaderAndFooterVisible();
    });

    test('02: Main page - product cards are visible', async () => {
        await expect(await mainPage.getProductCardsCount()).toBeGreaterThan(0);
    });

    test('03: Main page - navigate to product page by clicking card', async () => {
        await mainPage.clickOnProductByName('Samsung galaxy s6');
        await expect(await productPage.getProductTitle()).toContain('Samsung galaxy s6');
    });

    test('04: Product page - header and footer are visible', async () => {
        await mainPage.clickOnProductByName('Nokia lumia 1520');
        await productPage.verifyHeaderAndFooterVisible();
    });

    test('05: Product page - add product to cart', async ({ page }) => {
        await mainPage.clickOnProductByName('Nokia lumia 1520');
        await productPage.addToCart();
        await page.on('dialog', dialog => dialog.accept());
    });

    test('06: Cart page - navigate and verify product is added', async ({ page }) => {
        await mainPage.clickOnProductByName('Samsung galaxy s6');
        await productPage.addToCart();
        await page.on('dialog', dialog => dialog.accept());
        await cartPage.goto();
        expect(await cartPage.isProductInCart('Samsung galaxy s6')).toBeTruthy();
    });

    test('07: Cart page - header and footer are visible', async () => {
        await cartPage.goto();
        await cartPage.verifyHeaderAndFooterVisible();
    });

    test('08: Header - logo redirects to home', async ({ page }) => {
        await mainPage.header.clickLogo();
        await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    });

    test('09: Header - contact modal opens and closes', async () => {
        await mainPage.header.openContactModal();
        await expect(mainPage.page.locator('#exampleModal')).toBeVisible();
        await mainPage.header.closeContactModal();
    });

    test('10: Header - about us modal opens and closes', async () => {
        await mainPage.header.openAboutUsModal();
        await expect(mainPage.page.locator('#videoModal')).toBeVisible();
        await mainPage.header.closeAboutUsModal();
    });

    test('11: Header - login modal opens and closes', async () => {
        await mainPage.header.openLoginModal();
        await expect(mainPage.page.locator('#logInModal')).toBeVisible();
        await mainPage.header.closeLoginModal();
    });

    test('12: Header - signup modal opens and closes', async () => {
        await mainPage.header.openSignUpModal();
        await expect(mainPage.page.locator('#signInModal')).toBeVisible();
        await mainPage.header.closeSignUpModal();
    });

    test('13: Footer - copyright visible', async () => {
        await expect(mainPage.footer.footerText).toContainText('Copyright');
    });

    test('14: Footer - social media icons visible', async () => {
        await expect(mainPage.footer.socialIcons.first()).toBeVisible();
    });

    test('15: Login - valid user can login', async () => {
        await loginPage.login('testuser', 'testpassword'); // Замінити на реальні облікові дані
        await loginPage.verifyLoggedIn();
    });

    test('16: Login - user can logout after login', async () => {
        await loginPage.login('testuser', 'testpassword');
        await loginPage.verifyLoggedIn();
        await loginPage.logout();
        await expect(loginPage.page.locator('#login2')).toBeVisible();
    });
});
