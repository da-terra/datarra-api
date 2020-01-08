import { IUpdateOrganizationInput, Role } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  id: string;
  organization: IUpdateOrganizationInput;
};

const updateOrganizationResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { id, organization }, context) => {
  const { model } = context;

  const updatedOrganization = await model.Organization.updateOne(
    {
      id
    },
    organization
  );

  return updatedOrganization;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  updateOrganizationResolver
);
