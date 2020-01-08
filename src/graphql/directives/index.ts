import { loader } from "graphql.macro";
import RegisterMutationsDirective from "./RegisterMutationsDirective";

export const schemaDirectives = {
  registerMutations: RegisterMutationsDirective
};

export const schema = {
  typeDefs: loader("./directives.graphql")
};
