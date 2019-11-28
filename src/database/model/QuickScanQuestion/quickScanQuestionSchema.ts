import { Schema } from "mongoose";

const QuickScanQuestion = new Schema({
  question: {
    type: String,
    unique: true,
    index: true
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

export default QuickScanQuestion;
