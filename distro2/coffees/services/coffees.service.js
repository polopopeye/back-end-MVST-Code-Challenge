"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let CoffeesService = class CoffeesService {
    constructor(coffeeRepository, categoryRepository) {
        this.coffeeRepository = coffeeRepository;
        this.categoryRepository = categoryRepository;
    }
    async findAll(params) {
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
    async search(searchString, limit = 100, offset = 0) {
        let response;
        response = await this.coffeeRepository.find({
            relations: ['category'],
            where: {
                title: (0, typeorm_1.Like)(`%${searchString}%`),
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
                    description: (0, typeorm_1.Like)(`%${searchString}%`),
                },
                order: {
                    title: 'DESC',
                },
                skip: offset,
                take: limit,
            });
        return response;
    }
    async findOne(id) {
        const coffee = await this.coffeeRepository.findOne(id, {
            relations: ['category'],
        });
        if (!coffee) {
            throw new common_1.NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }
    async create(data) {
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
            throw new common_1.NotAcceptableException(`Coffee with duplicated tittle`);
        return this.coffeeRepository.save(newCoffee);
    }
    async update(id, changes) {
        const coffee = await this.coffeeRepository.findOne(id);
        if (!coffee)
            throw new common_1.NotFoundException(`Coffee #${id} not found`);
        if (changes.categoryId) {
            const category = await this.categoryRepository.findOne(changes.categoryId);
            coffee.category = category;
        }
        this.coffeeRepository.merge(coffee, changes);
        return this.coffeeRepository.save(coffee);
    }
    async remove(id) {
        const coffee = await this.coffeeRepository.findOne(id);
        if (!coffee)
            throw new common_1.NotFoundException(`Coffee #${id} not found`);
        return this.coffeeRepository.delete(id);
    }
};
CoffeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('COFFEE_REPOSITORY')),
    __param(1, (0, common_1.Inject)('CATEGORY_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], CoffeesService);
exports.CoffeesService = CoffeesService;
//# sourceMappingURL=coffees.service.js.map