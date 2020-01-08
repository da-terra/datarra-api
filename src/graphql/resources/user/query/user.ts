import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  user: {
    id: string;
  };
};

const userResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { user }, { model }) => {
  return await model.User.findOne(user);
};

export default withResolverMiddleware(isAuthenticated)(userResolver);
