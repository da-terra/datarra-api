import { BadRequest, NotFound } from "http-errors";

type UpdateQuickScanQuestionsArguments = IQuickScanQuestion & { _id: string };

export default async (
  updateQuickScanQuestionsArguments: UpdateQuickScanQuestionsArguments,
  context: GraphQLContext
) => {
  const { _id, ...newQuestionValues } = updateQuickScanQuestionsArguments;

  const update = await context.mongoose.QuickScanQuestion.updateOne(
    { _id },
    newQuestionValues
  );

  if (update.n < 1) {
    throw new NotFound(`QuickScanQuestion ${_id} not found`);
  }

  const updatedQuestion = await context.mongoose.QuickScanQuestion.findOne({
    _id
  });

  return updatedQuestion;
};
