import { Module } from '@nestjs/common';
import { BasescoresController } from './basescores.controller';
import { BasescoresService } from './basescores.service';

@Module({
  imports: [],
  controllers: [BasescoresController],
  providers: [BasescoresService],
})
export class BasescoresModule {}
