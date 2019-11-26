export const types = `
  type QuickScanResultCompany {
    companyName: String!
    website: String
    sector: String
    region: String
    employeeCount: Int
  }

  type QuickScanResultPerson {
    name: String!
    role: String!
    email: String!
    phone: String
  }

  type QuickScanResultAnswer {
    questionId: String!
    value: Float!
  }

  type QuickScanResult {
    uuid: String!
    target: Int!
    company: QuickScanResultCompany!
    person: QuickScanResultPerson!
    answers: [QuickScanResultAnswer!]!
    comment: String,
  }

  input QuickScanResultCompanyInput {
    companyName: String!
    website: String
    sector: String
    region: String
    employeeCount: Int
  }

  input QuickScanResultAnswerInput {
    questionId: String!
    value: Float!
  }

  input QuickScanResultPersonInput {
    name: String!
    role: String!
    email: String!
    phone: String
  }
`;

export const queries = `
  quickScanResult(uuid: String): QuickScanResult
`;

export const mutations = `
  createQuickScanResult(
    target: Int!
    company: QuickScanResultCompanyInput!
    person: QuickScanResultPersonInput!
    answers: [QuickScanResultAnswerInput!]!
    comment: String
  ): QuickScanResult

  deleteQuickScanResult(_id: String!): Boolean
`;
