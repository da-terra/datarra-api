type Arguments = {
  target: number;
  scoreRange: {
    min: number;
    max: number;
  };
  tags: string[];
};

export default async (
  args: Arguments,
  context: GraphQLContext
) => {
  const { target } = args;

  const query: any = {
    $or: [],
    $and: []
  };

  if (target) {
    query.target = target;
  }

  const articles = await context.mongoose.Article.find(query);

  return articles;
};
