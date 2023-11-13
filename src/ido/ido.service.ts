import { Injectable } from '@nestjs/common';
import { CreateIdoDto } from './dto/create-ido.dto';
import { UpdateIdoDto } from './dto/update-ido.dto';

@Injectable()
export class IdoService {
  create(createIdoDto: CreateIdoDto): string {
    return 'This action adds a new ido';
  }

  findAll(): string {
    return `This action returns all ido`;
  }

  findOne(id: number): string {
    return `This action returns a #${id} ido`;
  }

  update(id: number, updateIdoDto: UpdateIdoDto): string {
    return `This action updates a #${id} ido`;
  }

  remove(id: number): string {
    return `This action removes a #${id} ido`;
  }
}
