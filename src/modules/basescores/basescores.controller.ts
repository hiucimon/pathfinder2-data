import { Controller, Get } from '@nestjs/common';
import { BasescoresService } from './basescores.service';

@Controller('basescores')
export class BasescoresController {
  constructor(private readonly attrService: BasescoresService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
