import { GraphQLFieldResolver, GraphQLResolveInfo } from "graphql";

export type GraphQLMiddleware<
  TSource = any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TArgs = { [argName: string]: any }
> = (
  source: TSource,
  args: TArgs,
  context: GraphQLContext,
  info: GraphQLResolveInfo
) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GraphQLMiddlewareResolver = GraphQLFieldResolver<any, GraphQLContext, any>;

const withResolverMiddleware = (...middlewares: GraphQLMiddleware[]) => (
  resolver: GraphQLMiddlewareResolver
): GraphQLMiddleware => (...args): GraphQLMiddlewareResolver => {
  // Run all middlewares before actually running the resolver
  middlewares.forEach(middleware => middleware(...args));

  return resolver(...args);
};

export default withResolverMiddleware;
