import { Model, Document } from "mongoose";

declare global {
  type MongooseModels = {
    Blog: Model<Document, {}>;
    Page: Model<Document, {}>;
    QuickScanQuestion: Model<Document, {}>;
    QuickScanResult: Model<Document, {}>;
  };
}

export {};
