import { loader } from "graphql.macro";

import quickscanQuestions from "./resolvers/quickscanQuestions";
import createQuickscanQuestion from "./resolvers/createQuickscanQuestion";
import updateQuickscanQuestion from "./resolvers/updateQuickscanQuestion";
import deleteQuickscanQuestion from "./resolvers/deleteQuickscanQuestion";

const typeDefs = loader("./quickscanQuestion.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Query: {
      quickscanQuestions
    },
    Mutation: {
      createQuickscanQuestion,
      updateQuickscanQuestion,
      deleteQuickscanQuestion
    }
  }
};

export default schemaModule;
