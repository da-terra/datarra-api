type User = {
  name: string;
};

export type GraphQLContext = {
  user?: User;
};

export default function(): GraphQLContext {
  return {
    user: {
      name: "Leroy Korterink"
    }
  };
}
