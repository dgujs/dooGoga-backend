
import { GraphQLServer } from "graphql-yoga";

import typeDefs from "./graphql/typeDefs/mergeSchemas";
import resolvers from "./graphql/resolvers/mergeResolvers";
import { ApolloServer, gql } from "apollo-server-koa";

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => console.log("dooGoga server Running!"));