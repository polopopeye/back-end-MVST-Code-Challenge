import { Connection } from 'typeorm';
import { Tea } from '../entities/teas.entity';

export const TeasProviders = [
  {
    provide: 'TEA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Tea),
    inject: ['DATABASE_CONNECTION'],
  },
];
