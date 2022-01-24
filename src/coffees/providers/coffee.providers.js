"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeProviders = void 0;
const coffee_entity_1 = require("../entities/coffee.entity");
exports.CoffeeProviders = [
    {
        provide: 'COFFEE_REPOSITORY',
        useFactory: (connection) => connection.getRepository(coffee_entity_1.Coffee),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=coffee.providers.js.map