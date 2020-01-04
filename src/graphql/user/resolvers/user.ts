import { GraphQLFieldResolver } from "graphql";
import { Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../util/withRoleGuard";

type Arguments = {
  user: {
    id: string;
  };
};

const userResolver: GraphQLFieldResolver<
  any,
  IGraphQLContext,
  Arguments
> = async (parent, { user }, { model, user: loggedInUser }, info) => {
  return await model.user.findOne(user);
};

export default withRoleGuard(userResolver, Role.Admin);
