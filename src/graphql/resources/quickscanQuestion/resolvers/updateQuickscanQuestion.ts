import { IQuickscanQuestion, Role } from "@data-science-platform/shared";
import { UserInputError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = IQuickscanQuestion;

const updateQuickscanQuestion: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const { id, ...newQuestionValues } = args;

  const update = await model.QuickscanQuestion.updateOne(
    { id },
    {
      ...newQuestionValues,
      updatedDate: new Date().toISOString()
    }
  );

  if (update.n < 1) {
    throw new UserInputError(`QuickscanQuestion ${id} not found`);
  }

  const updatedQuestion = await model.QuickscanQuestion.findOne({
    id
  });

  return updatedQuestion;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  updateQuickscanQuestion
);
