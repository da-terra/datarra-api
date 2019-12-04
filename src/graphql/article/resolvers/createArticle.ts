import { BadRequest } from "http-errors";

type Arguments = {
  slug: string,
  target: number,
  scoreRange: {
    min: number,
    max: number
  },
  tags: string[],
  blocks: string[]
};

export default async (
  args: Arguments,
  context: GraphQLContext
) => {
  const article = await context.mongoose.Article.create(args);

  if (!article) {
    throw new BadRequest();
  }

  return article;
};
