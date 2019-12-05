import { loader } from "graphql.macro";

import updateArticle from "./resolvers/updateArticle";
import createArticle from "./resolvers/createArticle";
import article from "./resolvers/article";
import articles from "./resolvers/articles";
import featuredArticle from "./resolvers/featuredArticle";

const typeDefs = loader("./article.graphql");

const schemaModule: any = {
  typeDefs,
  resolvers: {
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
