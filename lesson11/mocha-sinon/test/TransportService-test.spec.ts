/* eslint-disable unicorn/filename-case */
import { describe, it } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import { operateTransport } from '../src/TransportService';
import { Transport } from '../src/Transport';


const createMockTransport = (): Transport => {
    return {
        startEngine: sinon.spy(),
        stopEngine: sinon.spy(),
        move: sinon.spy(),
        stop: sinon.spy()
    };
};

describe('operateTransport', () => {
    it('should call startEngine, move, stop, and stopEngine in order', () => {
        const mockTransport = createMockTransport();

        operateTransport(mockTransport);

        expect(mockTransport.startEngine.calledOnce).to.be.true;
        expect(mockTransport.move.calledOnce).to.be.true;
        expect(mockTransport.stop.calledOnce).to.be.true;
        expect(mockTransport.stopEngine.calledOnce).to.be.true;
    });

    it('should call methods in the correct order', () => {
        const mockTransport = createMockTransport();

        operateTransport(mockTransport);

        expect(mockTransport.startEngine.calledBefore(mockTransport.move)).to.be.true;
        expect(mockTransport.move.calledBefore(mockTransport.stop)).to.be.true;
        expect(mockTransport.stop.calledBefore(mockTransport.stopEngine)).to.be.true;
    });

    it('should not call extra methods', () => {
        const mockTransport = createMockTransport();

        operateTransport(mockTransport);

        expect(mockTransport.startEngine.callCount).to.equal(1);
        expect(mockTransport.move.callCount).to.equal(1);
        expect(mockTransport.stop.callCount).to.equal(1);
        expect(mockTransport.stopEngine.callCount).to.equal(1);
    });

    it('should work with different transport types', () => {
        const airplane = createMockTransport();
        const bicycle = createMockTransport();
        const car = createMockTransport();

        operateTransport(airplane);
        operateTransport(bicycle);
        operateTransport(car);

        expect(airplane.startEngine.called).to.be.true;
        expect(bicycle.startEngine.called).to.be.true;
        expect(car.startEngine.called).to.be.true;
    });

    it('should log correct messages', () => {
        const consoleSpy = sinon.spy(console, 'log');
        const mockTransport = createMockTransport();

        operateTransport(mockTransport);

        expect(consoleSpy.called).to.be.false; 
        consoleSpy.restore();
    });
});
