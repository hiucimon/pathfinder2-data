import { Injectable } from '@nestjs/common';
import { data } from './backgrounds.data';
@Injectable()
export class BackgroundsService {
  getHandler(): any {
    return data;
  }
}
