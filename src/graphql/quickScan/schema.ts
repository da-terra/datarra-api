export const types = `
  type QuickScanQuestionOption {
    label: String!
    value: Int!
  }

  type QuickScanQuestion {
    question: String!
    options: [QuickScanQuestionOption!]! # usually an array of 4 items
  }

  type QuickScan {
    questions: [QuickScanQuestion!]!
    averageDuration: String!
  }

  input QuickScanAnswer {
    name: String!
    value: Int!
  }

  input QuickScanInput {
    # Fase 1 - Company details
    company: String!
    website: String
    sector: String

    # Fase 2 - Quick scan
    answers: [QuickScanAnswer!]!

    # Fase 3 - Personal details
    fullName: String!
    email: String!
    companyRole: String!
    comment: String!
  }
`;

export const queries = `
  quickScan: QuickScan
`;

export const mutations = `
  saveQuickScan(input: QuickScanInput): Boolean
`;
