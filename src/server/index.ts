import chalk from "chalk";
import express from "express";
import setupModels from "./setupModels";
import setupGraphQL from "./setupGraphql";
import setupPerformanceMeasures from "./setupPerformanceMeasures";
import setupSecurityMeasures from "./setupSecurityMeasures";
import setupPassport from "./passport";
import config from "../config";

export default () => {
  const app = express();
  const models = setupModels();

  setupPerformanceMeasures(app);
  setupSecurityMeasures(app);

  // Route handlers
  setupPassport(app, models);
  setupGraphQL(app, models);
  // setupStatic(app);

  // Start listening to request on configured port
  app.listen(config.server.port);

  const url = chalk.underline(
    chalk.blue(`http://localhost:${config.server.port}/`)
  );
  const message = chalk.yellowBright(`Listening to`);

  console.log("\n\t", message, url);
};
