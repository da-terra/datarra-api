import { FileUpload } from "graphql-upload";

class AzureBlobStorage implements StorageProvider {
  upload(stream: FileUpload): Promise<string> {
    console.log(stream);
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<void> {
    console.log(id);
    throw new Error("Method not implemented.");
  }
}

export default AzureBlobStorage;
