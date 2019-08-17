import { Controller, Get } from '@nestjs/common';
import { BasescoresService } from './basescores.service';

@Controller('basescores')
export class BasescoresController {
  constructor(private readonly theService: BasescoresService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
