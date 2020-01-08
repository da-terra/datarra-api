import { GraphQLFieldResolver } from "graphql";

type Arguments = {};

const events: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  const events = await model.Event.find({});

  return events;
};

export default events;
