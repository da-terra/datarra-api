import chalk from "chalk";
import mongoose from "mongoose";

mongoose.connection.on("error", console.error);
mongoose.connection.once("open", () => {
  console.log(chalk.yellowBright(`Database connection established`));
});

const createMongooseConnection = () =>
  mongoose
    .connect(process.env.MONGO_DB_CONNECTION_STRING!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .catch(console.error);

export default createMongooseConnection;
