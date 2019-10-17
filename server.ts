import { GraphqlServer } from "graphql-yoga";

const server = GraphqlServer({});

server.start(() => console.log("dooGoga server Running!"));