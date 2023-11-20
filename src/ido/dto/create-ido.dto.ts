import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateIdoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  contractAddress?: string;

  @IsNotEmpty()
  @IsString()
  chainId: string;

  @IsNotEmpty()
  @IsString()
  tokenAddress: string;

  @IsNotEmpty()
  @IsNumber()
  tokenPrice: number;

  @IsNotEmpty()
  @IsNumber()
  softCap: number;

  @IsNotEmpty()
  @IsNumber()
  hardCap: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsNotEmpty()
  @IsNumber()
  minContribution: number;

  @IsNotEmpty()
  @IsNumber()
  maxContribution: number;

  @IsNotEmpty()
  @IsNumber()
  investingPhaseInDays: number;

  @IsNotEmpty()
  @IsNumber()
  vestingCliffInDays: number;

  @IsNotEmpty()
  @IsNumber()
  vestingTotalPeriods: number;

  @IsNotEmpty()
  @IsNumber()
  vestingPeriodInDays: number;

  @IsOptional()
  @IsString()
  txHash?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsString()
  twitterUrl?: string;

  @IsOptional()
  @IsString()
  githubUrl?: string;

  @IsOptional()
  @IsString()
  telegramUrl?: string;
}
