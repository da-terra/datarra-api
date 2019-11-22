import mongoose from "mongoose";
import quickScanSchema from "./quickScanQuestionSchema";

export default () => mongoose.model("QuickScanQuestion", quickScanSchema);
