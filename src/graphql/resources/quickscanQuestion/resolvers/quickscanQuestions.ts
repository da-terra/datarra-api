import { GraphQLFieldResolver } from "graphql";
import Target from "../../../../data/Target";

type Arguments = {
  target: Target;
};

const quickscanQuestions: GraphQLFieldResolver<
  {},
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const questions = await model.QuickscanQuestion.find(args);

  return questions;
};

export default quickscanQuestions;
