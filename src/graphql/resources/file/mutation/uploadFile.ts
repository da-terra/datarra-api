import { GraphQLFieldResolver } from "graphql";
import { FileUpload } from "graphql-upload";
import isAuthenticated from "../../../middleware/isAuthenticated";
import withResolverMiddleware from "../../../middleware/withResolverMiddleware";

type Arguments = {
  file: FileUpload;
};

const uploadFileResolver: GraphQLFieldResolver<
  undefined,
  GraphQLContext,
  Arguments
> = async (parent, { file }, { model, provider: { storage } }) => {
  const { filename, mimetype, encoding } = file;

  // Forward file stream to our storage provider
  const uuid = await storage.upload(file);

  try {
    return await model.File.create({
      uuid,
      filename,
      mimetype,
      encoding
    });
  } catch (error) {
    // Remove file if creating a new document in the database failed
    await storage.delete(uuid);

    // Re-throw the error after the file is deleted
    throw error;
  }
};

export default withResolverMiddleware(isAuthenticated)(uploadFileResolver);
