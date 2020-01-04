import { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import config from "../config";

const setupSecurityMeasures = (app: Express) => {
  // Use cors middleware to allow cross origin requests from different origins
  const corsMiddleware = cors({
    origin: config.server.corsWhitelist,
    credentials: true
  });

  // Enable pre-flight cors requests for all routes
  app.use(corsMiddleware);

  // Add security features to express server
  app.use(
    helmet({
      referrerPolicy: {
        policy: "same-origin"
      }
    })
  );
};

export default setupSecurityMeasures;
