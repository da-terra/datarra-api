import { IArticle, Role } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  article: IArticle & {
    richText: {
      nodes: string;
    };
  };
};

const createArticleResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, context) => {
  const { model, user } = context;

  const article = await model.Article.create({
    ...args.article,

    // The author is equal to the account that created the article
    author: user.id,

    richText: [
      {
        ...args.article.richText,
        author: user.id
      }
    ]
  });

  return article;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  createArticleResolver
);
