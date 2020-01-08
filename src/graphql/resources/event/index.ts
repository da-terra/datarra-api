import { Resource } from "@data-science-platform/shared";
import { loader } from "graphql.macro";
import createAcivityResolver from "../../field/activity";
import createEvent from "./mutation/createEvent";
import updateEvent from "./mutation/updateEvent";
import event from "./query/event";
import events from "./query/events";

const typeDefs = loader("./event.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Event: {
      activity: createAcivityResolver(Resource.Event)
    },
    Query: {
      event,
      events
    },
    Mutation: {
      updateEvent,
      createEvent
    }
  }
};

export default schemaModule;
