import { AuthenticationError, ForbiddenError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import { Role, isFlagged } from "@data-science-platform/shared";

type AnyResolver = GraphQLFieldResolver<any, IGraphQLContext, any>;

const withRoleGuard = (resolver: AnyResolver, role: Role) =>
  ((source, args, context, info) => {
    const { user } = context;

    if (user == null) {
      throw new AuthenticationError("Unauthorized");
    }

    if (!isFlagged(role, user.role)) {
      throw new ForbiddenError("Forbidden");
    }

    return resolver(source, args, context, info);
  }) as GraphQLFieldResolver<any, IGraphQLContext, any>;

export default withRoleGuard;
