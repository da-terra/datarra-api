import { BadRequest } from "http-errors";
import Target from "../../../data/Target";

type CreateQuickScanQuestionsArguments = IQuickScanQuestion;

export default async (
  createQuickScanQuestionsArguments: CreateQuickScanQuestionsArguments,
  context: GraphQLContext
) => {
  const question = await context.mongoose.QuickScanQuestion.create(
    createQuickScanQuestionsArguments
  );

  if (!question) {
    throw new BadRequest();
  }

  return question;
};
