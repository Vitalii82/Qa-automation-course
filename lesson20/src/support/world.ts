import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { BrowserContext, Page } from 'playwright';

export class CustomWorld extends World {
    public context!: BrowserContext;
    public page!: Page;

    public constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);
