import { Module } from '@nestjs/common';
import { IdoService } from './ido.service';
import { IdoController } from './ido.controller';

@Module({
  controllers: [IdoController],
  providers: [IdoService],
})
export class IdoModule {}
