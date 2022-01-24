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
  CreateTeaDto,
  PaginationTeasDTO,
  UpdateTeaDto,
} from '../dtos/teas.dtos';
import { TeasService } from '../services/teas.service';

@ApiTags('teas')
@Controller('teas')
export class TeasController {
  constructor(private teasService: TeasService) {}

  @Get()
  @ApiOperation({ summary: 'List of teas' })
  getTeas(@Query() params: PaginationTeasDTO) {
    return this.teasService.findAll(params);
  }

  @Get('search')
  @ApiOperation({ summary: 'Search a tea by title or description' })
  search(
    @Query('s') search: string,
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    return this.teasService.search(search, limit, offset);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the properties of a tea by the id given' })
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') productId: number) {
    return this.teasService.findOne(productId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new coffe' })
  create(@Body() payload: CreateTeaDto) {
    return this.teasService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edit the properties of a coffe' })
  update(@Param('id') id: number, @Body() payload: UpdateTeaDto) {
    return this.teasService.update(+id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a coffe from the database' })
  delete(@Param('id') id: number) {
    return this.teasService.remove(id);
  }
}
