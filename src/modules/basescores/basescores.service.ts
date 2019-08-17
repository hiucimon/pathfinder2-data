import { Injectable } from '@nestjs/common';
import { data } from './basescores.data';
@Injectable()
export class BasescoresService {
  getHandler(): any {
    return data;
  }
}
