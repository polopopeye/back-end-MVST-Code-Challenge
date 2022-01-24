import { Connection } from 'typeorm';
import { Coffee } from '../entities/coffee.entity';

export const CoffeeProviders = [
  {
    provide: 'COFFEE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Coffee),
    inject: ['DATABASE_CONNECTION'],
  },
];
