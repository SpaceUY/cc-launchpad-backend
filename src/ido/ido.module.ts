import { Module } from '@nestjs/common';
import { IdoService } from './ido.service';
import { IdoController } from './ido.controller';
import { Ido } from './entities/ido.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDORepository } from './ido.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Ido])],
  controllers: [IdoController],
  providers: [IdoService, IDORepository],
})
export class IdoModule {}
