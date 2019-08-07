import { Injectable } from '@nestjs/common';
import { data } from './classes.data';
@Injectable()
export class ClassesService {
  getAttr(): any {
    return data;
  }
}
