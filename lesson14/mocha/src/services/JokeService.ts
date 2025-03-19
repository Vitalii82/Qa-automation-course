import JokesApi from '../api/JokesApi';
import { Joke } from '../dto/Joke';

export class JokeService {
    private jokesApi: JokesApi;

    constructor(baseURL: string) {
        this.jokesApi = new JokesApi(baseURL);
    }

    async getRandomProgrammingJoke(): Promise<Joke> {
        const jokes = await this.jokesApi.getJokeByType('programming');
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    async searchJokeByKeyword(keyword: string): Promise<Joke[]> {
        return this.jokesApi.searchJoke(keyword);
    }

    async getFirstJoke(): Promise<Joke> {
        const jokes = await this.jokesApi.getTenJokes();
        return jokes[0];
    }

    async getLastJoke(): Promise<Joke> {
        const jokes = await this.jokesApi.getTenJokes();
        return jokes[jokes.length - 1];
    }
}
