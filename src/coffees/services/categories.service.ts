import { Inject, Injectable, NotFoundException } from '@nestjs/common';

import { Category } from '../entities/category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dtos';

import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoriesRepository: Repository<Category>,
  ) {}

  findAll() {
    return this.categoriesRepository.find();
  }

  async findOne(id: number) {
    const product = await this.categoriesRepository.findOne({
      relations: ['coffees'],
      where: {
        id,
      },
    });
    if (!product) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return product;
  }

  create(data: CreateCategoryDto) {
    const newCategory = this.categoriesRepository.create(data);
    return this.categoriesRepository.save(newCategory);
  }

  async update(id: number, changes: UpdateCategoryDto) {
    const category = await this.findOne(id);
    this.categoriesRepository.merge(category, changes);
    return this.categoriesRepository.save(category);
  }

  remove(id: number) {
    return this.categoriesRepository.delete(id);
  }
}
