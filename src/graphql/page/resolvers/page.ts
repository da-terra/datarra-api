import { NotFound } from "http-errors";

type PageArguments = {
  name: string;
};

export default async (
  pageArguments: PageArguments,
  context: GraphQLContext
) => {
  const { name } = pageArguments;

  const page = await context.mongoose.Page.findOne({ name });

  if (!page) {
    throw new NotFound(`Page \`${name}\` not found`);
  }

  return page;
};
