import mongoose from "mongoose";
import pageSchema from "./pageSchema";

export default () => mongoose.model("Page", pageSchema);
