import "dotenv/config";

// Main file that ties everthing together
import { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { createMongooseConnection } from "./database";
import { schema, dataSources, context } from "./graphql";
import createServer from "./server";
import config from "./config";

// Initiate database connection
createMongooseConnection();

createServer(async (app: Express) => {
  const apolloServer = new ApolloServer({
    schema,
    dataSources,
    context
  });

  apolloServer.applyMiddleware({
    app,
    cors: {
      origin: config.server.corsWhitelist
    }
  });
});
