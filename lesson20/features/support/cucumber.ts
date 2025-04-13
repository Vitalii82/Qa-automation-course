import { BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';

BeforeAll(async () => {
    console.log('Running Demoblaze BDD tests...');
});

AfterAll(async () => {
    console.log('Tests finished.');
});
