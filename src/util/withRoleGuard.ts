import {
  AuthenticationError,
  ForbiddenError,
  ApolloError
} from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import { Role, isFlagged } from "@data-science-platform/shared";

// eslint-disable-next-line
type AnyResolver = GraphQLFieldResolver<any, IGraphQLContext, any>;

const withRoleGuard = (resolver: AnyResolver, role: Role): AnyResolver => (
  source,
  args,
  context,
  info
): AnyResolver => {
  const { user } = context;

  if (role === Role.Admin) {
    throw new ApolloError(
      "INTERNAL_SERVER_ERROR",
      "Don't use Admin role in guards, this will allow all users to user the action"
    );
  }

  if (user == null) {
    throw new AuthenticationError("Unauthorized");
  }

  if (!isFlagged(role, user.role)) {
    throw new ForbiddenError("Forbidden");
  }

  return resolver(source, args, context, info);
};

export default withRoleGuard;
