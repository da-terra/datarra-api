import { Schema } from "mongoose";
import { imageSchema, createSchema } from "../shared";

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
