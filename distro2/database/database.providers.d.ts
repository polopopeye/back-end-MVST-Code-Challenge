import { ConfigType } from '@nestjs/config';
import config from 'src/config';
export declare const databaseProviders: {
    provide: string;
    useFactory: (configuration?: ConfigType<typeof config>) => Promise<import("typeorm").Connection>;
}[];
