import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IdoService } from './ido.service';
import { CreateIdoDto } from './dto/create-ido.dto';
import { UpdateIdoDto } from './dto/update-ido.dto';
import { Ido } from './entities/ido.entity';

@Controller('ido')
export class IdoController {
  constructor(private readonly idoService: IdoService) {}

  @Post()
  create(@Body() createIdoDto: CreateIdoDto): Promise<Ido> {
    return this.idoService.create(createIdoDto);
  }

  @Get()
  findAll(): string {
    return this.idoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.idoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdoDto: UpdateIdoDto): string {
    return this.idoService.update(+id, updateIdoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.idoService.remove(+id);
  }
}
