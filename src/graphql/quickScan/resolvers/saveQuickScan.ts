import { GraphQLContext } from "../../context";

export default (_: any, context: GraphQLContext) => {
  console.log(_, context);
};
