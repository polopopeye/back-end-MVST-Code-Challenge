"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeasProviders = void 0;
const teas_entity_1 = require("../entities/teas.entity");
exports.TeasProviders = [
    {
        provide: 'TEA_REPOSITORY',
        useFactory: (connection) => connection.getRepository(teas_entity_1.Tea),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=teas.providers.js.map