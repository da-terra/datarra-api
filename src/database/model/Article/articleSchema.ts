import { ArticleState } from "@data-science-platform/shared";
import { createSchema, imageSchema, richTextSchema } from "../shared";

const articleSchema = createSchema({
  slug: {
    type: String,
    unique: true
  },
  title: String,
  description: String,
  image: imageSchema,
  author: String, // Reference to a User
  richText: richTextSchema,
  status: {
    type: Number,
    default: ArticleState.None
  },
  publishDate: {
    type: Date,
    default: Date.now
  }
});

export default articleSchema;
