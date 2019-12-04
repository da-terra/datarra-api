import { Schema } from "mongoose";

const pageSchema = new Schema({
  slug: {
    type: String,
    unique: true,
    index: true
  },
  blocks: [String]
});

export default pageSchema;
