import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  userOnly: boolean;
};

type Query = {
  team?: {
    $in: string[];
  };
};

const projects: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model, user }) => {
  const query: Query = {};

  if (args.userOnly) {
    query.team = { $in: [user.id] };
  }

  return model.Project.find(query);
};

export default withResolverMiddleware(isAuthenticated)(projects);
