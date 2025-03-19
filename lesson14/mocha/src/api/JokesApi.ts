import { Joke, validateJoke } from '../dto/Joke';
import { ApiClient } from '../utils/ApiClient';

class JokesApi {
    private client: ApiClient;

    constructor(baseURL: string) {
        this.client = new ApiClient(baseURL);
    }

    async getRandomJoke(): Promise<Joke> {
        const joke = await this.client.get('/random_joke');
        if (!validateJoke(joke)) throw new Error('Invalid joke format');
        return joke;
    }

    async getTenJokes(): Promise<Joke[]> {
        const jokes = await this.client.get('/ten');
        if (!Array.isArray(jokes) || !jokes.every(validateJoke)) throw new Error('Invalid jokes array');
        return jokes;
    }

    async getJokeByType(type: string): Promise<Joke[]> {
        const jokes = await this.client.get(`/jokes/${type}`);
        if (!Array.isArray(jokes) || !jokes.every(validateJoke)) throw new Error('Invalid jokes array');
        return jokes;
    }

    async searchJoke(term: string): Promise<Joke[]> {
        const jokes = await this.client.get(`/search?term=${term}`);
        if (!Array.isArray(jokes) || !jokes.every(validateJoke)) throw new Error('Invalid jokes array');
        return jokes;
    }
}

export default JokesApi;
