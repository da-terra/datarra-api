import { loader } from "graphql.macro";

// Resolvers
import me from "./resolvers/me";
import user from "./resolvers/user";
import users from "./resolvers/users";
import updateUser from "./resolvers/updateUser";
import organizations from "./resolvers/organizations";

const typeDefs = loader("./user.graphql");

const schemaModule: any = {
  typeDefs,
  resolvers: {
    User: {
      organizations
    },
    Query: {
      me,
      user,
      users
    },
    Mutation: {
      updateUser
    }
  }
};

export default schemaModule;
