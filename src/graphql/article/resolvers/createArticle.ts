import { BadRequest } from "http-errors";
import { GraphQLFieldResolver } from "graphql";
import { ApolloError } from "apollo-server";

type Arguments = {
  article: IArticle;
};

export default (async (parent, args, { dataSources }, info) => {
  const article = await dataSources.mongoose.Article.create({
    ...args.article,
    $currentDate: {
      updatedDate: true
    }
  });

  if (!article) {
    throw new ApolloError("", "BAD_REQUESTS");
  }

  return article;
}) as GraphQLFieldResolver<any, IGraphQLContext, Arguments>;
