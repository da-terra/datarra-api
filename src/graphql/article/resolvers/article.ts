import { NotFound } from "http-errors";

type Arguments = {
  slug: string;
};

export default async (
  args: Arguments,
  context: GraphQLContext
) => {
  const { slug } = args;

  const article = await context.mongoose.Article.findOne({ slug });

  if (!article) {
    throw new NotFound(`Article \`${slug}\` not found`);
  }

  return article;
};
