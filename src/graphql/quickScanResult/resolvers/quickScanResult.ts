import { NotFound } from 'http-errors';

type QuickScanResultArguments = {
  uuid: string;
};

export default async (
  quickScanResultArguments: QuickScanResultArguments,
  context: GraphQLContext
) => {
  const result = await context.mongoose.QuickScanResult.findOne(
    quickScanResultArguments
  );

  if(!result) {
    throw new NotFound("QuickScan profile not found");
  }

  return result;
};
