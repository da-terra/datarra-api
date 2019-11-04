import chalk from "chalk";
import express, { Express } from "express";

export default (callback: Function) => {
  const app: Express = express();

  callback(app);

  const port: number = (process as any).env.PORT || 4000;

  app.listen(port);

  console.log(chalk.yellowBright(`Listening to port ${port}`));
};
