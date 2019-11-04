import graphqlHTTP from "express-graphql";
import createGraphQLSchema from "./graphQlSchema";

const isDevelopment = process.env.NODE_ENV === "development";

export default () => {
  const graphQLSchema = createGraphQLSchema();

  const graphqlMiddleware = graphqlHTTP({
    schema: graphQLSchema,
    graphiql: isDevelopment,
    pretty: isDevelopment
  });

  return graphqlMiddleware;
};
