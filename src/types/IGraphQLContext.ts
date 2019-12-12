import { MongooseDataSource } from "../graphql/dataSources";

declare global {
  type IGraphQLContext = {
    providers: {
      email: IEmailProvider;
    };
    dataSources: {
      mongoose: MongooseDataSource;
    };
  };
}

export {};
