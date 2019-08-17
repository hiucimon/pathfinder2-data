import { Controller, Get } from '@nestjs/common';
import { DomainsService } from './domains.service';

@Controller('domains')
export class DomainsController {
  constructor(private readonly theService: DomainsService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
