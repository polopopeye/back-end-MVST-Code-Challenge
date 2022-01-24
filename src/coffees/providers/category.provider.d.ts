import { Connection } from 'typeorm';
import { Category } from '../entities/category.entity';
export declare const CategoryProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Category>;
    inject: string[];
}[];
