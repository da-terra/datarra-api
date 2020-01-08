import { FileUpload } from "graphql-upload";

declare global {
  interface StorageProvider {
    /**
     * Saves the given stream
     *
     * @param stream
     * @returns {String} id that points to the resource in our storage provider
     */
    upload(stream: FileUpload): Promise<string>;

    /**
     * Deletes the data that is stored on the referenced location
     *
     * @param id
     */
    delete(id: string): Promise<void>;
  }
}

export {};
