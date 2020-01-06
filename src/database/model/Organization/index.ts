import { Resource } from "@data-science-platform/shared";
import mongoose, { Document, Model } from "mongoose";
import organizationSchema from "./organizationSchema";

export default (): Model<Document, {}> =>
  mongoose.model(Resource.Organization, organizationSchema);
