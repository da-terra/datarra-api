import { isFlagged, Role } from "@data-science-platform/shared";
import { ApolloError, ForbiddenError } from "apollo-server";
import isAuthenticated from "./isAuthenticated";
import { GraphQLMiddleware } from "./withResolverMiddleware";

const hasRole = (role: Role): GraphQLMiddleware => (
  source,
  args,
  context,
  info
): void => {
  const { user } = context;

  if (role === Role.Admin) {
    throw new ApolloError(
      "INTERNAL_SERVER_ERROR",
      "Don't use Admin role in `hasRole`, this will allow all users to user the action. Please use `isAuthenticated` instead"
    );
  }

  isAuthenticated(source, args, context, info);

  if (!isFlagged(role, user.role)) {
    throw new ForbiddenError("Forbidden");
  }
};

export default hasRole;
