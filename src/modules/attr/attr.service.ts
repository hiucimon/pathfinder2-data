import { Injectable } from '@nestjs/common';
import { data } from './attr.data';
@Injectable()
export class AttrService {
  getHandler(): any {
    return data;
  }
}
