import { expect } from 'chai';
import { Car } from './mocha/src/car';
import { Airplane } from './mocha/src/airplane';
import { Bicycle } from './mocha/src/bicycle'; 

describe('Transport Classes', function () {
    it('Car should accelerate correctly', function () {
        const car = new Car('Toyota', 120);
        car.accelerate(20);
        expect(car.speed).to.equal(140);
    });

    it('Airplane should take off', function () {
        const airplane = new Airplane('Boeing', 600);
        airplane.takeOff();
        expect(airplane.isFlying).to.be.true;
    });

    it('Bicycle should change gear', function () {
        const bicycle = new Bicycle('Giant', 10);
        bicycle.changeGear(3);
        expect(bicycle.gear).to.equal(3);
    });
});



