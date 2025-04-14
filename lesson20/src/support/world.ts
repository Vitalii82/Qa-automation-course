import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Page, BrowserContext } from 'playwright';

export class CustomWorld extends World {
    public page!: Page;
    public context!: BrowserContext;

    public constructor(options: any) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);
