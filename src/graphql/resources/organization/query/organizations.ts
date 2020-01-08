import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {};

const organizationsResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = (parent, args, { model }) => model.Organization.find();

export default withResolverMiddleware(isAuthenticated)(organizationsResolver);
