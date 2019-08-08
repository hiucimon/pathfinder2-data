import { Injectable } from '@nestjs/common';
import { data } from './domains.data';
@Injectable()
export class DomainsService {
  getAttr(): any {
    return data;
  }
}
