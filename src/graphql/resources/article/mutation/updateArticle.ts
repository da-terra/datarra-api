import { Event, IArticle, Role, Resource } from "@data-science-platform/shared";
import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";
import registerActivity from "../../../../util/registerActivity";

type Arguments = {
  slug: string;
  article: IArticle;
};

const updateArticleResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, context) => {
  const { model, user } = context;

  const update = await model.Article.updateOne(
    { slug: args.slug },
    {
      ...args.article,

      $push: {
        // Push new rich text when it's in the arguments
        ...(args.article.richText && {
          richText: {
            ...args.article.richText,
            author: user.id
          }
        })
      }
    }
  );

  if (update.ok === false) {
    throw new ApolloError(`Article \`${args.slug}\` not found`, "NOT_FOUND");
  }

  const updatedArticle = await model.Article.findOne({
    slug: args.article.slug && args.slug
  });

  await registerActivity(context, {
    event: Event.UpdateArticle,
    // eslint-disable-next-line
    resource: updatedArticle!.id,
    resourceType: Resource.Article
  });

  return updatedArticle;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  updateArticleResolver
);
