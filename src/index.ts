// Main file that ties everthing together
import { Express } from "express";

import createServer from "./server";
import createGraphQlMiddleware from "./graphQlMiddleware";

createServer((server: Express) => {
  server.use("/graphql", createGraphQlMiddleware());
});
