import { Injectable } from '@nestjs/common';
import { data } from './languages.data';
@Injectable()
export class LanguagesService {
  getAttr(): any {
    return data;
  }
}
