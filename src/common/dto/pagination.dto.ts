import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

/* eslint-disable prettier/prettier */
export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Min(1)
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  offset?: number;
}
