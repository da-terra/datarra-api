import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import activitySchema from "./activitySchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.Activity, activitySchema);
