import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { ApiTags, ApiOperation } from '@nestjs/swagger';
import {
  CreateCoffeeDto,
  PaginationCoffeesDTO,
  UpdateCoffeeDto,
} from '../dtos/coffees.dtos';
import { CoffeesService } from '../services/coffees.service';

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(private coffeesService: CoffeesService) {}

  @Get()
  @ApiOperation({ summary: 'List of coffees' })
  getCoffees(@Query() params: PaginationCoffeesDTO) {
    return this.coffeesService.findAll(params);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search a coffee by title or description' })
  search(
    @Query('s') search: string,
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    return this.coffeesService.search(search, limit, offset);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the properties of a coffee by the id given' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') productId: number) {
    return this.coffeesService.findOne(productId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new coffe' })
  create(@Body() payload: CreateCoffeeDto) {
    return this.coffeesService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edit the properties of a coffe' })
  update(@Param('id') id: number, @Body() payload: UpdateCoffeeDto) {
    return this.coffeesService.update(+id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a coffe from the database' })
  delete(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }
}
