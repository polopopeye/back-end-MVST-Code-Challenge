import { Connection } from 'typeorm';
import { Tea } from '../entities/teas.entity';
export declare const TeasProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("typeorm").Repository<Tea>;
    inject: string[];
}[];
