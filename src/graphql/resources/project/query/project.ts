import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  shortName: string;
};

const project: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { shortName }, { model }) => {
  return await model.Project.findOne({
    shortName
  });
};

export default withResolverMiddleware(isAuthenticated)(project);
