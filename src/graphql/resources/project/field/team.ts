import { IProject } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {};

const teamResolver: GraphQLFieldResolver<
  IProject,
  GraphQLContext,
  Arguments
> = (source, args, { model }) => {
  // Get organization for project
  return model.User.find({
    id: { $in: source.team }
  });
};

export default withResolverMiddleware(isAuthenticated)(teamResolver);
