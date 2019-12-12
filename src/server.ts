import chalk from "chalk";
import express, { Express } from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import config from "./config";

export default (callback: Function) => {
  // Use compression middleware to gzip the response to limit data usage
  const compressionMiddleware = compression({});

  // Use cors middleware to allow cross origin requests from different origins
  const corsMiddleware = cors({ origin: config.server.corsWhitelist });

  // Create express instance
  const app: Express = express();

  // Add compression middleware to express instance
  app.use(compressionMiddleware);

  // Enable pre-flight cors requests for all routes
  app.use(corsMiddleware);

  // Pass app to the callback to configure the business logic of our app on a different location
  callback(app);

  // Static files
  app.use(express.static("static"));

  // Add security features to express server
  app.use(helmet());

  // Start listening to request on configured port
  app.listen(config.server.port);

  console.log(chalk.yellowBright(`Listening to port ${config.server.port}`));
};
