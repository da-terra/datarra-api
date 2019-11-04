import graphqlHTTP from "express-graphql";
import { GraphQLSchema } from "graphql";

const isDevelopment = process.env.NODE_ENV === "development";

type GraphQlMiddlewareOptions = {
  schema: GraphQLSchema;
  rootValue?: unknown;
  context?: unknown;
};

export default (options: GraphQlMiddlewareOptions) =>
  graphqlHTTP({
    schema: options.schema,
    rootValue: options.rootValue,
    context: options.context,
    graphiql: isDevelopment,
    pretty: isDevelopment
  });
