import { DataSource } from "apollo-datasource";
import * as mongooseModels from "../database/model";

export class MongooseDataSource extends DataSource {
  public Article = mongooseModels.Article();
  public Page = mongooseModels.Page();
  public QuickScanQuestion = mongooseModels.QuickScanQuestion();
  public QuickScanResult = mongooseModels.QuickScanResult();
}

export default () => ({
  mongoose: new MongooseDataSource()
});
