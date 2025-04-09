import { ChainablePromiseElement } from 'webdriverio';
import { $ } from '@wdio/globals';

class HomePage {
    get searchInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('input[name="search"]'); 
    }

    get searchButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('button.search-form__submit'); 
    }

    async searchForProduct(product: string) {
        await this.searchInput.setValue(product);
        await this.searchButton.click();
    }
}

export default new HomePage();
