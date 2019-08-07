import { Injectable } from '@nestjs/common';
import { data } from './alignments.data';
@Injectable()
export class AlignmentsService {
  getAttr(): any {
    return data;
  }
}
