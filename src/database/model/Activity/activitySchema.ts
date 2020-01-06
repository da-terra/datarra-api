import { createSchema } from "../shared";

const activitySchema = createSchema({
  event: String, // Generally the name of the resolver that handled the action
  data: String,
  user: String, // Reference to the User that incurred the action
  createdDate: {
    type: Date,
    default: Date.now
  }
});

export default activitySchema;
