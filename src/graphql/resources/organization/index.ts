import { Resource } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import createAcivityResolver from "../../field/activity";
import createOrganization from "./mutation/createOrganization";
import deleteOrganization from "./mutation/deleteOrganization";
import updateOrganization from "./mutation/updateOrganization";
import organization from "./query/organization";
import organizations from "./query/organizations";

const typeDefs = loader("./organization.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Query: {
      organization,
      organizations,
      activity: createAcivityResolver(Resource.Organization)
    },
    Mutation: {
      createOrganization,
      updateOrganization,
      deleteOrganization
    }
  }
};

export default schemaModule;
