import { Schema } from "mongoose";

const articleSchema = new Schema({
  slug: {
    type: String,
    unique: true,
    index: true
  },
  image: {
    src: String,
    alt: String,
    fallbackColor: String
  },
  author: {
    fullName: String,
    email: String
  },
  title: String,
  description: String,
  blocks: [String],
  publishedDate: Date,
  updatedDate: Date,
  tags: Number,
  category: Number,
  target: Number,
  minScore: Number,
  maxScore: Number
});

export default articleSchema;
