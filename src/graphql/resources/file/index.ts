import { loader } from "graphql.macro";
import deleteFile from "./mutation/deleteFile";
import uploadFile from "./mutation/uploadFile";
import file from "./query/file";
import files from "./query/files";

const typeDefs = loader("./file.graphql");

const schemaModule = {
  typeDefs,
  resolvers: {
    Query: {
      file,
      files
    },
    Mutation: {
      uploadFile,
      deleteFile
    }
  }
};

export default schemaModule;
