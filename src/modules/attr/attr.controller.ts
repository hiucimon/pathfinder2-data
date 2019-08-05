import { Controller, Get } from '@nestjs/common';
import { AttrService } from './attr.service';

@Controller('attr')
export class AttrController {
  constructor(private readonly attrService: AttrService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
