import { GraphQLFieldResolver } from "graphql";
import { Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../util/withRoleGuard";

type Arguments = {
  uuid: string;
};

const organizationResolver: GraphQLFieldResolver<
  {},
  IGraphQLContext,
  Arguments
> = async (parent, { uuid }, { model }, info) => {
  return await model.organization.findOne({ uuid });
};

export default withRoleGuard(organizationResolver, Role.Admin);
