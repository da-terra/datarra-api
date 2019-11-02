import { Express } from "express";

// Express is not a ES module so we must import if with require
const express = require("express");

export default (callback: Function) => {
  const app: Express = express();

  callback(app);

  const port: number = (process as any).env.PORT || 4000;

  app.listen(port);
  console.log(`Listening to port ${port}`);
};
