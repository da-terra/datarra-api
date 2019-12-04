import { Schema } from "mongoose";

const articleSchema = new Schema({
  slug: {
    type: String,
    unique: true,
    index: true
  },
  target: Number,
  scoreRange: [],
  tags: [String],
  blocks: [String]
});

export default articleSchema;
