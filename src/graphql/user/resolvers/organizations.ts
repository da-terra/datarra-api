import { GraphQLFieldResolver } from "graphql";
import { IUser, Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../util/withRoleGuard";

type Arguments = {};

const organizationsResolver: GraphQLFieldResolver<
  IUser,
  IGraphQLContext,
  Arguments
> = async (source, args, { model }, info) => {
  return await model.organization.find({
    uuid: { $in: source.organizations }
  });
};

export default withRoleGuard(organizationsResolver, Role.Admin);
