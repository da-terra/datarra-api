import { Schema } from "mongoose";

const QuickScanQuestion = new Schema({
  question: {
    type: String,
    unique: true,
    index: true
  },
  target: Number,
  body: String,
  minScore: Number,
  maxScore: Number,
  options: [
    {
      label: String,
      score: Number
    }
  ],
  salutation: String
});

export default QuickScanQuestion;
