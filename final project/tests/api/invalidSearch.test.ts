import { expect } from 'chai';
import axios, { AxiosError } from 'axios';

describe('FopHelp API - Negative Cases', () => {
    it('should return empty result for non-existing name', async () => {
        const response = await axios.post('https://new.fophelp.pro/api/search', {
            name: 'NonExistingName123456789'
        });

        expect(response.status).to.equal(200);
        expect(response.data).to.be.an('array').that.is.empty;
    });

    it('should return error for missing request body', async () => {
        try {
            await axios.post('https://new.fophelp.pro/api/search');
        } catch (err) {
            const error = err as AxiosError;
            expect(error.response?.status).to.equal(400);
        }
    });

    it('should have expected properties in result object', async () => {
        const response = await axios.post('https://new.fophelp.pro/api/search', {
            name: 'Іван'
        });

        expect(response.status).to.equal(200);
        expect(response.data[0]).to.have.property('name');
        expect(response.data[0]).to.have.property('edrpou');
    });
});
