import "dotenv/config";

// Main file that ties everthing together
import { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { createMongooseConnection, MongooseDataSource } from "./database";
import { schema } from "./graphql";
import createServer from "./server";
import config from "./config";

// Initiate database connection
createMongooseConnection();

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    mongoose: new MongooseDataSource()
  })
});

createServer((app: Express) => {
  server.applyMiddleware({
    app,
    cors: {
      origin: config.server.corsWhitelist
    }
  });
});
