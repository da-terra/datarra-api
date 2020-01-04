import { loader } from "graphql.macro";
import { buildFederatedSchema } from "@apollo/federation";

//
import shared from "./shared";

//
import article from "./article";
import event from "./event";
import organization from "./organization";
import page from "./page";
import project from "./project";
import quickscanQuestion from "./quickscanQuestion";
import quickscanResult from "./quickscanResult";
import user from "./user";

export const schema = buildFederatedSchema([
  shared,

  // models
  article,
  event,
  organization,
  page,
  project,
  quickscanQuestion,
  quickscanResult,
  user
]);
