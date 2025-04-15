/* eslint-disable unicorn/filename-case */
import { Pact } from '@pact-foundation/pact';
import { expect } from 'chai';
import axios from 'axios';

const provider = new Pact({
    consumer: 'PetstoreConsumer',
    provider: 'PetstoreAPI',
    port: 8081
});

describe('Consumer Contract Test', () => {
    before(() => provider.setup());
    after(() => provider.finalize());

    it('Fetch pet by ID', async () => {
        const petId = 1;

        await provider.addInteraction({
            state: 'a pet with ID 1 exists',
            uponReceiving: 'a request for pet with ID 1',
            withRequest: {
                method: 'GET',
                path: `/v2/pet/${petId}`
            },
            willRespondWith: {
                status: 200,
                body: {
                    id: petId,
                    name: 'Doggie',
                    status: 'available'
                }
            }
        });

        const response = await axios.get(`http://localhost:8081/v2/pet/${petId}`);
        expect(response.status).to.equal(200);
        expect(response.data.name).to.equal('Doggie');
    });
});
