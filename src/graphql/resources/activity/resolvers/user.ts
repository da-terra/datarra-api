import { IActivity } from "@data-science-platform/shared";
import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {};

const userResolver: GraphQLFieldResolver<
  IActivity,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const user = await model.User.findOne({
    id: parent.user
  });

  if (!user) {
    throw new ApolloError(
      `User (${parent.user}) for activity \`${parent.model}\` not found`,
      "NOT_FOUND"
    );
  }

  return user;
};

export default withResolverMiddleware(isAuthenticated)(userResolver);
