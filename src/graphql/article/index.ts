import { loader } from "graphql.macro";

import updateArticle from "./resolvers/updateArticle";
import createArticle from "./resolvers/createArticle";
import article from "./resolvers/article";
import articles from "./resolvers/articles";

const typeDefs = loader("./article.graphql");

const schemaModule: any = {
  typeDefs,
  resolvers: {
    Query: {
      article,
      articles
    },
    Mutation: {
      updateArticle,
      createArticle
    }
  }
};

export default schemaModule;
