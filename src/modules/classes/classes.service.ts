import { Injectable } from '@nestjs/common';
import { data } from './classes.data';
@Injectable()
export class ClassesService {
  getHandler(): any {
    return data;
  }
}
