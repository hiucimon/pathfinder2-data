import { Controller, Get } from '@nestjs/common';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {
  constructor(private readonly theService: RegionsService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
