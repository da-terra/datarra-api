import { buildSchema } from "graphql";

/**
 * Schema build with GraphQL Schema Language
 *
 * See https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6#.9oztv0a7n
 */
export default buildSchema(`
  type Query {
    helloWorld: String
  }

  type Mutation {
    myMutation(message: String): String
  }
`);