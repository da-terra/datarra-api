import { Role } from "@data-science-platform/shared";
import { UserInputError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  project: {
    shortName: string;
    title: string;
    organizations: string[];
    team: string[];
    richText: string;
    duration?: {
      startDate: string;
      endDate: string;
    };
  };
};

type Query = {
  shortName: string;
  title: string;
  organizations: string[];
  team: string[];
  duration?: {
    startDate: string;
    endDate: string;
  };
  richText: [
    {
      nodes: string;
      author: string;
    }
  ];
};

const createProject: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { project }, context) => {
  const { model, user } = context;

  // Validate input
  if (project.organizations.length < 1) {
    throw new UserInputError(
      "Property `organizations` must contain at least one element"
    );
  }

  const { richText, team, ...rest } = project;

  const projectInput: Query = {
    ...rest,

    // Add user that created the project to the team by default
    team: [...team.filter(id => id !== user.id), user.id],

    richText: [
      {
        nodes: richText,
        author: user.id
      }
    ]
  };

  return await model.Project.create(projectInput);
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  createProject
);
