export const types = `
  type ContentPage {
    name: String!
    blocks: [String!]!
  }
`;

export const queries = `
  page(name: String): ContentPage
`;

export const mutations = `
  createPage(name: String, blocks: [String!]!): ContentPage
  updatePage(name: String, blocks: [String!]!): ContentPage
`;
