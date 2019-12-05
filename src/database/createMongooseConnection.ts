import chalk from "chalk";
import mongoose from "mongoose";
import config from "../config";

mongoose.connection.on("error", error => {
  console.error(chalk.redBright(`MongoDB connection error: ${error}`));
});

mongoose.connection.once("open", () => {
  console.log(chalk.yellowBright(`MongoDB connection established`));
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
