import { Controller, Get } from '@nestjs/common';
import { HeritagesService } from './heritages.service';

@Controller('heritages')
export class HeritagesController {
  constructor(private readonly attrService: HeritagesService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
