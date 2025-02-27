import { Transport } from './Transport';

export class Airplane implements Transport {
    public startEngine(): void {
        console.log('Літак запускає двигуни');
    }

    public stopEngine(): void {
        console.log('Літак вимикає двигуни');
    }

    public move(): void {
        console.log('Літак летить');
    }

    public stop(): void {
        console.log('Літак приземляється');
    }
}
