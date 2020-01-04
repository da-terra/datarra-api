import { AuthenticationError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

type AnyResolver = GraphQLFieldResolver<any, IGraphQLContext, any>;

const withRoleGuard = (resolver: AnyResolver) =>
  ((source, args, context, info) => {
    const { user } = context;

    if (user == null) {
      throw new AuthenticationError("Unauthorized");
    }

    return resolver(source, args, context, info);
  }) as GraphQLFieldResolver<any, IGraphQLContext, any>;

export default withRoleGuard;
