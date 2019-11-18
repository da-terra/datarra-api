import { Model, Document } from "mongoose";

declare global {
  type MongooseModels = {
    Blog: Model<Document, {}>;
    Page: Model<Document, {}>;
    QuickScan: Model<Document, {}>;
  };
}

export {};
