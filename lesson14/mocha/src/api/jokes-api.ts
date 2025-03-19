import { Joke, validateJoke } from '../dto/joke';
import { ApiClient } from '../utils/api-client';

class JokesApi {
    private readonly client: ApiClient;

    public constructor(baseURL: string) {
        this.client = new ApiClient(baseURL);
    }

    public async getRandomJoke(): Promise<Joke> {
        const joke = await this.client.get('/random_joke');
        if (!validateJoke(joke)) throw new Error('Invalid joke format');
        return joke;
    }

    public async getTenJokes(): Promise<Joke[]> {
        const jokes = await this.client.get('/ten');
        if (!Array.isArray(jokes) || !jokes.every(validateJoke)) throw new Error('Invalid jokes array');
        return jokes;
    }

    public async getJokeByType(type: string): Promise<Joke[]> {
        const jokes = await this.client.get(`/jokes/${type}`);
        if (!Array.isArray(jokes) || !jokes.every(validateJoke)) throw new Error('Invalid jokes array');
        return jokes;
    }

    public async searchJoke(term: string): Promise<Joke[]> {
        const jokes = await this.client.get(`/search?term=${term}`);
        if (!Array.isArray(jokes) || !jokes.every(validateJoke)) throw new Error('Invalid jokes array');
        return jokes;
    }
}

export default JokesApi;
