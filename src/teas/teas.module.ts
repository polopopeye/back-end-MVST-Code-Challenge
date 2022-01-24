import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';
import { TeasController } from './controllers/teas.controller';
import { TeasProviders } from './providers/teas.providers';
import { TeasService } from './services/teas.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TeasController],
  providers: [TeasService, ...TeasProviders],
  exports: [TeasService],
})
export class TeasModule {}
