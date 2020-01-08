import { GraphQLFieldResolver } from "graphql";
import { ApolloError } from "apollo-server";

type Arguments = {
  slug: string;
};

const page: GraphQLFieldResolver<undefined, GraphQLContext, Arguments> = async (
  parent,
  args,
  { model }
) => {
  const { slug } = args;

  const page = await model.Page.findOne({ slug });

  if (!page) {
    throw new ApolloError(`Page \`${slug}\` not found`, "NOT_FOUND");
  }

  return page;
};

export default page;
