import { NotFound } from "http-errors";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  slug: string;
};

export default (async (parent, args, { dataSources }, info) => {
  const { slug } = args;

  const page = await dataSources.mongoose.Page.findOne({ slug });

  if (!page) {
    throw new NotFound(`Page \`${slug}\` not found`);
  }

  return page;
}) as GraphQLFieldResolver<any, GraphQLContext, Arguments>;
