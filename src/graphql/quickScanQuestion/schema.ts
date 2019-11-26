export const types = `
  type QuickScanQuestion {
    _id: String,
    question: String,
    target: Int,
    body: String
  }

  input QuickScanQuestionOption {
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
    minScore: Int,
    maxScore: Int,
    options: [QuickScanQuestionOption]
  ): QuickScanQuestion

  updateQuickScanQuestion(
    _id: String!,
    question: String,
    target: Int,
    body: String,
    minScore: Int,
    maxScore: Int,
    options: [QuickScanQuestionOption]
  ): QuickScanQuestion

  deleteQuickScanQuestion(_id: String!): Boolean
`;
