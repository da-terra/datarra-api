import { IArticle, isFlagged, Role } from "@data-science-platform/shared";
import { ForbiddenError, UserInputError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  limit?: number;
  offset?: number;
};

const richTextResolver: GraphQLFieldResolver<
  IArticle,
  GraphQLContext,
  Arguments
> = async (parent, args, { user }) => {
  const richText = parent.richText;

  if (args.limit != null && args.limit < 1) {
    throw new UserInputError("Invalid arguments", {
      limit: "Limit argument must be greater than zero"
    });
  }

  if (!isFlagged(Role.ContentEditor, user?.role)) {
    // Only content editors should be able to see the full richText history
    if (args.limit != null && args.limit > 1) {
      throw new ForbiddenError(
        "You're not allowed to see the full history of an article"
      );
    }

    args.limit = 1;
  }

  return richText.slice(args.offset || 0, args.limit);
};

export default richTextResolver;
