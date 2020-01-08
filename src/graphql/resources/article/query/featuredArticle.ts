import { ArticleState } from "@data-science-platform/shared";
import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {};

const featuredArticle: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const article = await model.Article.findOne({
    status: ArticleState.Featured
  });

  if (article == null) {
    throw new ApolloError(`Article not found`, "NOT_FOUND");
  }

  return article;
};

export default featuredArticle;
