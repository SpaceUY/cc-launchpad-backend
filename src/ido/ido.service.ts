import { Injectable } from '@nestjs/common';
import { CreateIdoDto } from './dto/create-ido.dto';
import { UpdateIdoDto } from './dto/update-ido.dto';
import { IDORepository } from './ido.repository';
import { Ido } from './entities/ido.entity';

@Injectable()
export class IdoService {
  constructor(private _idoRepository: IDORepository) {}

  create(createIdoDto: CreateIdoDto): Promise<Ido> {
    return this._idoRepository.createIDO(createIdoDto);
  }

  findAll() {
    return `This action returns all ido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ido`;
  }

  update(id: number, updateIdoDto: UpdateIdoDto) {
    return `This action updates a #${id} ido`;
  }

  remove(id: number) {
    return `This action removes a #${id} ido`;
  }
}
