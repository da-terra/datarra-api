import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  slug?: string;
};

const event: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const event = await model.Event.findOne(args);

  if (!event) {
    throw new ApolloError(`Event \`${args.slug}\` not found`, "NOT_FOUND");
  }

  return event;
};

export default event;
