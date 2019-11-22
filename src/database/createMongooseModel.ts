import * as mongooseModels from "./model";

export default (): MongooseModels => {
  return {
    Blog: mongooseModels.Blog(),
    Page: mongooseModels.Page(),
    QuickScanQuestion: mongooseModels.QuickScanQuestion(),
    QuickScanResult: mongooseModels.QuickScanResult(),
  };
};
