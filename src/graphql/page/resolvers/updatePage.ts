import { NotFound } from "http-errors";

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

  const update = await context.mongoose.Page.updateOne({ name }, { blocks });

  if (update.n < 1) {
    throw new NotFound(`Page ${name} not found`);
  }

  const page = await context.mongoose.Page.findOne({ name });

  return page;
};
