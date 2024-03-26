import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class OptionCreateDto {
  @IsString()
  @IsNotEmpty()
  text: string

  @IsBoolean()
  @IsNotEmpty()
  isCorrect: boolean

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

export class OptionUpdateDto {
  @IsString()
  @IsOptional()
  text?: string

  @IsBoolean()
  @IsOptional()
  isCorrect?: boolean

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
