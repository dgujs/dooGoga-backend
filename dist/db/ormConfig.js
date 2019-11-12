"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const connectionOptions = {
    type: "postgres",
    database: process.env.DB_NAME || "",
    synchronize: true,
    logging: true,
    entities: [
        __dirname + "/entities/*.ts"
    ],
    host: process.env.DB_ENDPOINT || "localhost",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || ""
};
exports.default = connectionOptions;
//# sourceMappingURL=ormConfig.js.map