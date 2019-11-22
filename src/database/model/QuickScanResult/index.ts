import mongoose from "mongoose";
import quickScanResultSchema from "./quickScanResultSchema";

export default () => mongoose.model("QuickScanResult", quickScanResultSchema);
