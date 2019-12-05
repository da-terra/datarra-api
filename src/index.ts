import "dotenv/config";

// Main file that ties everthing together
import { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import {
  createMongooseConnection,
  MongoDBDataSource,
  MongooseDataSource,
  createMongoDbClient
} from "./database";
import { schema } from "./graphql";
import createServer from "./server";
import config from "./config";
import { MongoClient } from "mongodb";

// Initiate database connection
createMongooseConnection();

createServer(async (app: Express) => {
  const mongoDbClient = await createMongoDbClient();
  const mongoDbDataSource = new MongoDBDataSource(mongoDbClient);

  const apolloServer = new ApolloServer({
    schema,
    dataSources: () => ({
      mongodb: mongoDbDataSource,
      mongoose: new MongooseDataSource()
    })
  });

  apolloServer.applyMiddleware({
    app,
    cors: {
      origin: config.server.corsWhitelist
    }
  });
});
