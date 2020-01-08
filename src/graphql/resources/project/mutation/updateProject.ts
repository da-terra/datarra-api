import { Event, Resource, Role } from "@data-science-platform/shared";
import { ApolloError, UserInputError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import registerActivity from "../../../../util/registerActivity";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  shortName: string;
  project: {
    shortName?: string;
    title?: string;
    organizations?: string[];
    body?: string;
    duration?: {
      startDate: string;
      endDate: string;
    };
  };
};

const updateProject: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { shortName, project }, context) => {
  const { model } = context;

  // Validate input
  if (project.organizations != null && project.organizations.length < 1) {
    throw new UserInputError(
      "Property `organizations` must contain at least one element"
    );
  }

  const update = await model.Project.updateOne({ shortName }, project);

  if (update.n < 1) {
    throw new ApolloError(
      `Project \`${project.shortName}\` not found`,
      "NOT_FOUND"
    );
  }

  const updatedProject = await model.Project.findOne({
    shortName: project.shortName
  });

  await registerActivity(context, {
    event: Event.UpdateProject,
    resourceType: Resource.Project,
    resource: updatedProject!.id
  });

  return updatedProject;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  updateProject
);
