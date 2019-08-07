import { Controller, Get } from '@nestjs/common';
import { AlignmentsService } from './alignments.service';

@Controller('alignments')
export class AlignmentsController {
  constructor(private readonly attrService: AlignmentsService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
