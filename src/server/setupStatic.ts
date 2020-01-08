import path from "path";
import send from "send";
import express, { Express } from "express";

const setupStatic = (app: Express): void => {
  const cwd = process.cwd();

  // Serve static files
  app.use(express.static("static"));

  // Serve index.html when Accept header requests html files
  app.use((req, res, next) => {
    const acceptHtml =
      req.headers.accept && req.headers.accept.split(",").includes("text/html");

    if (!acceptHtml) {
      next();
      return;
    }

    send(req, path.join(cwd, "./static/index.html")).pipe(res);
  });
};

export default setupStatic;
