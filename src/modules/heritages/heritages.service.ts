import { Injectable } from '@nestjs/common';
import { data } from './heritages.data';
@Injectable()
export class HeritagesService {
  getHandler(): any {
    return data;
  }
}
