import { GraphQLFieldResolver } from "graphql";
import { ApolloError } from "apollo-server";

type Arguments = {
  slug: string;
};

export default (async (parent, args, { dataSources }, info) => {
  const { slug } = args;

  const page = await dataSources.mongoose.Page.findOne({ slug });

  if (!page) {
    throw new ApolloError(`Page \`${slug}\` not found`, "NOT_FOUND");
  }

  return page;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
