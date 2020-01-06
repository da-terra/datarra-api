import { createSchema, richTextSchema } from "../shared";

const pageSchema = createSchema({
  slug: {
    type: String,
    unique: true,
    index: true
  },
  richText: richTextSchema
});

export default pageSchema;
