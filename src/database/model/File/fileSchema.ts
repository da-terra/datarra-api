import { createSchema } from "../shared";

const fileSchema = createSchema({
  uuid: {
    type: String,
    unique: true
  },
  filename: String,
  mimetype: String,
  encoding: String
});

fileSchema.index({
  filename: "text"
});

export default fileSchema;
