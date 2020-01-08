import { GraphQLFieldResolver } from "graphql";
import { Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../middleware/hasRole";

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

export default withRoleGuard(deleteQuickscanResult, Role.ContentEditor);
