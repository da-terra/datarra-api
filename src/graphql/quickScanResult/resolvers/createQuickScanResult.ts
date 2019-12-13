import crypto from "crypto";
import { BadRequest } from "http-errors";
import { GraphQLFieldResolver } from "graphql";
import EmailTemplates from "../../../data/EmailTemplates";
import createUrl from "../../../util/createUrl";
import RoutePath from "../../../data/RoutePath";

type Arguments = IQuickScanResult;

export default (async (parent, args, { dataSources, providers }, info) => {
  const uuid = crypto.randomBytes(64).toString("hex");

  // Transform answers to valid type
  const result = await dataSources.mongoose.QuickScanResult.create({
    ...args,
    uuid
  });

  const email: IQuickscanResultEmailTemplateData = {
    to: args.person.email,
    name: args.person.name,
    subject: "Bekijk jouw data profiel op Data Science Platform",
    utmCampaign: "create-quickscan-result",
    quickscanProfileUrl: createUrl(RoutePath.QuickScanProfile, { uuid })
  };

  await providers.email.send(EmailTemplates.CreateQuickscanResultTemplate, [
    email
  ]);

  if (!result) {
    throw new BadRequest();
  }

  return result;
}) as GraphQLFieldResolver<any, IGraphQLContext, Arguments>;
