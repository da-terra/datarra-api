import { DataSource } from "apollo-datasource";
import * as mongooseModels from "./model";

export {
  default as createMongooseConnection
} from "./createMongooseConnection";

export class MongooseDataSource extends DataSource {
  public Article = mongooseModels.Article();
  public Page = mongooseModels.Page();
  public QuickScanQuestion = mongooseModels.QuickScanQuestion();
  public QuickScanResult = mongooseModels.QuickScanResult();
}
