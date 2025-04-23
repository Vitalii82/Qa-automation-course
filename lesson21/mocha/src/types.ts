

export interface CatImage {
    id: string;
    url: string;
    width: number;
    height: number;
}


export interface VoteResponse {
    message: string;
    id: number;
    image_id: string;
    value: number;
}


export interface FavouriteResponse {
    id: number;
    user_id: string;
    image_id: string;
}


export interface Category {
    id: number;
    name: string;
}
