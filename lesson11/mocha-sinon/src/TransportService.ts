/* eslint-disable unicorn/filename-case */

import { Transport } from './Transport';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function operateTransport(vehicle: Transport) {
    vehicle.startEngine();
    vehicle.move();
    vehicle.stop();
    vehicle.stopEngine();
}
