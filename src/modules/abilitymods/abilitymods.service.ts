import { Injectable } from '@nestjs/common';
import { data } from './abilitymods.data';
@Injectable()
export class AbilitymodsService {
  getAttr(): any {
    return data;
  }
}
