import { Document, Model } from "mongoose";

declare global {
  type IModels = {
    article: Model<Document, {}>;
    event: Model<Document, {}>;
    file: Model<Document, {}>;
    organization: Model<Document, {}>;
    page: Model<Document, {}>;
    project: Model<Document, {}>;
    quickscanQuestion: Model<Document, {}>;
    quickscanResult: Model<Document, {}>;
    user: Model<Document, {}>;
  };
}

export {};
