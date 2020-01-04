import { Express } from "express";
import compression from "compression";

const setupPerformanceMeasures = (app: Express) => {
  // Use compression middleware to gzip the response to limit data usage
  app.use(compression());
};

export default setupPerformanceMeasures;
