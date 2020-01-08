import { GraphQLFieldResolver } from "graphql";
import { ApolloError } from "apollo-server";
import { Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../middleware/hasRole";

type Arguments = {
  slug: string;
  blocks: string;
};

const updatePage: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const { slug, blocks } = args;

  const update = await model.Page.updateOne(
    { slug },
    {
      blocks,
      updatedDate: new Date().toISOString()
    }
  );

  if (update.n < 1) {
    throw new ApolloError(`Page \`${slug}\` not found`, "NOT_FOUND");
  }

  const page = await model.Page.findOne({ slug });

  return page;
};

export default withRoleGuard(updatePage, Role.ContentEditor);
