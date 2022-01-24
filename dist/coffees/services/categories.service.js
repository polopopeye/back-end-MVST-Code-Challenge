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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    findAll() {
        return this.categoriesRepository.find();
    }
    async findOne(id) {
        const product = await this.categoriesRepository.findOne({
            relations: ['coffees'],
            where: {
                id,
            },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        return product;
    }
    create(data) {
        const newCategory = this.categoriesRepository.create(data);
        return this.categoriesRepository.save(newCategory);
    }
    async update(id, changes) {
        const category = await this.findOne(id);
        this.categoriesRepository.merge(category, changes);
        return this.categoriesRepository.save(category);
    }
    remove(id) {
        return this.categoriesRepository.delete(id);
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CATEGORY_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map