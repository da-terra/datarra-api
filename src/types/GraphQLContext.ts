declare global {
  type GraphQLContext = {
    mongoose: MongooseModels;
  };
}

export {};
