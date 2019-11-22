import { Schema } from "mongoose";

const QuickScanResult = new Schema({
  person: {
    name: String,
    email: String,
    role: String,
    phone: String,
  },
  company: {
    companyName: String,
    website: String,
    sector: String,
    region: String,
    employeeCount: Number,
  },
  answer: [
    {
      question: Schema.Types.ObjectId,
      score: Number
    }
  ],
  comment: String
});

export default QuickScanResult;
