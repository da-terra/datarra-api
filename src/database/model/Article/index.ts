import mongoose from "mongoose";
import articleSchema from "./articleSchema";

export default () => mongoose.model("Article", articleSchema);
