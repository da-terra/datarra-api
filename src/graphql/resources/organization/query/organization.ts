import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  id: string;
};

const organizationResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { id }, { model }) => model.Organization.findOne({ id });

export default withResolverMiddleware(isAuthenticated)(organizationResolver);
