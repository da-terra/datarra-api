import { GraphQLFieldResolver } from "graphql";
import { IOrganization, Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../util/withRoleGuard";

type Arguments = {
  uuid: string;
  organization: IOrganization;
};

const updateOrganizationResolver: GraphQLFieldResolver<
  any,
  IGraphQLContext,
  Arguments
> = async (parent, { uuid, organization }, { model }, info) => {
  return await model.organization.updateOne(
    {
      uuid
    },
    organization
  );
};

export default withRoleGuard(updateOrganizationResolver, Role.Admin);
