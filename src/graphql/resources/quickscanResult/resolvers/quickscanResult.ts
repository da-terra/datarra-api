import { GraphQLFieldResolver } from "graphql";

type Arguments = {
  uuid: string;
};

const quickscanResult: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model }) => {
  return await model.QuickscanResult.findOne({
    uuid: args.uuid
  });
};

export default quickscanResult;
