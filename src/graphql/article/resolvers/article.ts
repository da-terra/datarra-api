import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  slug?: string;
};

export default (async (parent, args, { dataSources }, info) => {
  const article = await dataSources.mongoose.Article.findOne(args);

  if (!article) {
    throw new ApolloError(`Article \`${args.slug}\` not found`, "NOT_FOUND");
  }

  return article;
}) as GraphQLFieldResolver<any, IGraphQLContext, Arguments>;
