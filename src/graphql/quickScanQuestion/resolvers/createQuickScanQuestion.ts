import { BadRequest } from "http-errors";
import { GraphQLFieldResolver } from "graphql";

type Arguments = IQuickScanQuestion;

export default (async (parent, args, { dataSources }, info) => {
  const question = await dataSources.mongoose.QuickScanQuestion.create(args);

  if (!question) {
    throw new BadRequest();
  }

  return question;
}) as GraphQLFieldResolver<any, IGraphQLContext, Arguments>;
