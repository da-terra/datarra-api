import { loader } from "graphql.macro";
import {
  quickScanQuestions,
  createQuickScanQuestion,
  updateQuickScanQuestion,
  deleteQuickScanQuestion
} from "./resolvers";

const typeDefs = loader("./quickScanQuestion.graphql");

const schemaModule: any = {
  typeDefs,
  resolvers: {
    Query: {
      quickScanQuestions
    },
    Mutation: {
      createQuickScanQuestion,
      updateQuickScanQuestion,
      deleteQuickScanQuestion
    }
  }
};

export default schemaModule;
