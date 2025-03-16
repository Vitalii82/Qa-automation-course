import { BreedDto } from '../models/breed.dto';
import { ImageDto } from '../models/image.dto';

export class ImageService {
    private _headers = {
        'x-api-key': this._token,
        accept: 'application/json'
    };

    public constructor(private _baseUrl: string, private _token: string) {}

    public async getMyImages(): Promise<ImageDto[]> {
        const response = await fetch(`${this._baseUrl}/images`, {
            headers: this._headers
        });

        return await response.json();
    }

    public async getImageBreads(imageId: string): Promise<BreedDto[]> {
        const response = await fetch(`${this._baseUrl}/images/${imageId}/breads`, {
            headers: this._headers
        });

        return await response.json();
    }
}