import { Resource } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import withResolverMiddleware from "../middleware/withResolverMiddleware";
import isAuthenticated from "../middleware/isAuthenticated";
import { DocumentQuery, Document } from "mongoose";

type ActivityResolver = GraphQLFieldResolver<
  { id: string },
  GraphQLContext,
  { limit?: number }
>;

type Query = {
  resourceType: Resource;
  id: string;
  limit?: number;
};

const createAcivityResolver = (resourceType: Resource): ActivityResolver => {
  // Create resolver for given resourceType
  const resolver: ActivityResolver = (parent, args, { model }) => {
    const query: Query = {
      resourceType,
      id: parent.id
    };

    let documentQuery: DocumentQuery<
      Document[],
      Document,
      {}
    > = model.Activity.find(query);

    // Limit returned results if limit argument is not empty
    if (args.limit != null) {
      documentQuery = documentQuery.limit(args.limit);
    }

    return documentQuery;
  };

  // Activity for a resource can only be retrieved when user is logged in
  return withResolverMiddleware(isAuthenticated)(resolver);
};

export default createAcivityResolver;
