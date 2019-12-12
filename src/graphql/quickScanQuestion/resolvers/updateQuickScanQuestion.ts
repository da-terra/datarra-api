import { GraphQLFieldResolver } from "graphql";
import { ApolloError } from "apollo-server";

type Arguments = IQuickScanQuestion & { _id: string };

export default (async (parent, args, { dataSources }, info) => {
  const { _id, ...newQuestionValues } = args;

  const update = await dataSources.mongoose.QuickScanQuestion.updateOne(
    { _id },
    newQuestionValues
  );

  if (update.n < 1) {
    throw new ApolloError(`QuickScanQuestion ${_id} not found`, "NOT_FOUND");
  }

  const updatedQuestion = await dataSources.mongoose.QuickScanQuestion.findOne({
    _id
  });

  return updatedQuestion;
}) as GraphQLFieldResolver<any, IGraphQLContext, Arguments>;
