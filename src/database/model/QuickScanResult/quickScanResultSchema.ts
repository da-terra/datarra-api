import { Schema } from "mongoose";

const QuickScanResult = new Schema({
  uuid: {
    type: String,
    unique: true,
    index: true
  },
  target: Number,
  person: {
    name: String,
    email: String,
    role: String,
    phone: String
  },
  company: {
    companyName: String,
    website: String,
    sector: String,
    region: String,
    employeeCount: Number
  },
  answers: [
    {
      questionId: Schema.Types.ObjectId,
      value: Number
    }
  ],
  comment: String
});

export default QuickScanResult;
