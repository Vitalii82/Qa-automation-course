export class ApiClient {
    constructor(private baseUrl: string) {}

    async get(endpoint: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}${endpoint}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    }
}
