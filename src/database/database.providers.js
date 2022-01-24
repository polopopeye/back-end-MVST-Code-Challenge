"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const config_1 = require("../config");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configuration = (0, config_1.default)()) => {
            const { database, username, password, port, host } = configuration.postgres;
            const connection = await (0, typeorm_1.createConnection)({
                type: 'postgres',
                host,
                port,
                username,
                password,
                database,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });
            return connection;
        },
    },
];
//# sourceMappingURL=database.providers.js.map