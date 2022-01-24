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
exports.TeasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let TeasService = class TeasService {
    constructor(teaRepository) {
        this.teaRepository = teaRepository;
    }
    async findAll(params) {
        const { limit = 100, offset = 0 } = params;
        return this.teaRepository.find({
            order: {
                title: 'DESC',
            },
            skip: offset,
            take: limit,
        });
    }
    async search(searchString, limit = 100, offset = 0) {
        let response;
        response = await this.teaRepository.find({
            title: (0, typeorm_1.Like)(`%${searchString}%`),
        });
        if (!response.length)
            return await this.teaRepository.find({
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
        const tea = await this.teaRepository.findOne(id);
        if (!tea)
            throw new common_1.NotFoundException(`Tea #${id} not found`);
        return tea;
    }
    create(data) {
        const newTea = this.teaRepository.create(data);
        return this.teaRepository.save(newTea);
    }
    async update(id, changes) {
        const tea = await this.teaRepository.findOne(id);
        if (!tea)
            throw new common_1.NotFoundException(`Tea #${id} not found`);
        this.teaRepository.merge(tea, changes);
        return this.teaRepository.save(tea);
    }
    async remove(id) {
        const tea = await this.teaRepository.findOne(id);
        if (!tea)
            throw new common_1.NotFoundException(`Tea #${id} not found`);
        return this.teaRepository.delete(id);
    }
};
TeasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TEA_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TeasService);
exports.TeasService = TeasService;
//# sourceMappingURL=teas.service.js.map