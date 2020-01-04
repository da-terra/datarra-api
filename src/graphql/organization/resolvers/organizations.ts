import { GraphQLFieldResolver } from "graphql";
import { Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../util/withRoleGuard";

type Arguments = {};

const organizationsResolver: GraphQLFieldResolver<
  {},
  IGraphQLContext,
  Arguments
> = async (parent, args, { model }, info) => {
  return await model.organization.find({});
};

export default withRoleGuard(organizationsResolver, Role.Admin);
