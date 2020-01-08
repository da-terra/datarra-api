import { GraphQLFieldResolver } from "graphql";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  ids?: string[];
  search?: string;
  mimetype?: string;
  encoding?: string;
};

type Query = {
  id?: { $in: string[] };
  $text?: { $search: string };
  mimetype?: string;
  encoding?: string;
};

const filesResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const query: Query = {};

  if (args.ids != null) {
    query.id = { $in: args.ids };
  }

  if (args.search != null) {
    query.$text = { $search: args.search };
  }

  if (args.mimetype != null) {
    query.mimetype = args.mimetype;
  }

  if (args.encoding != null) {
    query.encoding = args.encoding;
  }

  return model.File.find(query);
};

export default withResolverMiddleware(isAuthenticated)(filesResolver);
