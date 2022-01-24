import { Coffee } from './coffee.entity';
export declare class Category {
    id: number;
    name: string;
    createAt: Date;
    updateAt: Date;
    coffees: Coffee[];
}
