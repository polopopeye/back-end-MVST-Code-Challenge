import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateTeaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `tea tittle` })
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `tea description` })
  readonly description: string;

  @IsNotEmpty()
  @ApiProperty({ description: `tea image` })
  readonly image: string;
}

export class UpdateTeaDto extends PartialType(CreateTeaDto) {}

export class PaginationTeasDTO {
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  limit: number;

  @IsOptional()
  @Min(0)
  @ApiProperty()
  offset: number;
}
