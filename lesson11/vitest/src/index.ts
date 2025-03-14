import { Car } from './car';
import { Bicycle } from './bicycle';
import { Airplane } from './airplane';
import { operateTransport } from './TransportService';

const car = new Car();
const bicycle = new Bicycle();
const airplane = new Airplane();

console.log('Операція з автомобілем:');
operateTransport(car);

console.log('\nОперація з велосипедом:');
operateTransport(bicycle);

console.log('\nОперація з літаком:');
operateTransport(airplane);
