import { Controller, Get } from '@nestjs/common';
import { AncestriesService } from './ancestries.service';

@Controller('ancestries')
export class AncestriesController {
  constructor(private readonly theService: AncestriesService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
