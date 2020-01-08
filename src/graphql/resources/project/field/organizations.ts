import { IProject } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  slug: string;
  blocks: string;
};

const organizationsResolver: GraphQLFieldResolver<
  IProject,
  GraphQLContext,
  Arguments
> = async (source, args, { model }) => {
  // Get organization for project
  return await model.Organization.find({
    uuid: { $in: source.organizations }
  });
};

export default withResolverMiddleware(isAuthenticated)(organizationsResolver);
