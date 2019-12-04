import { GraphQLFieldResolver } from "graphql";
import { ApolloError } from "apollo-server";

type Arguments = {
  uuid: string;
};

export default (async (parent, args, { dataSources }, info) => {
  const result = await dataSources.mongoose.QuickScanResult.findOne(args);

  if (!result) {
    throw new ApolloError("QuickScan profile not found", "NOT_FOUND");
  }

  return result;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
