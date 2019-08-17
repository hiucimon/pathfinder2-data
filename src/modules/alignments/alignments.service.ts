import { Injectable } from '@nestjs/common';
import { data } from './alignments.data';
@Injectable()
export class AlignmentsService {
  getHandler(): any {
    return data;
  }
}
