import { IQuickscanQuestion, Role } from "@data-science-platform/shared";
import { UserInputError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import withRoleGuard from "../../../middleware/hasRole";

type Arguments = IQuickscanQuestion;

const createQuickscanQuestion: GraphQLFieldResolver<
  {},
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const now = new Date().toISOString();

  const question = await model.QuickscanQuestion.create({
    ...args,
    updatedDate: now,
    createdDate: now
  });

  if (!question) {
    throw new UserInputError("Unable to create quickscan question");
  }

  return question;
};

export default withRoleGuard(createQuickscanQuestion, Role.ContentEditor);
