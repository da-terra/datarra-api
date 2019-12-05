import { DataSource } from "apollo-datasource";
import { MongoClient, Collection } from "mongodb";
import * as mongooseModels from "./model";
import config from "../config";

export { default as createMongoDbClient } from "./createMongoDbClient";
export {
  default as createMongooseConnection
} from "./createMongooseConnection";

export class MongoDBDataSource extends DataSource {
  public Articles: Collection<IArticle>;
  public Pages: Collection;
  public QuickScanQuestions: Collection<IQuickScanQuestion>;
  public QuickScanResults: Collection<IQuickScanResult>;

  constructor(mongoDbClient: MongoClient) {
    super();

    const database = mongoDbClient.db(config.database.mongoDbName);

    this.Articles = database.collection("article");
    this.Pages = database.collection("page");
    this.QuickScanQuestions = database.collection("quickScanQuestion");
    this.QuickScanResults = database.collection("quickScanResult");
  }
}

export class MongooseDataSource extends DataSource {
  public Article = mongooseModels.Article();
  public Page = mongooseModels.Page();
  public QuickScanQuestion = mongooseModels.QuickScanQuestion();
  public QuickScanResult = mongooseModels.QuickScanResult();
}
