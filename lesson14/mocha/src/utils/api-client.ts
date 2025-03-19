export class ApiClient {
    public constructor(private readonly baseUrl: string) {}

    public async get(endpoint: string): Promise<unknown> {
        const response = await fetch(`${this.baseUrl}${endpoint}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    }
}
