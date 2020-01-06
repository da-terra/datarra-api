import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import fileSchema from "./fileSchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.File, fileSchema);
