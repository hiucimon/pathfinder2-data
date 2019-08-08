import { Controller, Get } from '@nestjs/common';
import { DomainsService } from './domains.service';

@Controller('domains')
export class DomainsController {
  constructor(private readonly attrService: DomainsService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
