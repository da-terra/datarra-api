import { DataSource } from "apollo-datasource";
import { Model, Document } from "mongoose";
import * as mongooseModels from "./model";

export {
  default as createMongooseConnection
} from "./createMongooseConnection";

export class MongooseDataSource extends DataSource { 
  public Article: Model<Document, {}>;
  public Page: Model<Document, {}>;
  public QuickScanQuestion: Model<Document, {}>;
  public QuickScanResult: Model<Document, {}>;

  constructor() {
    super();

    this.Article = mongooseModels.Article();
    this.Page = mongooseModels.Page();
    this.QuickScanQuestion = mongooseModels.QuickScanQuestion();
    this.QuickScanResult = mongooseModels.QuickScanResult();
  }
}
