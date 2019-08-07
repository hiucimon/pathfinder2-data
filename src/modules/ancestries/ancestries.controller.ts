import { Controller, Get } from '@nestjs/common';
import { AncestriesService } from './ancestries.service';

@Controller('ancestries')
export class AncestriesController {
  constructor(private readonly attrService: AncestriesService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
