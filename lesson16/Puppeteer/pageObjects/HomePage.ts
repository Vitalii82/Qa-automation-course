import { Page } from 'puppeteer';

class HomePage {
  constructor(private page: Page) {}

  async visit() {
    await this.page.goto('https://rozetka.com.ua/');
  }

  async searchProduct(product: string) {
    try {
      await this.page.type('input.search-form__input', product);
      await this.page.keyboard.press('Enter');
      await this.page.waitForSelector('.goods-tile__heading', { timeout: 5000 });
    } catch (error) {
      console.error(`Помилка пошуку: ${product}`, error);
    }
  }

  async selectFirstProduct() {
    await this.page.click('.goods-tile__heading');
  }

  async addToCart() {
    await this.page.click('button.buy-button');
  }

  async openCart() {
    await this.page.click('button.header-actions__button_type_cart');
  }

  async checkCartItem() {
    await this.page.waitForSelector('.cart-product__title');
  }

  async takeScreenshot(filename: string) {
    await this.page.screenshot({ path: `screenshots/${filename}.png` });
  }
}

export default HomePage;  
