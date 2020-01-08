import {
  Event,
  IUpdateEventInput,
  Resource,
  Role
} from "@data-science-platform/shared";
import { UserInputError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import registerActivity from "../../../../util/registerActivity";
import hasRole from "../../../middleware/hasRole";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  slug: string;
  event: IUpdateEventInput;
};

const updateEventResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, context) => {
  const { model, user } = context;

  // Get page name from arguments
  const update = await model.Event.updateOne(
    { slug: args.slug },
    {
      ...args.event,

      $push: {
        // Push new rich text when it's in the arguments
        ...(args.event.richText && {
          richText: {
            ...args.event.richText,
            author: user.id
          }
        })
      }
    }
  );

  if (update.n < 1) {
    throw new UserInputError(`Event \`${args.event.slug}\` not found`);
  }

  const updatedEvent = await model.Event.findOne({
    slug: args.event.slug && args.slug
  });

  await registerActivity(context, {
    event: Event.UpdateEvent,
    // eslint-disable-next-line
    resource: updatedEvent!.id,
    resourceType: Resource.Event
  });

  return updatedEvent;
};

export default withResolverMiddleware(hasRole(Role.ContentEditor))(
  updateEventResolver
);
