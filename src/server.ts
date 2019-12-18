import path from "path";
import send from "send";
import chalk from "chalk";
import express, { Express } from "express";
import serveStatic from "serve-static";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import config from "./config";

export default (callback: Function) => {
  // Use compression middleware to gzip the response to limit data usage
  const compressionMiddleware = compression({});

  // Use cors middleware to allow cross origin requests from different origins
  const corsMiddleware = cors({ origin: config.server.corsWhitelist });

  // Create static middleware
  const serveFile = serveStatic("static");

  // Get working directory
  const cwd = process.cwd();

  // Create express instance
  const app: Express = express();

  // Add compression middleware to express instance
  app.use(compressionMiddleware);

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

  // Always return index.html when the accept header includes `text/html`
  app.use((req, res, next) => {
    const acceptHtml =
      req.headers.accept && req.headers.accept.split(",").includes("text/html");

    if (req.path.startsWith("/static")) {
      res.set("Cache-Control", "max-age=31536000");
    } else {
      res.set("Cache-Control", "max-age=no-cache");
    }

    if (!acceptHtml) {
      serveFile(req, res, next);
      return;
    }

    const stream = send(req, path.join(cwd, "./static/index.html"));
    stream.pipe(res);
  });

  // Pass app to the callback to configure the business logic of our app on a different location
  callback(app);

  // Start listening to request on configured port
  app.listen(config.server.port);

  console.log(chalk.yellowBright(`Listening to port ${config.server.port}`));
};
