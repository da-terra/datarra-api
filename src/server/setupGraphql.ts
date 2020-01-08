import { IUser } from "@data-science-platform/shared";
import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import config from "../config";
import { plugins, schema } from "../graphql";
import AzureBlobStorage from "../lib/AzureBlobStorage";
import SendGridProvider from "../lib/SendGridProvider";

const setupGraphQL = (app: Express, models: Models): void => {
  const context: GraphQLContext = {
    provider: {
      email: new SendGridProvider(),
      storage: new AzureBlobStorage()
    },
    model: models,
    user: (undefined as unknown) as IUser
  };

  const apolloServer = new ApolloServer({
    schema,
    plugins,

    context: ({ req }): GraphQLContext => ({
      ...context,
      user: req.user as IUser
    }),

    // We need to resend credentials every request back to the server
    // to make sure passport can authenticate logged in users via apollo playground
    playground: {
      settings: {
        "request.credentials": "include"
      }
    }
  });

  apolloServer.applyMiddleware({
    app,
    cors: {
      origin: config.server.corsWhitelist,
      allowedHeaders: ["Authorization", "Content-Type"]
    }
  });
};

export default setupGraphQL;
