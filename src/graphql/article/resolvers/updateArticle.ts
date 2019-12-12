import { GraphQLFieldResolver } from "graphql";
import { ApolloError } from "apollo-server";

type Arguments = {
  slug: string;
  target: number;
  minScore: number;
  maxScore: number;
  tags: number;
  blocks: string[];
};

export default (async (parent, args, { dataSources }, info) => {
  // Get page name from arguments
  const update = await dataSources.mongoose.Article.updateOne(
    { slug: args.slug },
    {
      ...args,
      $currentDate: {
        updatedDate: true
      }
    }
  );

  if (update.n < 1) {
    throw new ApolloError(`Article \`${args.slug}\` not found`, "NOT_FOUND");
  }

  const article = await dataSources.mongoose.Article.findOne({
    slug: args.slug
  });

  return article;
}) as GraphQLFieldResolver<any, IGraphQLContext, Arguments>;
