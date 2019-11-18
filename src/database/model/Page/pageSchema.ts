import { Schema } from "mongoose";

const pageSchema = new Schema({
  name: {
    type: String,
    unique: true,
    index: true
  },
  blocks: [String]
});

export default pageSchema;
