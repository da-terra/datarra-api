import Target from "../../../data/Target";

type QuickScanQuestionsArguments = {
  target: Target;
};

export default async (
  quickScanQuestionsArguments: QuickScanQuestionsArguments,
  context: GraphQLContext
) => {
  const questions = await context.mongoose.QuickScanQuestion.find(
    quickScanQuestionsArguments
  );

  return questions;
};
