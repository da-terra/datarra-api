import { loader } from "graphql.macro";

import updateProject from "./mutation/updateProject";
import createProject from "./mutation/createProject";
import project from "./query/project";
import projects from "./query/projects";
import team from "./field/team";
import organizations from "./field/organizations";

const typeDefs = loader("./project.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Project: {
      organizations,
      team
    },
    Query: {
      project,
      projects
    },
    Mutation: {
      updateProject,
      createProject
    }
  }
};

export default schemaModule;
