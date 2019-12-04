import { Model, Document } from "mongoose";

declare global {
  type MongooseModels = {
    Article: Model<Document, {}>;
    Page: Model<Document, {}>;
    QuickScanQuestion: Model<Document, {}>;
    QuickScanResult: Model<Document, {}>;
  };
}

export {};
