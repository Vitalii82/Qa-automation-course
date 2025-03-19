import JokesApi from '../api/jokes-api';
import { Joke } from '../dto/joke';

export class JokeService {
    private readonly jokesApi: JokesApi;

    public constructor(baseURL: string) {
        this.jokesApi = new JokesApi(baseURL);
    }

    public async getRandomProgrammingJoke(): Promise<Joke> {
        const jokes = await this.jokesApi.getJokeByType('programming');
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    public async searchJokeByKeyword(keyword: string): Promise<Joke[]> {
        return this.jokesApi.searchJoke(keyword);
    }

    public async getFirstJoke(): Promise<Joke> {
        const jokes = await this.jokesApi.getTenJokes();
        return jokes[0];
    }

    public async getLastJoke(): Promise<Joke> {
        const jokes = await this.jokesApi.getTenJokes();
        return jokes[jokes.length - 1];
    }
}
