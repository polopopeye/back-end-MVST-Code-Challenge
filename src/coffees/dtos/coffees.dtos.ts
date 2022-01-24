import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `coffee tittle` })
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `coffee description` })
  readonly description: string;

  @IsNotEmpty()
  @ApiProperty({ description: `coffee image` })
  readonly image: string;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({ description: `coffee category ID` })
  readonly categoryId: number;
}

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

export class PaginationCoffeesDTO {
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  limit: number;

  @IsOptional()
  @Min(0)
  @ApiProperty()
  offset: number;
}
