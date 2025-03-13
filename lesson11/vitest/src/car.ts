import { Transport } from './Transport';

export class Car implements Transport {
    public startEngine(): void {
        console.log('Автомобіль запускає двигун');
    }

    public stopEngine(): void {
        console.log('Автомобіль вимикає двигун');
    }

    public move(): void {
        console.log('Автомобіль рухається');
    }

    public stop(): void {
        console.log('Автомобіль зупиняється');
    }
}
