import { expect } from 'chai';
import { Builder, By, until } from 'selenium-webdriver';

(async function testRozetkaSearch() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    console.log("Відкриваємо сайт Rozetka...");
    await driver.get('https://rozetka.com.ua/');

    // CSS-селектори
    const searchInput = By.css('input.search-form__input');
    const searchButton = By.css('button.search-form__submit');
    const productTitle = By.css('span.goods-tile__title');
    const filterCheckbox = By.css('a.catalog-checkbox');
    const nextPageButton = By.css('a.pagination__direction--forward');

    // XPath-селектори
    const cartButtonXPath = By.xpath('//button[contains(@class, "buy-button")]');
    const productPriceXPath = By.xpath('//span[contains(@class, "goods-tile__price-value")]');
    const cartCounterXPath = By.xpath('//span[@class="badge badge--green ng-star-inserted"]');
    const categoryXPath = By.xpath('//a[contains(text(), "Смартфони")]');

    console.log("Виконуємо тест-кейс 1: Пошук товару");
    await driver.findElement(searchInput).sendKeys('iPhone 15');
    await driver.findElement(searchButton).click();
    await driver.wait(until.elementLocated(productTitle), 15000);
    const firstProduct = await driver.findElement(productTitle).getText();
    console.log("Знайдений товар:", firstProduct);
    expect(firstProduct.toLowerCase()).to.include('iphone 15');

    console.log("Виконуємо тест-кейс 2: Додавання товару в кошик");
    await driver.findElement(cartButtonXPath).click();
    await driver.wait(until.elementLocated(cartCounterXPath), 7000);
    const cartCounter = await driver.findElement(cartCounterXPath).getText();
    console.log("Кількість товарів у кошику:", cartCounter);
    expect(cartCounter).to.equal('1');

    console.log("Виконуємо тест-кейс 3: Перевірка ціни товару");
    const price = await driver.findElement(productPriceXPath).getText();
    console.log('Ціна товару:', price);
    expect(price).to.not.be.empty;

    console.log("Виконуємо тест-кейс 4: Фільтрація товарів");
    await driver.findElement(categoryXPath).click();
    await driver.wait(until.elementLocated(filterCheckbox), 7000);
    await driver.findElement(filterCheckbox).click();
    await driver.wait(until.elementLocated(productTitle), 7000);
    const filteredProduct = await driver.findElement(productTitle).getText();
    console.log("Знайдений товар після фільтрації:", filteredProduct);
    expect(filteredProduct).to.not.be.empty;

    console.log("Виконуємо тест-кейс 5: Перевірка пагінації");
    await driver.findElement(nextPageButton).click();
    await driver.wait(until.elementLocated(productTitle), 7000);
    const nextPageProduct = await driver.findElement(productTitle).getText();
    console.log("Товар на наступній сторінці:", nextPageProduct);
    expect(nextPageProduct).to.not.be.empty;

    console.log("✅ Усі тести пройшли успішно!");

  } catch (error) {
    console.error("❌ Помилка під час виконання тесту:", error);
  } finally {
    await driver.quit();
    console.log("🔚 Тест завершено, браузер закрито.");
  }
})();
