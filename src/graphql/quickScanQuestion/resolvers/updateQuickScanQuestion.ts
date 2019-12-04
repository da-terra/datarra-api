import { BadRequest, NotFound } from "http-errors";
import { GraphQLFieldResolver } from "graphql";

type Arguments = IQuickScanQuestion & { _id: string };

export default (async (parent, args, { dataSources }, info) => {
  const { _id, ...newQuestionValues } = args;

  const update = await dataSources.mongoose.QuickScanQuestion.updateOne(
    { _id },
    newQuestionValues
  );

  if (update.n < 1) {
    throw new NotFound(`QuickScanQuestion ${_id} not found`);
  }

  const updatedQuestion = await dataSources.mongoose.QuickScanQuestion.findOne({
    _id
  });

  return updatedQuestion;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
