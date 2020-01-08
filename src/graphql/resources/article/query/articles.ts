import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  target: number;
};

const articlesResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const article = await model.Article.find({});

  return article;
};

export default articlesResolver;
