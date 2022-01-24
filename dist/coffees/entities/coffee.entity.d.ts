import { Category } from './category.entity';
export declare class Coffee {
    id: number;
    title: string;
    description: string;
    image: string;
    createdAt: Date;
    modifiedAt: Date;
    category: Category;
}
