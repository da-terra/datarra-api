import { BadRequest } from "http-errors";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  slug: string;
  blocks: string;
};

export default (async (parent, args, { dataSources }, info) => {
  // Get page name from arguments
  const { slug, blocks } = args;

  const page = await dataSources.mongoose.Page.create({ slug, blocks });

  if (!page) {
    throw new BadRequest();
  }

  return page;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
