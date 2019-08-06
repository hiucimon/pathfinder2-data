import { Injectable } from '@nestjs/common';
import { data } from './basescores.data';
@Injectable()
export class BasescoresService {
  getAttr(): any {
    return data;
  }
}
