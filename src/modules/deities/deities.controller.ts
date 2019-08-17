import { Controller, Get } from '@nestjs/common';
import { DeitiesService } from './deities.service';

@Controller('deities')
export class DeitiesController {
  constructor(private readonly theService: DeitiesService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
