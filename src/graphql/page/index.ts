import { loader } from "graphql.macro";
import { page, createPage, updatePage } from "./resolvers";

const typeDefs = loader("./page.graphql");

const schemaModule: any = {
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
