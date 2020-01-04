import "dotenv/config";

// Main file that ties everthing together
import { createMongooseConnection } from "./database";
import createServer from "./server";

// Initiate database connection
createMongooseConnection();

createServer();
