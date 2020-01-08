import { IUser } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {};

const organizationsResolver: GraphQLFieldResolver<
  IUser,
  GraphQLContext,
  Arguments
> = async (source, args, { model }) => {
  return await model.Organization.find({
    uuid: { $in: source.organizations }
  });
};

export default withResolverMiddleware(isAuthenticated)(organizationsResolver);
