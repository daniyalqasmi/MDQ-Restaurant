import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    title: string;
    image?: string[] | StaticImageData | undefined |any;
    cart: string;
    price: number;
    category: string;
    description: string;
    topping: string[];
    qty: number;
    discount: number;
}
export type Cart = {
    id: number;
    title: string;
    image?: string | StaticImageData | undefined |any;
    cart: string;
    price: number;
    discount: number;
    category: string;
    description: string;
    topping: string;
    qty: number;
    uuid: number|string|undefined;
}