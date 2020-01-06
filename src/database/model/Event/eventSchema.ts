import { createSchema, richTextSchema } from "../shared";

const articleSchema = createSchema({
  slug: {
    type: String,
    unique: true
  },
  title: String,
  startDate: String,
  color: String,
  richText: richTextSchema
});

export default articleSchema;
