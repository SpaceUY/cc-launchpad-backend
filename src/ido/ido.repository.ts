import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Ido } from './entities/ido.entity';
import { CreateIdoDto } from './dto/create-ido.dto';
import { Status } from './types/status.enum';

@Injectable()
export class IDORepository extends Repository<Ido> {
  constructor(private dataSource: DataSource) {
    super(Ido, dataSource.createEntityManager());
  }

  async createIDO(createIdoDto: CreateIdoDto): Promise<Ido> {
    const newIdo = this.create({ ...createIdoDto, status: Status.PENDING });
    const createIdo = await this.save(newIdo);
    return createIdo;
  }

  async getAll(status?: Status, sortOrder?: 'ASC' | 'DESC'): Promise<Ido[]> {
    const queryBuilder = this.createQueryBuilder('ido');

    if (status && Object.values(Status).includes(status)) {
      queryBuilder.andWhere('ido.status = :status', { status });
    }

    const sortColumn = 'startDate';
    queryBuilder.orderBy(`ido.${sortColumn}`, sortOrder || 'DESC');

    return await queryBuilder.getMany();
  }
}
