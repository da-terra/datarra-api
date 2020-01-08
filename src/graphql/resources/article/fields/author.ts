import { IArticle } from "@data-science-platform/shared";
import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {};

const author: GraphQLFieldResolver<
  IArticle,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const user = await model.User.findOne({
    id: parent.author
  });

  if (!user) {
    throw new ApolloError(
      `Author (${parent.author}) for article \`${parent.slug}\` not found`,
      "NOT_FOUND"
    );
  }

  return user;
};

export default author;
