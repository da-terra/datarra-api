export { default as schema } from "./schema";

export { default as createGraphQlMiddleware } from "./middleware";
export { default as createGraphQlContextMiddleware } from "./context";

import pageResolvers from "./page";
import quickScanResolvers from "./quickScan";

export const rootValue = {
  ...pageResolvers,
  ...quickScanResolvers
};
