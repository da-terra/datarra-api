import { IProjectState } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {};

const nextState: GraphQLFieldResolver<
  IProjectState,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  if (parent.nextState == null) {
    return null;
  }

  return model.ProjectState.findOne({ id: parent.nextState });
};

export default withResolverMiddleware(isAuthenticated)(nextState);
