import { expect } from 'chai';
import { JokeService } from '../src/services/JokeService';

const jokeService = new JokeService('https://official-joke-api.appspot.com');

describe('Jokes Service Tests', () => {
    it('should fetch a random programming joke', async () => {
        const joke = await jokeService.getRandomProgrammingJoke();
        expect(joke.type).to.equal('programming');
    });

    it('should search jokes with a keyword', async () => {
        const jokes = await jokeService.searchJokeByKeyword('dog');
        expect(jokes).to.be.an('array');
    });

    it('should fetch the first joke from /ten endpoint', async () => {
        const joke = await jokeService.getFirstJoke();
        expect(joke).to.have.property('setup');
    });

    it('should fetch the last joke from /ten endpoint', async () => {
        const joke = await jokeService.getLastJoke();
        expect(joke).to.have.property('punchline');
    });
});
