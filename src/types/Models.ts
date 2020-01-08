import { Document, Model } from "mongoose";
import { Resource } from "@data-science-platform/shared";

declare global {
  type Models = {
    [name in Resource]: Model<Document, {}>;
  };
}

export {};
