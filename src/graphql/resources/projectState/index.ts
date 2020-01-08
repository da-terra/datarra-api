import { loader } from "graphql.macro";
import nextState from "./field/nextState";
import rollbackState from "./field/rollbackState";
import createProjectState from "./mutation/createProjectState";
import updateProjectState from "./mutation/updateProjectState";
import projectStates from "./query/projectStates";
import createAcivityResolver from "../../field/activity";
import { Resource } from "@data-science-platform/shared";

const typeDefs = loader("./projectState.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    ProjectState: {
      nextState,
      rollbackState,
      activity: createAcivityResolver(Resource.ProjectState)
    },

    Query: {
      projectStates
    },

    Mutation: {
      updateProjectState,
      createProjectState
    }
  }
};

export default schemaModule;
