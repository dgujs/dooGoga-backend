
import "dotenv/config";

import { ApolloServer } from "apollo-server-express";
import express from "express";
import { createServer } from "http";
import typeDefs from "./graphql/typeDefs/mergeSchemas";
import resolvers from "./graphql/resolvers/mergeResolvers";

import dbConnect from "./db/index";

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
});

const port: number = parseInt(process.env.PORT) || 4000;

server.applyMiddleware({ app, path: '/graphql' });
const httpServer = createServer(app);

httpServer.listen({ port: port },
    (): void => {
        console.log(`\n🚀\n dooGoga Server Running!`);
        dbConnect();
    });


