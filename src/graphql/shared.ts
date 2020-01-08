import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { loader } from "graphql.macro";

const shared = loader("./shared.graphql");

export default {
  typeDefs: shared,
  resolvers: {
    Date: new GraphQLScalarType({
      name: "Date",
      description: "Date scalar type",
      parseValue(value): Date {
        return new Date(value); // value from the client
      },
      serialize(value): string {
        return value.getTime(); // value sent to the client
      },
      parseLiteral(ast): Date | null {
        if (ast.kind === Kind.INT) {
          return new Date(ast.value); // ast value is always in string format
        }

        return null;
      }
    })
  }
};
