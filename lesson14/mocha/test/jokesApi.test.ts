/* eslint-disable unicorn/filename-case */
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { JokesApi } from '../src/api/jokes-api';

describe('Jokes Service Tests', () => {
    it('should fetch a random programming joke', async () => {
        const joke = await JokesApi.getRandomProgrammingJoke();
        expect(joke.type).to.equal('programming');
    });

    it('should search jokes with a keyword', async () => {
        const jokes = await JokesApi.searchJokeByKeyword('dog');
        expect(jokes).to.be.an('array');
    });

    it('should fetch the first joke from /ten endpoint', async () => {
        const joke = await JokesApi.getFirstJoke();
        expect(joke).to.have.property('setup');
    });

    it('should fetch the last joke from /ten endpoint', async () => {
        const joke = await JokesApi.getLastJoke();
        expect(joke).to.have.property('punchline');
    });
});
