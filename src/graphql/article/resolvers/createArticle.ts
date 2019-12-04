import { BadRequest } from "http-errors";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  slug: string;
  target: number;
  scoreRange: {
    min: number;
    max: number;
  };
  tags: string[];
  blocks: string[];
};

export default (async (parent, args, { dataSources }, info) => {
  const article = await dataSources.mongoose.Article.create(args);

  if (!article) {
    throw new BadRequest();
  }

  return article;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
