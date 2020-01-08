import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  id: string;
};

const deleteFileResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) =>
  model.File.deleteOne({
    id: args.id
  });

export default withResolverMiddleware(isAuthenticated)(deleteFileResolver);
