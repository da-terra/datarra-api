import { GraphQLFieldResolver } from "graphql";
import withRoleGuard from "../../../middleware/hasRole";
import { Role } from "@data-science-platform/shared";

type Arguments = {
  search?: string;
  provider?: string;
  organizations?: string[];
};

type Query = {
  provider?: string;
  organizations?: {
    $in: string[];
  };
  $text?: {
    $search: string;
  };
};

const user: GraphQLFieldResolver<undefined, GraphQLContext> = async (
  parent,
  args,
  { model }
) => {
  const query: Query = {};

  if (args.provider) {
    query.provider = args.provider;
  }

  if (args.organizations) {
    query.organizations = { $in: args.organizations };
  }

  if (args.search) {
    query.$text = { $search: args.search };
  }

  // Get all users
  return await model.User.find(query);
};

export default withRoleGuard(user, Role.ContentEditor);
