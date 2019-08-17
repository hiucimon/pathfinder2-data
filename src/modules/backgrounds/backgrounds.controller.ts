import { Controller, Get } from '@nestjs/common';
import { BackgroundsService } from './backgrounds.service';

@Controller('backgrounds')
export class BackgroundsController {
  constructor(private readonly theService: BackgroundsService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
