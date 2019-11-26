import { buildSchema } from "graphql";
import {
  quickScanQuestionTypes,
  quickScanQuestionQueries,
  quickScanQuestionMutations
} from "./quickScanQuestion";
import {
  quickScanResultTypes,
  quickScanResultQueries,
  quickScanResultMutations
} from "./quickScanResult";
import { pageTypes, pageQueries, pageMutations } from "./page";

/**
 * Schema build with GraphQL Schema Language
 *
 * See https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6#.9oztv0a7n
 */
export default buildSchema(`
  ${pageTypes}
  ${quickScanQuestionTypes}
  ${quickScanResultTypes}

  type Query {
    ${pageQueries}
    ${quickScanQuestionQueries}
    ${quickScanResultQueries}
  }

  type Mutation {
    ${pageMutations}
    ${quickScanQuestionMutations}
    ${quickScanResultMutations}
  }
`);
