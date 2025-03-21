export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}

export function validateJoke(joke: unknown): joke is Joke {
    return (
        typeof joke === 'object' && joke !== null &&
        'id' in joke && typeof (joke as Record<string, unknown>).id === 'number' &&
        'type' in joke && typeof (joke as Record<string, unknown>).type === 'string' &&
        'setup' in joke && typeof (joke as Record<string, unknown>).setup === 'string' &&
        'punchline' in joke && typeof (joke as Record<string, unknown>).punchline === 'string'
    );
}
