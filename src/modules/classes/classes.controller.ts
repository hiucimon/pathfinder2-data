import { Controller, Get } from '@nestjs/common';
import { ClassesService } from './classes.service';

@Controller('classes')
export class ClassesController {
  constructor(private readonly theService: ClassesService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}
