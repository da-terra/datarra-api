import chalk from "chalk";
import mongoose from "mongoose";
import config from "../config";

mongoose.connection.on("error", error => {
  console.error(chalk.redBright(`Mongoose client connection error: ${error}`));
});

mongoose.connection.once("open", () => {
  const connectionString = chalk.underline(
    chalk.blue(config.database.mongoDbConnectionString)
  );

  const message = chalk.yellowBright(`Mongoose client connection established`);

  console.log("\n\t", message, connectionString);
});

const createMongooseConnection = () =>
  mongoose.connect(config.database.mongoDbConnectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,

    // Connection options
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000
  });

export default createMongooseConnection;
