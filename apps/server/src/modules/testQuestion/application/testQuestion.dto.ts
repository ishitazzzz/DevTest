import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TestQuestionCreateDto {
  @IsString()
  @IsOptional()
  testId?: string

  @IsString()
  @IsOptional()
  questionId?: string

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

export class TestQuestionUpdateDto {
  @IsString()
  @IsOptional()
  testId?: string

  @IsString()
  @IsOptional()
  questionId?: string

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
