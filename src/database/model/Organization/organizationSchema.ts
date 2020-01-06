import { createSchema, imageSchema } from "../shared";

const organizationSchema = createSchema({
  name: String,
  image: imageSchema,
  location: [
    {
      address: String,
      city: String,
      country: String
    }
  ]
});

export default organizationSchema;
