import { Injectable } from '@nestjs/common';
import { data } from './regions.data';
@Injectable()
export class RegionsService {
  getHandler(): any {
    return data;
  }
}
