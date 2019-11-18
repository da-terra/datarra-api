import { BadRequest } from "http-errors";
import { Document } from "mongoose";

type CreatePageArguments = {
  name: string;
  blocks: string;
};

export default async (
  pageArguments: CreatePageArguments,
  context: GraphQLContext
) => {
  // Get page name from arguments
  const { name, blocks } = pageArguments;

  const page = await context.mongoose.Page.create({ name, blocks });

  if (!page) {
    throw new BadRequest();
  }

  return page;
};
