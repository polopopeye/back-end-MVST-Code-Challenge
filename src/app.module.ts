import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from './config';
import { enviroments } from './enviroments';

import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { CoffeesModule } from './coffees/coffee.module';
import { TeasModule } from './teas/teas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.required(),
      }),
    }),
    CoffeesModule,
    TeasModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
