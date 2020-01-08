import { GraphQLFieldResolver } from "graphql";
import { ApolloError } from "apollo-server";
import { IEvent, Role } from "@data-science-platform/shared";
import withRoleGuard from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";
import hasRole from "../../../middleware/hasRole";

type Arguments = {
  event: IEvent;
};

const createEvent: GraphQLFieldResolver<{}, GraphQLContext, Arguments> = async (
  parent,
  { event },
  { model }
) => {
  const now = new Date().toISOString();

  const newEvent = await model.Event.create({
    ...event,
    updatedDate: now,
    createdDate: now
  });

  if (!newEvent) {
    throw new ApolloError("", "BAD_REQUESTS");
  }

  return newEvent;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(createEvent);
