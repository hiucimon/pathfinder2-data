import { Controller, Get } from '@nestjs/common';
import { AbilitymodsService } from './abilitymods.service';

@Controller('abilitymods')
export class AbiltymodsController {
  constructor(private readonly theService: AbilitymodsService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
