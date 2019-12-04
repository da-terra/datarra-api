declare global {
  type GraphQLContext = {
    dataSources: {
      mongoose: MongooseModels;
    };
  };
}

export {};
