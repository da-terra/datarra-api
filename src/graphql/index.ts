import { buildFederatedSchema } from "@apollo/federation";

import article from "./article";
import page from "./page";
import quickScanQuestion from "./quickScanQuestion";
import quickScanResult from "./quickScanResult";

export const schema = buildFederatedSchema([
  article,
  page,
  quickScanQuestion,
  quickScanResult
]);
