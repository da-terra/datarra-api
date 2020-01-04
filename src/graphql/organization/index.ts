import { loader } from "graphql.macro";
import organization from "./resolvers/organization";
import organizations from "./resolvers/organizations";
import createOrganization from "./resolvers/createOrganization";
import updateOrganization from "./resolvers/updateOrganization";

const typeDefs = loader("./organization.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Query: {
      organization,
      organizations
    },
    Mutation: {
      createOrganization,
      updateOrganization
    }
  }
};

export default schemaModule;
