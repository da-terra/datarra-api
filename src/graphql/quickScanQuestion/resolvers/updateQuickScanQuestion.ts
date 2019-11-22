import { BadRequest } from "http-errors";

type UpdateQuickScanQuestionsArguments = IQuickScanQuestion & { _id: string };

export default async (
  updateQuickScanQuestionsArguments: UpdateQuickScanQuestionsArguments,
  context: GraphQLContext
) => {
  const { _id, ...newQuestionValues } = updateQuickScanQuestionsArguments;

  const updatedQuestion = await context.mongoose.QuickScanQuestion.updateOne(
    { _id },
    newQuestionValues
  );

  if (!updatedQuestion) {
    throw new BadRequest();
  }

  return updatedQuestion;
};
