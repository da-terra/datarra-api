import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  slug: string;
};

const articleResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const article = await model.Article.findOne({
    slug: args.slug
  });

  if (!article) {
    throw new ApolloError(`Article \`${args.slug}\` not found`, "NOT_FOUND");
  }

  return article;
};

export default articleResolver;
