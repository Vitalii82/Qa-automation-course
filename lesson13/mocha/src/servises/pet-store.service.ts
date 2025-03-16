import axios, { AxiosPromise } from 'axios';
import { PetDto } from '../models/pet.dto';

export class PetStoreService {
    public constructor(private url: string) {}

    public getPet = (id: number): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json' },
            method: 'GET',
            url: `/v2/pet/${id}`
        });
    };

    public createPet = (pet: PetDto): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            url: '/v2/pet',
            data: pet
        });
    };
}