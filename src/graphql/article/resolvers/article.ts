import { NotFound } from "http-errors";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  slug?: string;
};

export default (async (parent, args, { dataSources }, info) => {
  const { slug } = args;

  const article = await dataSources.mongoose.Article.findOne({ slug });

  if (!article) {
    throw new NotFound(`Article \`${slug}\` not found`);
  }

  return article;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
