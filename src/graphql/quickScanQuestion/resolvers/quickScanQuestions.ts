import Target from "../../../data/Target";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  target: Target;
};

export default (async (parent, args, { dataSources }, info) => {
  const questions = await dataSources.mongoose.QuickScanQuestion.find(args);

  return questions;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
