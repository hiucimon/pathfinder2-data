import { Module } from '@nestjs/common';
import { AlignmentsController } from './alignments.controller';
import { AlignmentsService } from './alignments.service';

@Module({
  imports: [],
  controllers: [AlignmentsController],
  providers: [AlignmentsService],
})
export class AlignmentsModule {}
