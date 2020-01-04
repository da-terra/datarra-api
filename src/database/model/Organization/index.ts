import mongoose from "mongoose";
import organizationSchema from "./organizationSchema";

export default () => mongoose.model("Organization", organizationSchema);
