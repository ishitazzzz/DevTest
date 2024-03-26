import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class AnswerCreateDto {
  @IsString()
  @IsOptional()
  text?: string

  @IsString()
  @IsOptional()
  testQuestionId?: string

  @IsString()
  @IsOptional()
  selectedOptionId?: string

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

export class AnswerUpdateDto {
  @IsString()
  @IsOptional()
  text?: string

  @IsString()
  @IsOptional()
  testQuestionId?: string

  @IsString()
  @IsOptional()
  selectedOptionId?: string

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
