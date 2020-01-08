import { Role } from "@data-science-platform/shared";
import { GraphQLFieldResolver } from "graphql";
import withRoleGuard from "../../../middleware/hasRole";

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

export default withRoleGuard(deleteQuickscanQuestion, Role.ContentEditor);
