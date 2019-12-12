import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  target: number;
  tags: string[];
  minScore: number;
  maxScore: number;
};

export default (async (parent, args, { dataSources }, info) => {
  const { target } = args;

  const conditions: any = {};

  if (target) {
    // matches documents where any of the bit positions given by the query are set
    conditions.target = { $eq: args.target };
  }

  const article = await dataSources.mongoose.Article.find(conditions);

  return article;
}) as GraphQLFieldResolver<{}, IGraphQLContext, Arguments>;
