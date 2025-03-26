import puppeteer from 'puppeteer';
import HomePage from '../pageObjects/HomePage';
import { describe, it } from 'mocha'; 

describe('Rozetka Shopping Flow with Puppeteer', () => {
    it('Searches for a product and adds it to the cart', async function () {
      this.timeout(10000); 
  
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      const homePage = new HomePage(page);
  
      await homePage.visit();
      await homePage.searchProduct('iPhone');
      await homePage.selectFirstProduct();
      await homePage.addToCart();
      await homePage.openCart();
      await homePage.checkCartItem();
  
      await browser.close();
    });
  });
  