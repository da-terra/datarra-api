import { ICreateProjectStateInput, Role } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  projectState: ICreateProjectStateInput;
};

const createProjectState: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { projectState }, { model }) =>
  model.ProjectState.create(projectState);

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  createProjectState
);
