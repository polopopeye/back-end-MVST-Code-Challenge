import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configuration: ConfigType<typeof config> = config()) => {
      const { database, username, password, port, host } =
        configuration.postgres;

      const connection = await createConnection({
        type: 'postgres',
        host,
        port,
        username,
        password,
        database,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        url: process.env.DATABASE_URL,
        logging: true,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      });
      return connection;
    },
  },
];
