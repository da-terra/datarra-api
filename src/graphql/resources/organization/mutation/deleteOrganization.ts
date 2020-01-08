import { Event, Resource, Role } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import registerActivity from "../../../../util/registerActivity";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  id: string;
};

const deleteOrganizationResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { id }, context) => {
  const { model } = context;

  const action = await model.Organization.deleteOne({
    id
  });

  if (action.ok !== 1) {
    return false;
  }

  await registerActivity(context, {
    event: Event.DeleteOrganization,
    resourceType: Resource.Organization,
    resource: id
  });

  return true;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  deleteOrganizationResolver
);
