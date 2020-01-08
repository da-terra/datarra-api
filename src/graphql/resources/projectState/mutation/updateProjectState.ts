import {
  Event,
  IUpdateProjectStateInput,
  Resource,
  Role
} from "@data-science-platform/shared";
import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import registerActivity from "../../../../util/registerActivity";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  id: string;
  projectState: IUpdateProjectStateInput;
};

const updateProjectState: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { id, projectState }, context) => {
  const { model } = context;

  const update = await model.Project.updateOne({ id }, projectState);

  if (update.n < 1) {
    throw new ApolloError(`ProjectState \`${id}\` not found`, "NOT_FOUND");
  }

  const updatedProjectState = await model.Project.findOne({
    id
  });

  await registerActivity(context, {
    event: Event.UpdateProjectState,
    resourceType: Resource.ProjectState,
    resource: id
  });

  return updatedProjectState;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  updateProjectState
);
