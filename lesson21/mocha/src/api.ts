import axios, { AxiosResponse } from 'axios';
import { CatImage, VoteResponse, FavouriteResponse } from './types';


const API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'YOUR_API_KEY';

const headers = {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json'
};


export const getRandomImage = async (): Promise<AxiosResponse<CatImage[]>> => {
    return axios.get(`${API_URL}/images/search`, { headers });
};


export const voteForImage = async (
    imageId: string,
    value: number
): Promise<AxiosResponse<VoteResponse>> => {
    return axios.post(`${API_URL}/votes`, { image_id: imageId, value }, { headers });
};


export const addFavourite = async (
    imageId: string
): Promise<AxiosResponse<FavouriteResponse>> => {
    return axios.post(`${API_URL}/favourites`, { image_id: imageId }, { headers });
};


export const getFavourites = async (): Promise<AxiosResponse<FavouriteResponse[]>> => {
    return axios.get(`${API_URL}/favourites`, { headers });
};


export const deleteFavourite = async (
    favouriteId: string
): Promise<AxiosResponse<{ message: string }>> => {
    return axios.delete(`${API_URL}/favourites/${favouriteId}`, { headers });
};
