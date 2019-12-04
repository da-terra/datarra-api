export const types = `
  type Article {
    slug: String!
    target: Number!
    scoreRange: {
      min: Int!
      max: Int!
    } 
    tags: [String]
    blocks: [String!]!
  }
`;

export const queries = `
  Article(name: String): Article
`;

export const mutations = `
  createArticle(name: String, blocks: [String!]!): Article
  updateArticle(name: String, blocks: [String!]!): Article
`;
