import * as mongooseModels from "./model";

export default (): MongooseModels => {
  return {
    Blog: mongooseModels.Blog(),
    Page: mongooseModels.Page(),
    QuickScan: mongooseModels.QuickScan()
  };
};
