import { manipulateTransport } from './mocha/src/TransportService';

describe('Transport Service Functions', () => {
    test('should correctly modify transport speed', () => {
        const car = { type: 'Car', speed: 100 };
        manipulateTransport(car, 20);
        expect(car.speed).toBe(120);
    });
});