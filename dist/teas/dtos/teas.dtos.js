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
exports.PaginationTeasDTO = exports.UpdateTeaDto = exports.CreateTeaDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateTeaDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `tea tittle` }),
    __metadata("design:type", String)
], CreateTeaDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `tea description` }),
    __metadata("design:type", String)
], CreateTeaDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ description: `tea image` }),
    __metadata("design:type", String)
], CreateTeaDto.prototype, "image", void 0);
exports.CreateTeaDto = CreateTeaDto;
class UpdateTeaDto extends (0, swagger_1.PartialType)(CreateTeaDto) {
}
exports.UpdateTeaDto = UpdateTeaDto;
class PaginationTeasDTO {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationTeasDTO.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationTeasDTO.prototype, "offset", void 0);
exports.PaginationTeasDTO = PaginationTeasDTO;
//# sourceMappingURL=teas.dtos.js.map