import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {};

const meResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { user }) => {
  // Return user if logged in
  return user;
};

export default withResolverMiddleware(isAuthenticated)(meResolver);
