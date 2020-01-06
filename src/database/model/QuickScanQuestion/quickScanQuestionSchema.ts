import { createSchema } from "../shared";

const QuickscanQuestion = createSchema({
  question: {
    type: String,
    unique: true
  },
  target: Number,
  body: String,
  min: Number,
  max: Number,
  options: [
    {
      label: String,
      value: Number
    }
  ],
  salutation: String
});

export default QuickscanQuestion;
