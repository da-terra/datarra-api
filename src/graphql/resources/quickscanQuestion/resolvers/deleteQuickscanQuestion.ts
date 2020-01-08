import { Role } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  id: string;
};

const deleteQuickscanQuestion: GraphQLFieldResolver<
  {},
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  await model.QuickscanQuestion.deleteOne(args);

  return true;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  deleteQuickscanQuestion
);
