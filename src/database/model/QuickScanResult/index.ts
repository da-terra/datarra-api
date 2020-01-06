import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import quickscanResultSchema from "./quickscanResultSchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.QuickscanResult, quickscanResultSchema);
