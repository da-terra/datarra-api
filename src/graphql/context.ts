import { createMongooseModel } from "../database";

const createGraphQlContext = (): GraphQLContext => {
  const mongoose = createMongooseModel();

  return {
    mongoose
  };
};

export default createGraphQlContext;
