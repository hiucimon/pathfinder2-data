import { Controller, Get } from '@nestjs/common';
import { DeitiesService } from './deities.service';

@Controller('deities')
export class DeitiesController {
  constructor(private readonly attrService: DeitiesService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
