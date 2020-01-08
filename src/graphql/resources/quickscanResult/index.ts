import { loader } from "graphql.macro";
import quickscanResult from "./resolvers/quickscanResult";
import createQuickscanResult from "./resolvers/createQuickscanResult";
import deleteQuickscanResult from "./resolvers/deleteQuickscanResult";

const typeDefs = loader("./quickscanResult.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Query: {
      quickscanResult
    },
    Mutation: {
      createQuickscanResult,
      deleteQuickscanResult
    }
  }
};

export default schemaModule;
