import { ICreateOrganizationInput, Role } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import uuid from "uuid/v4";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  organization: ICreateOrganizationInput;
};

const createOrganizationResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, context) => {
  const { model } = context;

  const organization = await model.Organization.create({
    ...args.organization,
    uuid: uuid()
  });

  return organization;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  createOrganizationResolver
);
