import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  target?: number;
};

export default (async (parent, args, { dataSources }, info) => {
  const { target } = args;

  const article = await dataSources.mongoose.Article.findOne({
    target
  });

  if (article == null) {
    throw new ApolloError(`Article not found`, "NOT_FOUND");
  }

  return article;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
