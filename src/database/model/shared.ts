import { Schema } from "mongoose";

export const imageSchema = {
  src: String,
  alt: String,
  fallbackColor: {
    type: String,
    default: "#eeeeee"
  }
};

export const richTextSchema = [
  {
    nodes: String,
    author: String,
    createdDate: {
      type: Date,
      default: Date.now
    }
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createSchema = (schema: any): Schema => new Schema(schema);
