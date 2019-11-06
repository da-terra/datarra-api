import { buildSchema } from "graphql";

import {
  quickScanTypes,
  quickScanQueries,
  quickScanMutations
} from "./quickScan";

import { pageTypes, pageQueries } from "./page";

/**
 * Schema build with GraphQL Schema Language
 *
 * See https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6#.9oztv0a7n
 */
export default buildSchema(`
  ${pageTypes}
  ${quickScanTypes}

  type Query {
    ${pageQueries}
    ${quickScanQueries}
  }

  type Mutation {
    ${quickScanMutations}
  }
`);
