import mongoose from "mongoose";
import userSchema from "./userSchema";

export default () => mongoose.model("User", userSchema);
