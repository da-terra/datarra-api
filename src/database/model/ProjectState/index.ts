import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import projectSchema from "./projectStateSchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.ProjectState, projectSchema);
