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
exports.TeasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const teas_dtos_1 = require("../dtos/teas.dtos");
const teas_service_1 = require("../services/teas.service");
let TeasController = class TeasController {
    constructor(teasService) {
        this.teasService = teasService;
    }
    getTeas(params) {
        return this.teasService.findAll(params);
    }
    search(search, limit, offset) {
        return this.teasService.search(search, limit, offset);
    }
    getOne(productId) {
        return this.teasService.findOne(productId);
    }
    create(payload) {
        return this.teasService.create(payload);
    }
    update(id, payload) {
        return this.teasService.update(+id, payload);
    }
    delete(id) {
        return this.teasService.remove(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List of teas' }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/teas.entity").Tea] }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teas_dtos_1.PaginationTeasDTO]),
    __metadata("design:returntype", void 0)
], TeasController.prototype, "getTeas", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search a tea by title or description' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('s')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('offset')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], TeasController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get the properties of a tea by the id given' }),
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    openapi.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, type: require("../entities/teas.entity").Tea }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TeasController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new coffe' }),
    openapi.ApiResponse({ status: 201, type: require("../entities/teas.entity").Tea }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [teas_dtos_1.CreateTeaDto]),
    __metadata("design:returntype", void 0)
], TeasController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Edit the properties of a coffe' }),
    openapi.ApiResponse({ status: 200, type: require("../entities/teas.entity").Tea }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, teas_dtos_1.UpdateTeaDto]),
    __metadata("design:returntype", void 0)
], TeasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a coffe from the database' }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TeasController.prototype, "delete", null);
TeasController = __decorate([
    (0, swagger_1.ApiTags)('teas'),
    (0, common_1.Controller)('teas'),
    __metadata("design:paramtypes", [teas_service_1.TeasService])
], TeasController);
exports.TeasController = TeasController;
//# sourceMappingURL=teas.controller.js.map