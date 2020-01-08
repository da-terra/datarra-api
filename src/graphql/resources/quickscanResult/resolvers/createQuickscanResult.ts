import crypto from "crypto";
import { ApolloError } from "apollo-server";
import { GraphQLFieldResolver } from "graphql";
import { IQuickscanResult, RoutePath } from "@data-science-platform/shared";
import EmailTemplates from "../../../../data/EmailTemplates";
import createUrl from "../../../../util/createUrl";

type Arguments = IQuickscanResult;

const createQuickscanResult: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, args, { model, provider: providers }) => {
  const uuid = crypto.randomBytes(64).toString("hex");

  const now = new Date().toISOString();

  // Transform answers to valid type
  const result = await model.QuickscanResult.create({
    ...args,
    uuid,
    updatedDate: now,
    createdDate: now
  });

  if (!result) {
    throw new ApolloError("Something went wrong", "INTERNAL_SERVER_ERROR");
  }

  const email: QuickscanResultEmailTemplateData = {
    to: args.person.email,
    name: args.person.name,
    subject: "Bekijk jouw data profiel op Data Science Platform",
    utmCampaign: "create-quickscan-result",
    quickscanProfileUrl: createUrl(RoutePath.QuickscanProfile, { uuid })
  };

  await providers.email.send(EmailTemplates.CreateQuickscanResultTemplate, [
    email
  ]);

  return result;
};

export default createQuickscanResult;
