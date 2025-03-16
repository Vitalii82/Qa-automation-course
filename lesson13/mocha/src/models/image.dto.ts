import { BreedDto } from './breed.dto';

export interface ImageDto {
    id: string;
    url: string;
    width: number | null;
    height: number | null;
    mime_type: string;
    entities: unknown[];
    breeds: BreedDto[];
    animals: unknown[];
    categories: unknown[];
    sub_id: string;
    created_at: string;
    original_filename: string;
    breed_ids: string;
}