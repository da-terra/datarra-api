import { Express } from "express";
import compression from "compression";

const setupPerformanceMeasures = (app: Express): void => {
  // Use compression middleware to gzip the response to limit data usage
  app.use(compression());
};

export default setupPerformanceMeasures;
