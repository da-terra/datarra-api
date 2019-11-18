import mongoose from "mongoose";
import blogSchema from "./blogSchema";

export default () => mongoose.model("Blog", blogSchema);
