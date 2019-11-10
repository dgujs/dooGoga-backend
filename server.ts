
import "dotenv/config";
import { ApolloServer } from "apollo-server-koa";
import Koa from "koa";

import typeDefs from "./graphql/typeDefs/mergeSchemas";
import resolvers from "./graphql/resolvers/mergeResolvers";

import dbConnect from "./db/index";

const app = new Koa();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;
app.listen(port, async() => {
    console.log("dooGoga server Running!")
    await dbConnect();
});

// createConnection(connectionOptions).then(async connection => {
//     console.log("db");
// }).catch(error => console.log(error));


