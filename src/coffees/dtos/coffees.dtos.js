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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationCoffeesDTO = exports.UpdateCoffeeDto = exports.CreateCoffeeDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateCoffeeDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `coffee tittle` }),
    __metadata("design:type", String)
], CreateCoffeeDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `coffee description` }),
    __metadata("design:type", String)
], CreateCoffeeDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `coffee image` }),
    __metadata("design:type", String)
], CreateCoffeeDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)({ description: `coffee category ID` }),
    __metadata("design:type", Number)
], CreateCoffeeDto.prototype, "categoryId", void 0);
exports.CreateCoffeeDto = CreateCoffeeDto;
class UpdateCoffeeDto extends (0, swagger_1.PartialType)(CreateCoffeeDto) {
}
exports.UpdateCoffeeDto = UpdateCoffeeDto;
class PaginationCoffeesDTO {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationCoffeesDTO.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationCoffeesDTO.prototype, "offset", void 0);
exports.PaginationCoffeesDTO = PaginationCoffeesDTO;
//# sourceMappingURL=coffees.dtos.js.map