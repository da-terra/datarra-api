import crypto from "crypto";
import { BadRequest } from "http-errors";

type CreateQuickScanResultArguments = IQuickScanResult;

export default async (
  createQuickScanResultArguments: CreateQuickScanResultArguments,
  context: GraphQLContext
) => {
  const uuid = crypto.randomBytes(64).toString("hex");

  // Transform answers to valid type
  const result = await context.mongoose.QuickScanResult.create({
    ...createQuickScanResultArguments,
    uuid
  });

  if (!result) {
    throw new BadRequest();
  }

  return result;
};
