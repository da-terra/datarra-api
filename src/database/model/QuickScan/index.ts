import mongoose from "mongoose";
import quickScanSchema from "./quickScanSchema";

export default () => mongoose.model("QuickScan", quickScanSchema);
