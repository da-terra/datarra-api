import { MongoClient } from "mongodb";
import chalk from "chalk";
import config from "../config";

const createMongoDbClient = () =>
  new Promise<MongoClient>((resolve, reject) =>
    MongoClient.connect(
      config.database.mongoDbConnectionString,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000,
        socketTimeoutMS: 30000
      },
      (error, client) => {
        if (error) {
          console.error(chalk.redBright(`MongoDB connection error: ${error}`));
          reject(error);
          return;
        }

        console.log(chalk.yellowBright(`MongoDB connection established`));
        resolve(client);
      }
    )
  );

export default createMongoDbClient;
