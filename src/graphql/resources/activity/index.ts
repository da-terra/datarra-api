import { loader } from "graphql.macro";
import user from "./resolvers/user";

const typeDefs = loader("./activity.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Activity: {
      user
    }
  }
};

export default schemaModule;
