import { AuthenticationError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

// eslint-disable-next-line
type AnyResolver = GraphQLFieldResolver<any, IGraphQLContext, any>;

const withRoleGuard = (resolver: AnyResolver): AnyResolver => (
  source,
  args,
  context,
  info
): AnyResolver => {
  const { user } = context;

  if (user == null) {
    throw new AuthenticationError("Unauthorized");
  }

  return resolver(source, args, context, info);
};

export default withRoleGuard;
