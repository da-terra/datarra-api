import { GraphQLFieldResolver } from "graphql";
import withRoleGuard from "../../../util/withRoleGuard";
import { Role } from "@data-science-platform/shared";

type Arguments = {
  search?: string;
  provider?: string;
  organizations?: string[];
};

const user: GraphQLFieldResolver<any, IGraphQLContext, Arguments> = async (
  parent,
  args,
  { model },
  info
) => {
  const query: any = {};

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
  return await model.user.find(query);
};

export default withRoleGuard(user, Role.Admin);
