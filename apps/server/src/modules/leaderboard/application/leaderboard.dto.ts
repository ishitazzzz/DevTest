import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class LeaderboardCreateDto {
  @IsNumber()
  @IsNotEmpty()
  score: number

  @IsNumber()
  @IsNotEmpty()
  rank: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class LeaderboardUpdateDto {
  @IsNumber()
  @IsOptional()
  score?: number

  @IsNumber()
  @IsOptional()
  rank?: number

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
