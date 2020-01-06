import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import userSchema from "./userSchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.User, userSchema);
