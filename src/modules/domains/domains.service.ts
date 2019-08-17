import { Injectable } from '@nestjs/common';
import { data } from './domains.data';
@Injectable()
export class DomainsService {
  getHandler(): any {
    return data;
  }
}
