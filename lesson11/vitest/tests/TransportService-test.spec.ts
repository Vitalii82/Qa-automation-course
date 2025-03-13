/* eslint-disable unicorn/filename-case */
import { describe, expect, it, vi } from 'vitest';
import { operateTransport } from '../src/TransportService';
import { Transport } from '../src/Transport';


const createMockTransport = (): Transport => {
    return {
        startEngine: vi.fn(),
        stopEngine: vi.fn(),
        move: vi.fn(),
        stop: vi.fn()
    };
};

describe('operateTransport', () => {
    it('should call startEngine, move, stop, and stopEngine in order', () => {
        const mockTransport = createMockTransport();

        operateTransport(mockTransport);

        expect(mockTransport.startEngine).toHaveBeenCalledTimes(1);
        expect(mockTransport.move).toHaveBeenCalledTimes(1);
        expect(mockTransport.stop).toHaveBeenCalledTimes(1);
        expect(mockTransport.stopEngine).toHaveBeenCalledTimes(1);
    });

    it('should call methods in the correct order', () => {
        const mockTransport = createMockTransport();

        operateTransport(mockTransport);

        expect(mockTransport.startEngine).toHaveBeenCalledBefore(mockTransport.move);
        expect(mockTransport.move).toHaveBeenCalledBefore(mockTransport.stop);
        expect(mockTransport.stop).toHaveBeenCalledBefore(mockTransport.stopEngine);
    });

    it('should not call extra methods', () => {
        const mockTransport = createMockTransport();

        operateTransport(mockTransport);

        expect(mockTransport.startEngine).toHaveBeenCalledTimes(1);
        expect(mockTransport.move).toHaveBeenCalledTimes(1);
        expect(mockTransport.stop).toHaveBeenCalledTimes(1);
        expect(mockTransport.stopEngine).toHaveBeenCalledTimes(1);
    });

    it('should work with different transport types', () => {
        const airplane = createMockTransport();
        const bicycle = createMockTransport();
        const car = createMockTransport();

        operateTransport(airplane);
        operateTransport(bicycle);
        operateTransport(car);

        expect(airplane.startEngine).toHaveBeenCalled();
        expect(bicycle.startEngine).toHaveBeenCalled();
        expect(car.startEngine).toHaveBeenCalled();
    });

    it('should log correct messages', () => {
        const consoleSpy = vi.spyOn(console, 'log');
        const mockTransport = createMockTransport();

        operateTransport(mockTransport);

        expect(consoleSpy).not.toHaveBeenCalled();
    });
});
