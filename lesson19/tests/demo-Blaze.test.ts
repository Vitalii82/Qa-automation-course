// eslint-disable-next-line unicorn/filename-case
import { test, expect } from '@playwright/test';
import { MainPage } from '../src/pages/main-page';
import { CartPage } from '../src/pages/cart-page';
import { LoginPage } from '../src/pages/login-page';

// Тест відкриття сайту та перевірки заголовка
test('Open DemoBlaze and check title', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    await expect(page).toHaveTitle('STORE');
});

// Тест переходу на сторінку товару
test('Navigate to product page', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    const productPage = await mainPage.openProduct('Samsung galaxy s6');
    await expect(productPage.productTitle).toHaveText('Samsung galaxy s6');
});

// Тест додавання товару в кошик
test('Add product to cart', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    const productPage = await mainPage.openProduct('Samsung galaxy s6');
    await productPage.addToCart();
    page.once('dialog', dialog => dialog.accept());
    await expect(page.locator('#cartur')).toBeVisible();
});

// Тест видалення товару з кошика
test('Remove product from cart', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    const productPage = await mainPage.openProduct('Samsung galaxy s6');
    await productPage.addToCart();
    page.once('dialog', dialog => dialog.accept());
    const cartPage = new CartPage(page);
    await cartPage.goto();
    await cartPage.removeProduct('Samsung galaxy s6');
    await expect(cartPage.cartItems).toHaveCount(0);
});

// Тест авторизації користувача
test('User login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('testuser', 'password123');
    await expect(loginPage.logoutButton).toBeVisible();
});

// Тест виходу з облікового запису
test('User logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('testuser', 'password123');
    await loginPage.logout();
    await expect(loginPage.loginButton).toBeVisible();
});

// Тест оформлення замовлення
test('Place an order', async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.goto();
    const productPage = await mainPage.openProduct('Samsung galaxy s6');
    await productPage.addToCart();
    page.once('dialog', dialog => dialog.accept());
    const cartPage = new CartPage(page);
    await cartPage.goto();
    await cartPage.placeOrder('John Doe', 'USA', 'New York', '1234567890123456', '12', '2025');
    await expect(cartPage.orderConfirmationMessage).toBeVisible();
});
