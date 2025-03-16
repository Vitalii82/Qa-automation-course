import { Transport } from './Transport';

export class Bicycle implements Transport {
    public startEngine(): void {
        console.log('Велосипед не має двигуна');
    }

    public stopEngine(): void {
        console.log('Велосипед не має двигуна');
    }

    public move(): void {
        console.log('Велосипед рухається');
    }

    public stop(): void {
        console.log('Велосипед зупиняється');
    }
}
