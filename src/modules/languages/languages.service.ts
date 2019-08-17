import { Injectable } from '@nestjs/common';
import { data } from './languages.data';
@Injectable()
export class LanguagesService {
  getHandler(): any {
    return data;
  }
}
