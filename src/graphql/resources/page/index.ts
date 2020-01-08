import { loader } from "graphql.macro";

import page from "./resolvers/page";
import createPage from "./resolvers/createPage";
import updatePage from "./resolvers/updatePage";

const typeDefs = loader("./page.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Query: {
      page
    },
    Mutation: {
      createPage,
      updatePage
    }
  }
};

export default schemaModule;
