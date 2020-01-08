import { loader } from "graphql.macro";
import organizations from "./field/organizations";
import updateUser from "./mutation/updateUser";
import me from "./query/me";
import user from "./query/user";
import users from "./query/users";

const typeDefs = loader("./user.graphql");

const schemaModule = {
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
