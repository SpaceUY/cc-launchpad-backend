import { PartialType } from '@nestjs/swagger';
import { CreateIdoDto } from './create-ido.dto';

export class UpdateIdoDto extends PartialType(CreateIdoDto) {}
