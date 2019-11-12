"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ormConfig_1 = __importDefault(require("./ormConfig"));
const dbConnect = () => {
    typeorm_1.createConnection(ormConfig_1.default).then(async (connection) => {
        // const test_user = new User();
        // const test_spot = new Spot();
        // const test_auth = new AuthMail();
        // await connection.manager.save(test_user);
        // await connection.manager.save(test_spot);
        // await connection.manager.save(test_auth);
    }).catch(error => console.log(error));
};
exports.default = dbConnect;
//# sourceMappingURL=index.js.map