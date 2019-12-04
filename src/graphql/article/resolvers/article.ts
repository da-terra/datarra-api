import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  slug?: string;
};

export default (async (parent, args, { dataSources }, info) => {
  const { slug } = args;

  const article = await dataSources.mongoose.Article.findOne({ slug });

  if (!article) {
    throw new ApolloError(`Article \`${slug}\` not found`, "NOT_FOUND");
  }

  return article;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
