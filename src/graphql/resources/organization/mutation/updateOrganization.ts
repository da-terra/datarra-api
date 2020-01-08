import {
  Event,
  IUpdateOrganizationInput,
  Resource,
  Role
} from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import registerActivity from "../../../../util/registerActivity";
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

  await registerActivity(context, {
    event: Event.UpdateOrganization,
    resourceType: Resource.Organization,
    resource: updatedOrganization.id
  });

  return updatedOrganization;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  updateOrganizationResolver
);
