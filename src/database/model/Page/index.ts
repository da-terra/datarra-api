import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import pageSchema from "./pageSchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.Page, pageSchema);
