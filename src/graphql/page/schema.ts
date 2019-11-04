export const types = `
  type ContentPage {
    name: String!
    blocks: [String!]!
  }
`;

export const queries = `
  page(name: String): ContentPage
`;
