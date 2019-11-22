import Target from "../data/Target";

declare global {
  type IQuickScanQuestionOption = {
    label: String;
    score: Number;
  };

  type IQuickScanQuestion = {
    question: String;
    target: Target;
    body: String;
    minScore: Number;
    maxScore: Number;
    options: IQuickScanQuestionOption[];
  };
}

export {};
