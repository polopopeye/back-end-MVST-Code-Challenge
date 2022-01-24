import { CreateCoffeeDto, PaginationCoffeesDTO, UpdateCoffeeDto } from '../dtos/coffees.dtos';
import { CoffeesService } from '../services/coffees.service';
export declare class CoffeesController {
    private coffeesService;
    constructor(coffeesService: CoffeesService);
    getCoffees(params: PaginationCoffeesDTO): Promise<import("../entities/coffee.entity").Coffee[]>;
    search(search: string, limit: number, offset: number): Promise<any>;
    getOne(productId: number): Promise<import("../entities/coffee.entity").Coffee>;
    create(payload: CreateCoffeeDto): Promise<import("../entities/coffee.entity").Coffee>;
    update(id: number, payload: UpdateCoffeeDto): Promise<import("../entities/coffee.entity").Coffee>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
