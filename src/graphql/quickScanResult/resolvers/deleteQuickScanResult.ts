type DeleteQuickScanResultArguments = {
  _id: string;
};

export default async (
  deleteQuickScanResultArguments: DeleteQuickScanResultArguments,
  context: GraphQLContext
) => {
  await context.mongoose.QuickScanResult.deleteOne(
    deleteQuickScanResultArguments
  );

  return true;
};
