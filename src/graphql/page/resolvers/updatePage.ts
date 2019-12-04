import { GraphQLFieldResolver } from "graphql";
import { ApolloError } from "apollo-server";

type Arguments = {
  slug: string;
  blocks: string;
};

export default (async (parent, args, { dataSources }, info) => {
  const { slug, blocks } = args;

  const update = await dataSources.mongoose.Page.updateOne(
    { slug },
    { blocks }
  );

  if (update.n < 1) {
    throw new ApolloError(`Page \`${slug}\` not found`, "NOT_FOUND");
  }

  const page = await dataSources.mongoose.Page.findOne({ slug });

  return page;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
