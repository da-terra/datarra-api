// Main file that ties everthing together
import { Express } from "express";

import createServer from "./server";
import {
  schema,
  rootValue,
  createGraphQlContextMiddleware,
  createGraphQlMiddleware
} from "./graphql";

const context = createGraphQlContextMiddleware();
const middleware = createGraphQlMiddleware({ schema, rootValue, context });

createServer((server: Express) => {
  server.use("/graphql", middleware);
});
