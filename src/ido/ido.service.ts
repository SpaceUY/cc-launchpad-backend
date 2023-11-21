import { Injectable } from '@nestjs/common';
import { CreateIdoDto } from './dto/create-ido.dto';
import { UpdateIdoDto } from './dto/update-ido.dto';
import { IDORepository } from './ido.repository';
import { Ido } from './entities/ido.entity';
import { Status } from './types/status.enum';

@Injectable()
export class IdoService {
  constructor(private _idoRepository: IDORepository) {}

  create(createIdoDto: CreateIdoDto): Promise<Ido> {
    return this._idoRepository.createIDO(createIdoDto);
  }

  findAll(status?: Status, sortOrder?: 'ASC' | 'DESC'): Promise<Ido[]> {
    return this._idoRepository.getAll(status, sortOrder);
  }

  findOne(id: number): string {
    return `This action returns a #${id} ido`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateIdoDto: UpdateIdoDto): string {
    return `This action updates a #${id} ido`;
  }

  remove(id: number): string {
    return `This action removes a #${id} ido`;
  }
}
