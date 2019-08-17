import { Controller, Get } from '@nestjs/common';
import { HeritagesService } from './heritages.service';

@Controller('heritages')
export class HeritagesController {
  constructor(private readonly theService: HeritagesService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
