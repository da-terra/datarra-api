import { NotFound } from "http-errors";

type Arguments = {
  slug: string;
  target: number;
  scoreRange: {
    min: number;
    max: number;
  };
  tags: string[];
  blocks: string[];
};

export default async (
  args: Arguments,
  context: GraphQLContext
) => {
  // Get page name from arguments
  const update = await context.mongoose.Article.updateOne(
    { slug: args.slug },
    args
  );

  if (update.n < 1) {
    throw new NotFound(`Article ${args.slug} not found`);
  }

  const article = await context.mongoose.Article.findOne({
    slug: args.slug
  });

  return article;
};
