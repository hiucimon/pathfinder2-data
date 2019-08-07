import { Module } from '@nestjs/common';
import { AncestriesController } from './ancestries.controller';
import { AncestriesService } from './ancestries.service';

@Module({
  imports: [],
  controllers: [AncestriesController],
  providers: [AncestriesService],
})
export class AncestriesModule {}
