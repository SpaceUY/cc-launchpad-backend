import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { IdoService } from './ido.service';
import { CreateIdoDto } from './dto/create-ido.dto';
import { UpdateIdoDto } from './dto/update-ido.dto';
import { Ido } from './entities/ido.entity';
import { Status } from './types/status.enum';

@Controller('ido')
export class IdoController {
  constructor(private readonly idoService: IdoService) {}

  @Post()
  create(@Body() createIdoDto: CreateIdoDto): Promise<Ido> {
    return this.idoService.create(createIdoDto);
  }

  @Get()
  findAll(
    @Query('status') status: Status,
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC',
  ): Promise<Ido[]> {
    return this.idoService.findAll(status, sortOrder);
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
