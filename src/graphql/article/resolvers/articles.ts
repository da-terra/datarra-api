import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  target: number;
  tags: string[];
  minScore: number;
  maxScore: number;
};

export default (async (parent, args, { dataSources }, info) => {
  const { target } = args;

  const query: any = {};

  if (target) {
    query.target = target;
  }

  const articles = await dataSources.mongoose.Article.find(query);

  return articles;
}) as GraphQLFieldResolver<{}, GraphQLContext, Arguments>;
