export type Order = {
    id: number;
    latitude: number;
    longitude: number;
    address: string;
    moment: string;
    status: string;
    products: Product[];
    total: number;
}

export type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}
