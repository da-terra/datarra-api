import { createSchema, richTextSchema } from "../shared";

const projectSchema = createSchema({
  // Short unique string that is easy to remember, this is used as the identifier for a project
  shortName: {
    type: String,
    unique: true
  },

  // Project title
  title: String,

  // Identifier that points to an organization
  organizations: [String],

  // Array of identifiers
  team: [String],

  // List of files attached to the project
  attachments: [
    {
      name: String,
      location: String
    }
  ],

  // Versioned list of rich text for a project
  richText: richTextSchema,

  // Dates
  duration: {
    startDate: Date,
    endDate: Date
  }
});

export default projectSchema;
