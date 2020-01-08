import { IProjectState } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {};

const rollbackState: GraphQLFieldResolver<
  IProjectState,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  if (parent.rollbackState == null) {
    return null;
  }

  return model.ProjectState.findOne({ id: parent.rollbackState });
};

export default withResolverMiddleware(isAuthenticated)(rollbackState);
