import { MongooseDataSource } from "../database";

declare global {
  type GraphQLContext = {
    dataSources: {
      mongoose: MongooseDataSource;
    };
  };
}

export {};
