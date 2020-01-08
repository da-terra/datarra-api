import { loader } from "graphql.macro";
import RegisterMutationDirective from "./RegisterMutationDirective";

const schemaDirectives = {
  model: RegisterMutationDirective
};

const typeDefs = loader("./directives.graphql");

export default {
  typeDefs,
  schemaDirectives
};
