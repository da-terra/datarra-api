import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import eventSchema from "./eventSchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.Event, eventSchema);
