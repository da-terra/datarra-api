import { GraphQLFieldResolver } from "graphql";
import { NotFound } from "http-errors";

type Arguments = {
  slug: string;
  target: number;
  minScore: number;
  maxScore: number;
  tags: string[];
  blocks: string[];
};

export default (async (parent, args, { dataSources }, info) => {
  // Get page name from arguments
  const update = await dataSources.mongoose.Article.updateOne(
    { slug: args.slug },
    args
  );

  if (update.n < 1) {
    throw new NotFound(`Article ${args.slug} not found`);
  }

  const article = await dataSources.mongoose.Article.findOne({
    slug: args.slug
  });

  return article;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
