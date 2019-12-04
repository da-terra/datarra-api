import { loader } from "graphql.macro";
import {
  quickScanResult,
  createQuickScanResult,
  deleteQuickScanResult
} from "./resolvers";

const typeDefs = loader("./quickScanResult.graphql");

const schemaModule: any = {
  typeDefs,
  resolvers: {
    Query: {
      quickScanResult
    },
    Mutation: {
      createQuickScanResult,
      deleteQuickScanResult
    }
  }
};

export default schemaModule;
