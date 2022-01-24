import { Connection } from 'typeorm';
import { Coffee } from '../entities/coffee.entity';
export declare const CoffeeProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Coffee>;
    inject: string[];
}[];
