import { Injectable } from '@nestjs/common';
import { data } from './heritages.data';
@Injectable()
export class HeritagesService {
  getAttr(): any {
    return data;
  }
}
