import { BadRequest } from "http-errors";

type CreateQuickScanResultArguments = IQuickScanResult;

export default async (
  createQuickScanResultArguments: CreateQuickScanResultArguments,
  context: GraphQLContext
) => {
  const result = await context.mongoose.QuickScanResult.create(
    createQuickScanResultArguments
  );

  if (!result) {
    throw new BadRequest();
  }

  return result;
};
