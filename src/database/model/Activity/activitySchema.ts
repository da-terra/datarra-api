import { createSchema } from "../shared";

const activitySchema = createSchema({
  mutation: String, //Name of the mutation that handled the action
  model: String,
  ref: String, // Reference to the model that was updated
  data: String,
  user: String, // Reference to the User that incurred the action
  createdDate: {
    type: Date,
    default: Date.now
  }
});

export default activitySchema;
