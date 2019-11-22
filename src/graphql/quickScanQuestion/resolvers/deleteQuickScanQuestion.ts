type DeleteQuickScanQuestionsArguments = {
  _id: string;
};

export default async (
  deleteQuickScanQuestionsArguments: DeleteQuickScanQuestionsArguments,
  context: GraphQLContext
) => {
  await context.mongoose.QuickScanQuestion.deleteOne(
    deleteQuickScanQuestionsArguments
  );

  return true;
};
