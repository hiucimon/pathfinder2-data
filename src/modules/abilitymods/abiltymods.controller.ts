import { Controller, Get } from '@nestjs/common';
import { AbilitymodsService } from './abilitymods.service';

@Controller('abilitymods')
export class AbiltymodsController {
  constructor(private readonly attrService: AbilitymodsService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
