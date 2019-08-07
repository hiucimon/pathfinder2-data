import { Controller, Get } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly attrService: ClassesService) {}

  @Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
