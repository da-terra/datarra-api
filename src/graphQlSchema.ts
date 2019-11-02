import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

export default (): GraphQLSchema => {
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "RootQueryType",
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return "world";
          }
        }
      }
    })
  });
};
