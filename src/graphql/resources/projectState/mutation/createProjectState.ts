import {
  Event,
  ICreateProjectStateInput,
  Resource,
  Role
} from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import registerActivity from "../../../../util/registerActivity";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  projectState: ICreateProjectStateInput;
};

const createProjectState: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { projectState }, context) => {
  const { model } = context;

  const newProjectState = await model.ProjectState.create(projectState);

  await registerActivity(context, {
    event: Event.CreateProjectState,
    resourceType: Resource.ProjectState,
    resource: newProjectState.id
  });

  return newProjectState;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  createProjectState
);
