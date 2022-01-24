"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryProviders = void 0;
const category_entity_1 = require("../entities/category.entity");
exports.CategoryProviders = [
    {
        provide: 'CATEGORY_REPOSITORY',
        useFactory: (connection) => connection.getRepository(category_entity_1.Category),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=category.provider.js.map