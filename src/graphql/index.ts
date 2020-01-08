/* eslint-disable @typescript-eslint/no-explicit-any */
import { buildFederatedSchema } from "@apollo/federation";
import { Resource } from "@data-science-platform/shared";
import { DocumentNode } from "graphql";
import { mergeSchemas } from "graphql-tools";
import { schema as directives, schemaDirectives } from "./directives";
import activity from "./resources/activity";
import article from "./resources/article";
import event from "./resources/event";
import file from "./resources/file";
import organization from "./resources/organization";
import page from "./resources/page";
import project from "./resources/project";
import projectState from "./resources/projectState";
import quickscanQuestion from "./resources/quickscanQuestion";
import quickscanResult from "./resources/quickscanResult";
import user from "./resources/user";
import shared from "./shared";

export const plugins = [];

const resourceSchemas: {
  [name in Resource]: { typeDefs: DocumentNode; resolvers: any };
} = {
  File: file,
  Organization: organization,
  User: user,
  Page: page,
  Project: project,
  ProjectState: projectState,
  Activity: activity,
  Article: article,
  Event: event,
  QuickscanQuestion: quickscanQuestion,
  QuickscanResult: quickscanResult
};

const federatedSchema = buildFederatedSchema([
  directives,
  shared,
  ...Object.values(resourceSchemas)
]);

export const schema = mergeSchemas({
  schemas: [federatedSchema],
  schemaDirectives
});
