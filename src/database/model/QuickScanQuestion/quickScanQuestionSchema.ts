import { Schema } from "mongoose";
import Target from "../../../data/Target";

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
  ]
});

export default QuickScanQuestion;
