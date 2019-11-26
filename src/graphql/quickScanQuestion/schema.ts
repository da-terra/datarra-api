export const types = `
  type QuickScanQuestionOption {
    _id: String,
    label: String,
    score: Int
  }

  type QuickScanQuestion {
    _id: String,
    question: String,
    body: String,
    target: Int,
    min: Int,
    max: Int,
    options: [QuickScanQuestionOption!]
    salutation: String,
  }

  input QuickScanQuestionOptionInput {
    label: String,
    score: Int
  }
`;

export const queries = `
  quickScanQuestions(target: Int): [QuickScanQuestion!]!
`;

export const mutations = `
  createQuickScanQuestion(
    question: String,
    target: Int,
    body: String,
    min: Int,
    max: Int,
    options: [QuickScanQuestionOptionInput]
    salutation: String,
  ): QuickScanQuestion

  updateQuickScanQuestion(
    _id: String!,
    question: String,
    target: Int,
    body: String,
    min: Int,
    max: Int,
    options: [QuickScanQuestionOptionInput]
    salutation: String,
  ): QuickScanQuestion

  deleteQuickScanQuestion(_id: String!): Boolean
`;
