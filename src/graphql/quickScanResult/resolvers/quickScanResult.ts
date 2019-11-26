import Target from "../../../data/Target";

type QuickScanResultArguments = {
  target: Target;
};

export default async (
  quickScanResultArguments: QuickScanResultArguments,
  context: GraphQLContext
) => {
  const result = await context.mongoose.QuickScanResult.find(
    quickScanResultArguments
  );

  return result;
};
