import { Module } from '@nestjs/common';
import { HeritagesController } from './heritages.controller';
import { HeritagesService } from './heritages.service';

@Module({
  imports: [],
  controllers: [HeritagesController],
  providers: [HeritagesService],
})
export class HeritagesModule {}
