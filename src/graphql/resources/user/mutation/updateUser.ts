import { GraphQLFieldResolver } from "graphql";
import { UserInputError } from "apollo-server";
import { Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../middleware/hasRole";

type Arguments = {
  id: string;
  user: {
    role?: number;
    organizations?: [string];
  };
};

const updateUserResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { id, user }, { model }) => {
  // Check if logged in user is admin
  const update = await model.User.updateOne({ id }, user);

  if (update.n < 1) {
    throw new UserInputError(`User ${id} not found`);
  }

  return await model.User.findOne({ id });
};

export default withRoleGuard(updateUserResolver, Role.ContentEditor);
