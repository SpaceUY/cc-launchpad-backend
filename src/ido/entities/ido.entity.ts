import { BaseModel } from 'src/common/base.model';
import { Column, Entity } from 'typeorm';
import { Status } from '../types/status.enum';

@Entity()
export class Ido extends BaseModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  contractAddress?: string;

  @Column()
  chainId: string;

  @Column()
  tokenAddress: string;

  @Column()
  tokenPrice: number;

  @Column()
  softCap: number;

  @Column()
  hardCap: number;

  @Column()
  startDate: Date;

  @Column()
  minContribution: number;

  @Column()
  maxContribution: number;

  @Column()
  investingPhaseInDays: number;

  @Column()
  vestingCliffInDays: number;

  @Column()
  vestingTotalPeriods: number;

  @Column()
  vestingPeriodInDays: number;

  @Column({ enum: Status, type: 'enum' })
  status: Status;

  @Column({ nullable: true })
  txHash?: string;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column({ nullable: true })
  url?: string;

  @Column({ nullable: true })
  twitterUrl?: string;

  @Column({ nullable: true })
  githubUrl?: string;

  @Column({ nullable: true })
  telegramUrl?: string;
}
