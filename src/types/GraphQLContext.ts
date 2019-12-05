import { MongoDBDataSource, MongooseDataSource } from "../database";

declare global {
  type GraphQLContext = {
    dataSources: {
      mongodb: MongoDBDataSource;
      mongoose: MongooseDataSource;
    };
  };
}

export {};
