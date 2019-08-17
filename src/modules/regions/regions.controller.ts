import { Controller, Get } from '@nestjs/common';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {
  constructor(private readonly attrService: RegionsService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
