import { createSchema } from "../shared";

const projectSchema = createSchema({
  name: String,
  color: String,
  nextState: String, // The next state that the project can go to
  rollbackState: String // The state that the project may roll back to
});

export default projectSchema;
