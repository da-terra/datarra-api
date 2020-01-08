import { Role } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  uuid: string;
};

const deleteQuickscanResult: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  await model.QuickscanResult.deleteOne(args);

  return true;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  deleteQuickscanResult
);
