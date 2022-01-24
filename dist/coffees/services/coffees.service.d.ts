import { CreateCoffeeDto, PaginationCoffeesDTO, UpdateCoffeeDto } from '../dtos/coffees.dtos';
import { Coffee } from '../entities/coffee.entity';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
export declare class CoffeesService {
    private coffeeRepository;
    private categoryRepository;
    constructor(coffeeRepository: Repository<Coffee>, categoryRepository: Repository<Category>);
    findAll(params?: PaginationCoffeesDTO): Promise<Coffee[]>;
    search(searchString: string, limit?: number, offset?: number): Promise<any>;
    findOne(id: number): Promise<Coffee>;
    create(data: CreateCoffeeDto): Promise<Coffee>;
    update(id: number, changes: UpdateCoffeeDto): Promise<Coffee>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
