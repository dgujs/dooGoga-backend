
import path from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

const typeDefs = fileLoader(path.join(__dirname, '*.graphql'))

export default mergeTypes(typeDefs)