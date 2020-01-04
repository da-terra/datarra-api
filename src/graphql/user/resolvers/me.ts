import { GraphQLFieldResolver } from "graphql";
import withAuthGuard from "../../../util/withAuthGuard";

type Arguments = {};

const meResolver: GraphQLFieldResolver<{}, IGraphQLContext, Arguments> = async (
  parent,
  args,
  { user },
  info
) => {
  // Return user if logged in
  return user;
};

export default withAuthGuard(meResolver);
