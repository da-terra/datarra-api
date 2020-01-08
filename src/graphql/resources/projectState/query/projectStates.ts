import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {};
type Query = {};

const projectStates: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const query: Query = {};
  return model.ProjectState.find(query);
};

export default withResolverMiddleware(isAuthenticated)(projectStates);
