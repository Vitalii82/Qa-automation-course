export class Category {
    public id: number;
    public name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class Tag {
    public id: number;
    public name: string;

    public constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class PetDto {
    public id: number;
    public category: Category;
    public name: string;
    public photoUrls: string[];
    public tags: Tag[];
    public status: string;

    public constructor(
        id: number,
        category: Category,
        name: string,
        photoUrls: string[],
        tags: Tag[],
        status: string
    ) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.photoUrls = photoUrls;
        this.tags = tags;
        this.status = status;
    }
}