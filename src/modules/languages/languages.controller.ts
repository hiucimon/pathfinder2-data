import { Controller, Get } from '@nestjs/common';
import { LanguagesService } from './languages.service';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly theService: LanguagesService) {}

  @Get()
  getRequestHandler(): string[] {
    return this.theService.getHandler();
  }
}

