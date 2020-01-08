import { Resource } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import createAcivityResolver from "../../field/activity";
import author from "./fields/author";
import richText from "./fields/richText";
import createArticle from "./mutation/createArticle";
import updateArticle from "./mutation/updateArticle";
import article from "./query/article";
import articles from "./query/articles";
import featuredArticle from "./query/featuredArticle";

const typeDefs = loader("./article.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Article: {
      author,
      richText,
      activity: createAcivityResolver(Resource.Article)
    },
    Query: {
      article,
      articles,
      featuredArticle
    },
    Mutation: {
      updateArticle,
      createArticle
    }
  }
};

export default schemaModule;
