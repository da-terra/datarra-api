import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  me: boolean;
  users: string[]; // References to a users
};

type Query = {
  users?: { $in: string[] };
};

const activitiesResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model, user }) => {
  const query: Query = {};

  if (args.users != null) {
    query.users = { $in: args.users };
  }

  // Get all activities for logged in user if `me` filter is on
  if (args.me) {
    query.users = { $in: [user.id] };
  }

  return model.Activity.find(query);
};

export default withResolverMiddleware(isAuthenticated)(activitiesResolver);
