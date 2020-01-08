import { Role } from "@data-science-platform/shared";
import { UserInputError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  slug: string;
  blocks: string;
};

const createPage: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  // Get page name from arguments
  const { slug, blocks } = args;

  const now = new Date().toISOString();

  const page = await model.Page.create({
    slug,
    blocks,
    createdDate: now,
    updatedDate: now
  });

  if (!page) {
    throw new UserInputError("Cannot create page");
  }

  return page;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(createPage);
