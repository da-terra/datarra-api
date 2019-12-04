import { NotFound } from "http-errors";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  uuid: string;
};

export default (async (parent, args, { dataSources }, info) => {
  const result = await dataSources.mongoose.QuickScanResult.findOne(args);

  if (!result) {
    throw new NotFound("QuickScan profile not found");
  }

  return result;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
