import crypto from "crypto";
import { BadRequest } from "http-errors";
import { GraphQLFieldResolver } from "graphql";

type Arguments = IQuickScanResult;

export default (async (parent, args, { dataSources }, info) => {
  const uuid = crypto.randomBytes(64).toString("hex");

  // Transform answers to valid type
  const result = await dataSources.mongoose.QuickScanResult.create({
    ...args,
    uuid
  });

  if (!result) {
    throw new BadRequest();
  }

  return result;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
