import {
  Inject,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateCoffeeDto,
  PaginationCoffeesDTO,
  UpdateCoffeeDto,
} from '../dtos/coffees.dtos';
import { Coffee } from '../entities/coffee.entity';
import { Like, Repository } from 'typeorm';
import { CategoriesService } from './categories.service';
import { Category } from '../entities/category.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @Inject('COFFEE_REPOSITORY')
    private coffeeRepository: Repository<Coffee>,
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>, // private categoriesService: CategoriesService,
  ) {}

  async findAll(params?: PaginationCoffeesDTO) {
    const { limit = 100, offset = 0 } = params;
    return this.coffeeRepository.find({
      relations: ['category'],
      order: {
        title: 'DESC',
      },
      skip: offset,
      take: limit,
    });
  }

  async search(searchString: string, limit: number = 100, offset: number = 0) {
    let response;
    response = await this.coffeeRepository.find({
      relations: ['category'],

      where: {
        title: Like(`%${searchString}%`),
      },
      order: {
        title: 'DESC',
      },
      skip: offset,
      take: limit,
    });

    if (!response.length)
      return await this.coffeeRepository.find({
        relations: ['category'],

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
    const coffee = await this.coffeeRepository.findOne(id, {
      relations: ['category'],
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  async create(data: CreateCoffeeDto) {
    const newCoffee = this.coffeeRepository.create(data);
    if (data.categoryId) {
      const category = await this.categoryRepository.findOne(data.categoryId);
      newCoffee.category = category;
    }

    const duplicatedObj = await this.coffeeRepository.findOne({
      where: {
        title: data.title,
      },
    });
    if (duplicatedObj)
      throw new NotAcceptableException(`Coffee with duplicated tittle`);

    return this.coffeeRepository.save(newCoffee);
  }

  async update(id: number, changes: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.findOne(id);
    if (!coffee) throw new NotFoundException(`Coffee #${id} not found`);
    if (changes.categoryId) {
      const category = await this.categoryRepository.findOne(
        changes.categoryId,
      );
      coffee.category = category;
    }

    this.coffeeRepository.merge(coffee, changes);
    return this.coffeeRepository.save(coffee);
  }

  async remove(id: number) {
    const coffee = await this.coffeeRepository.findOne(id);
    if (!coffee) throw new NotFoundException(`Coffee #${id} not found`);
    return this.coffeeRepository.delete(id);
  }
}
