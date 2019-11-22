export { default as schema } from "./schema";

export { default as createGraphQlMiddleware } from "./middleware";
export { default as createGraphQlContextMiddleware } from "./context";

import pageResolvers from "./page";
import quickScanQuestionResolvers from "./quickScanQuestion";

export const rootValue = {
  ...pageResolvers,
  ...quickScanQuestionResolvers
};
