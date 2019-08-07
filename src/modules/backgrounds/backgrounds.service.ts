import { Injectable } from '@nestjs/common';
import { data } from './backgrounds.data';
@Injectable()
export class BackgroundsService {
  getAttr(): any {
    return data;
  }
}
