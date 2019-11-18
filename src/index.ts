// Main file that ties everthing together
import { Express } from "express";

import { createMongooseConnection } from "./database";
import {
  schema,
  rootValue,
  createGraphQlContextMiddleware,
  createGraphQlMiddleware
} from "./graphql";
import createServer from "./server";

// Initiate database connection
createMongooseConnection();

// Setup graphQL
const context = createGraphQlContextMiddleware();
const graphQlMiddleware = createGraphQlMiddleware({
  schema,
  rootValue,
  context
});

createServer((server: Express) => {
  server.use("/graphql", graphQlMiddleware);
});
