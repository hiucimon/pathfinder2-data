import { Module } from '@nestjs/common';
import { DeitiesController } from './deities.controller';
import { DeitiesService } from './deities.service';

@Module({
  imports: [],
  controllers: [DeitiesController],
  providers: [DeitiesService],
})
export class DeitiesModule {}
