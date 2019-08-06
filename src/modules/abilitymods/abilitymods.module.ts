import { Module } from '@nestjs/common';
import { AbiltymodsController } from './abiltymods.controller';
import { AbilitymodsService } from './abilitymods.service';

@Module({
  imports: [],
  controllers: [AbiltymodsController],
  providers: [AbilitymodsService],
})
export class AbilitymodsModule {}
