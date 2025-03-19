export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

export function validateJoke(joke: any): joke is Joke {
    return (
        typeof joke.id === 'number' &&
      typeof joke.type === 'string' &&
      typeof joke.setup === 'string' &&
      typeof joke.punchline === 'string'
    );
}
