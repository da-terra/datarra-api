import { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "../graphql";
import SendGridProvider from "../lib/SendGridProvider";
import config from "../config";

const setupGraphQL = (app: Express, models: IModels) => {
  const context: IGraphQLContext = {
    provider: {
      email: new SendGridProvider(
        config.sendGrid.apiKey,
        config.sendGrid.config
      )
    },
    model: models
  };

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({
      ...context,
      user: req.user
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
