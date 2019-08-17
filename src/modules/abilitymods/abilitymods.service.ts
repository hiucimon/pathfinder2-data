import { Injectable } from '@nestjs/common';
import { data } from './abilitymods.data';
@Injectable()
export class AbilitymodsService {
  getHandler(): any {
    return data;
  }
}
