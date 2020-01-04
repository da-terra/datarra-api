import { GraphQLFieldResolver } from "graphql";
import { UserInputError } from "apollo-server";
import { Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../util/withRoleGuard";

type Arguments = {
  id: string;
  user: {
    role?: number;
    organizations?: [string];
  };
};

const updateUserResolver: GraphQLFieldResolver<
  any,
  IGraphQLContext,
  Arguments
> = async (parent, { id, user }, { model }, info) => {
  // Check if logged in user is admin
  const update = await model.user.updateOne({ id }, user);

  if (update.n < 1) {
    throw new UserInputError(`User ${id} not found`);
  }

  return await model.user.findOne({ id });
};

export default withRoleGuard(updateUserResolver, Role.Admin);
