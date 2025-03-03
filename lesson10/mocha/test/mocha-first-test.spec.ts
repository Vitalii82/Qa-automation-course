/* eslint-disable @typescript-eslint/no-unused-vars */
import { expect } from 'chai';
import { describe, after, it } from 'mocha';


describe('Mocha first test suite', () => {
    let sum: number;
    before(() => {
        sum = 5;
    });

    beforeEach(() => {
        sum = 6;
    });

    describe('Mocha first test', () => {
        it('2 + 2 = 4', () => {
            expect(2 + 2).to.be.equal(4);
        });
    });

    describe('Mocha second test, 2 + 2 = 5', () => {
        beforeEach(() => {
            sum = 7;
        });
        it('1. put result of 2 + 2 into variable', () => {
            sum = 2 + 2;
        });

        it('2. check variable to be 5', () => {
            expect(sum).to.be.equal(5);
        });

        it('3. final test case', () => {
            console.log('ascxdv');
        });
    });
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function before(arg0: () => void) {
    throw new Error('Function not implemented.');
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function beforeEach(_arg0: () => void) {
    throw new Error('Function not implemented.');
}

