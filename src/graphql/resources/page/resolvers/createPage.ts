import { UserInputError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import { Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../middleware/hasRole";

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

export default withRoleGuard(createPage, Role.ContentEditor);
