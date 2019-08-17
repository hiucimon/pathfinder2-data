import { Controller, Get } from '@nestjs/common';
import { AttrService } from './attr.service';

@Controller('attr')
export class AttrController {
  constructor(private readonly theService: AttrService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
