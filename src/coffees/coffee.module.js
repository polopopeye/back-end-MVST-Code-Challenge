"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const categories_controllers_1 = require("./controllers/categories.controllers");
const coffees_controller_1 = require("./controllers/coffees.controller");
const category_provider_1 = require("./providers/category.provider");
const coffee_providers_1 = require("./providers/coffee.providers");
const categories_service_1 = require("./services/categories.service");
const coffees_service_1 = require("./services/coffees.service");
let CoffeesModule = class CoffeesModule {
};
CoffeesModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [coffees_controller_1.CoffeesController, categories_controllers_1.CategoriesController],
        providers: [
            coffees_service_1.CoffeesService,
            categories_service_1.CategoriesService,
            ...coffee_providers_1.CoffeeProviders,
            ...category_provider_1.CategoryProviders,
        ],
        exports: [coffees_service_1.CoffeesService],
    })
], CoffeesModule);
exports.CoffeesModule = CoffeesModule;
//# sourceMappingURL=coffee.module.js.map