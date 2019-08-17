import { Controller, Get } from '@nestjs/common';
import { AlignmentsService } from './alignments.service';

@Controller('alignments')
export class AlignmentsController {
  constructor(private readonly theService: AlignmentsService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
