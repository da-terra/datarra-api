import uuid from "uuid/v4";
import { GraphQLFieldResolver } from "graphql";
import { Role, IOrganization } from "@data-science-platform/shared";
import withRoleGuard from "../../../util/withRoleGuard";

type Arguments = {
  organization: IOrganization;
};

const createOrganizationResolver: GraphQLFieldResolver<
  any,
  IGraphQLContext,
  Arguments
> = async (parent, { organization }, { model }, info) => {
  return await model.organization.create({
    ...organization,
    uuid: uuid()
  });
};

export default withRoleGuard(createOrganizationResolver, Role.Admin);
