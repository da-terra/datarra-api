import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import quickscanSchema from "./quickscanQuestionSchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.QuickscanQuestion, quickscanSchema);
