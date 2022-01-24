import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateTeaDto,
  PaginationTeasDTO,
  UpdateTeaDto,
} from '../dtos/teas.dtos';
import { Tea } from '../entities/teas.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class TeasService {
  constructor(
    @Inject('TEA_REPOSITORY')
    private teaRepository: Repository<Tea>,
  ) {}

  async findAll(params?: PaginationTeasDTO) {
    const { limit = 100, offset = 0 } = params;
    return this.teaRepository.find({
      order: {
        title: 'DESC',
      },
      skip: offset,
      take: limit,
    });
  }

  async search(searchString: string, limit: number = 100, offset: number = 0) {
    let response;
    response = await this.teaRepository.find({
      title: Like(`%${searchString}%`),
    });

    if (!response.length)
      return await this.teaRepository.find({
        where: {
          description: Like(`%${searchString}%`),
        },
        order: {
          title: 'DESC',
        },
        skip: offset,
        take: limit,
      });

    return response;
  }

  async findOne(id: number) {
    const tea = await this.teaRepository.findOne(id);
    if (!tea) throw new NotFoundException(`Tea #${id} not found`);

    return tea;
  }

  create(data: CreateTeaDto) {
    const newTea = this.teaRepository.create(data);
    return this.teaRepository.save(newTea);
  }

  async update(id: number, changes: UpdateTeaDto) {
    const tea = await this.teaRepository.findOne(id);
    if (!tea) throw new NotFoundException(`Tea #${id} not found`);
    this.teaRepository.merge(tea, changes);
    return this.teaRepository.save(tea);
  }

  async remove(id: number) {
    const tea = await this.teaRepository.findOne(id);
    if (!tea) throw new NotFoundException(`Tea #${id} not found`);
    return this.teaRepository.delete(id);
  }
}
