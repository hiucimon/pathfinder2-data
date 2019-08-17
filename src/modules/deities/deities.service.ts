import { Injectable } from '@nestjs/common';
import { data } from './deities.data';
@Injectable()
export class DeitiesService {
  getHandler(): any {
    return data;
  }
}
