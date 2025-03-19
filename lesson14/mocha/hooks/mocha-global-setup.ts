import { setTimeout } from 'timers/promises';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function globalSetup() {
    console.log('Global setup: preparing test environment...');
    await setTimeout(1000);
}

export default globalSetup;
