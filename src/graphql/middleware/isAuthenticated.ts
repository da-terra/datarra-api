import { AuthenticationError } from "apollo-server";
import { GraphQLMiddleware } from "./withResolverMiddleware";

const isAuthenticated: GraphQLMiddleware = (source, args, context) => {
  const { user } = context;

  if (user == null) {
    throw new AuthenticationError("Unauthorized");
  }

  // User does not have access to they site because there isn't a role assigned
  if (user.role == null) {
    throw new AuthenticationError("Unauthorized");
  }
};

export default isAuthenticated;
