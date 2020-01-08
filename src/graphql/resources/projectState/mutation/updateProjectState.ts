import { IUpdateProjectStateInput, Role } from "@data-science-platform/shared";
import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  id: string;
  projectState: IUpdateProjectStateInput;
};

const updateProjectState: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { id, projectState }, { model }) => {
  const update = await model.Project.updateOne({ id }, projectState);

  if (update.n < 1) {
    throw new ApolloError(`ProjectState \`${id}\` not found`, "NOT_FOUND");
  }

  return model.Project.findOne({
    id
  });
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  updateProjectState
);
