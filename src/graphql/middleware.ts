import graphqlHTTP from "express-graphql";
import { HttpError, NotFound, BadRequest } from "http-errors";
import { execute, GraphQLSchema, ExecutionArgs } from "graphql";

const isDevelopment = process.env.NODE_ENV === "development";

type GraphQlMiddlewareOptions = {
  schema: GraphQLSchema;
  rootValue?: unknown;
  context?: unknown;
};

const getStatusCode = (error: HttpError): number | undefined => {
  switch (true) {
    case error instanceof NotFound:
      return 404;

    case error instanceof BadRequest:
      return 400;
  }

  throw new Error(`Status code for ${error} not found`);
};

export default (options: GraphQlMiddlewareOptions) =>
  graphqlHTTP({
    schema: options.schema,
    rootValue: options.rootValue,
    context: options.context,
    graphiql: isDevelopment,
    pretty: isDevelopment,
    customExecuteFn: async (args: ExecutionArgs) => {
      const result = await execute(args);

      if (!result.errors) {
        return result;
      }

      // Throw error when it's an HttpError
      result.errors.forEach(error => {
        if (error.originalError instanceof HttpError) {
          throw error.originalError;
        }
      });

      return result;
    }
  });
