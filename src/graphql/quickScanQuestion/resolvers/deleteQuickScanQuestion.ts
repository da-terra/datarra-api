import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  _id: string;
};

export default (async (parent, args, { dataSources }, info) => {
  await dataSources.mongoose.QuickScanQuestion.deleteOne(args);

  return true;
}) as GraphQLFieldResolver<any, IGraphQLContext, Arguments>;
