"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const mergeSchemas_1 = __importDefault(require("./graphql/typeDefs/mergeSchemas"));
const mergeResolvers_1 = __importDefault(require("./graphql/resolvers/mergeResolvers"));
const index_1 = __importDefault(require("./db/index"));
const app = new express_1.default();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs: mergeSchemas_1.default,
    resolvers: mergeResolvers_1.default,
    introspection: true,
    playground: true,
});
server.applyMiddleware({ app });
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("dooGoga server Running!");
    index_1.default();
});
// createConnection(connectionOptions).then(async connection => {
//     console.log("db");
// }).catch(error => console.log(error));
//# sourceMappingURL=server.js.map