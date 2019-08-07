import { Controller, Get } from '@nestjs/common';
import { BackgroundsService } from './backgrounds.service';

@Controller('backgrounds')
export class BackgroundsController {
  constructor(private readonly attrService: BackgroundsService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
