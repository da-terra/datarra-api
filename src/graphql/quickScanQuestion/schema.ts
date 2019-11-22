export const types = `
  type QuickScanQuestion {
    question: String,
    target: String,
    body: String
  }

  input QuickScanQuestionOption {
    label: String,
    score: Int
  }

  input CreateQuickScanQuestionInput {
    question: String!,
    target: String!,
    body: String,
    minScore: Int!,
    maxScore: Int!,
    options: [QuickScanQuestionOption!]
  }

  input UpdateQuickScanQuestionInput {
    _id: String!,
    question: String,
    target: String,
    body: String,
    minScore: Int,
    maxScore: Int,
    options: [QuickScanQuestionOption]
  }

  input DeleteQuickScanQuestionInput {
    _id: String!
  }
`;

export const queries = `
  quickScanQuestions: [QuickScanQuestion]!
`;

export const mutations = `
  createQuickScan(input: CreateQuickScanQuestionInput): QuickScanQuestion
  updateQuickScan(input: UpdateQuickScanQuestionInput): QuickScanQuestion
  deleteQuickScan(input: DeleteQuickScanQuestionInput): Boolean
`;
