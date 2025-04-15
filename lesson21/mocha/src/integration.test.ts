import { expect } from 'chai';
import {
    getRandomImage,
    voteForImage,
    addFavourite,
    getFavourites,
    deleteFavourite
} from './api';

describe('TheCatAPI Integration Tests', () => {
    let imageId: string;
    let favouriteId: string;

    it('1️⃣ Get a random cat image', async () => {
        const res = await getRandomImage();
        expect(res.status).to.equal(200);
        imageId = res.data[0].id;
        expect(imageId).to.be.a('string');
    });

    it('Vote for the image', async () => {
        const res = await voteForImage(imageId, 1);
        expect(res.status).to.equal(201);
    });

    it('Add image to favourites', async () => {
        const res = await addFavourite(imageId);
        expect(res.status).to.equal(200);
        favouriteId = res.data.id;
        expect(favouriteId).to.be.a('number');
    });

    it(' Verify image in favourites', async () => {
        const res = await getFavourites();
        expect(res.status).to.equal(200);
        const favourite = res.data.find((fav: unknown) => fav.image_id === imageId);
        expect(favourite).to.not.be.undefined;
    });

    it(' Delete favourite', async () => {
        const res = await deleteFavourite(favouriteId.toString());
        expect(res.status).to.equal(200);
    });
});
