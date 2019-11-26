export const types = `
  type QuickScanResult {
    name: String,
    email: String,
    role: String,
    phone: String
  }

  type QuickScanResultCompany{
    companyName: String,
    website: String,
    sector: String,
    region: String,
    employeeCount: Int
  }

  input QuickScanResultCompanyInput { 
    companyName: String!,
    website: String,
    sector: String,
    region: String,
    employeeCount: Int
  }

  input QuickScanResultAnswerInput { 
    questionId: String!,
    value: String!
  }

  input QuickScanResultPersonInput { 
    name: String!,
    role: String!,
    email: String!,
    phone: String,
    comment: String
  }
`;

export const queries = `
  quickScanResult(target: Int): [QuickScanResult!]!
`;

export const mutations = `
  createQuickScanResult(
    company: QuickScanResultCompanyInput!
    person: QuickScanResultPersonInput!
    answers: [QuickScanResultAnswerInput!]!
  ): QuickScanResult

  deleteQuickScanResult(_id: String!): Boolean
`;
