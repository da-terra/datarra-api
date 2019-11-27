export const types = `
  type QuickScanQuestionOption {
    _id: String
    label: String
    score: Float
  }

  type QuickScanQuestion {
    _id: String,
    question: String
    body: String
    target: Int
    min: Float
    max: Float
    options: [QuickScanQuestionOption!]
    salutation: String
  }

  input QuickScanQuestionOptionInput {
    label: String,
    score: Float
  }
`;

export const queries = `
  quickScanQuestions(target: Int): [QuickScanQuestion!]!
`;

export const mutations = `
  createQuickScanQuestion(
    question: String
    target: Int
    body: String
    min: Float
    max: Float
    options: [QuickScanQuestionOptionInput]
    salutation: String
  ): QuickScanQuestion

  updateQuickScanQuestion(
    _id: String!,
    question: String,
    target: Int,
    body: String,
    min: Float,
    max: Float,
    options: [QuickScanQuestionOptionInput]
    salutation: String,
  ): QuickScanQuestion

  deleteQuickScanQuestion(_id: String!): Boolean
`;
