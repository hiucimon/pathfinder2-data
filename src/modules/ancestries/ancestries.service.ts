import { Injectable } from '@nestjs/common';
import { data } from './ancestries.data';
@Injectable()
export class AncestriesService {
  getHandler(): any {
    return data;
  }
}
