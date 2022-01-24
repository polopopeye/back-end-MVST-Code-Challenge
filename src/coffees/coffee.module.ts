import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';
import { CategoriesController } from './controllers/categories.controllers';
import { CoffeesController } from './controllers/coffees.controller';
import { CategoryProviders } from './providers/category.provider';
import { CoffeeProviders } from './providers/coffee.providers';
import { CategoriesService } from './services/categories.service';

import { CoffeesService } from './services/coffees.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CoffeesController, CategoriesController],
  providers: [
    CoffeesService,
    CategoriesService,
    ...CoffeeProviders,
    ...CategoryProviders,
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
