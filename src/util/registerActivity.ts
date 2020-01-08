import { IActivityInput } from "@data-science-platform/shared";

const registerActivity = async (
  context: GraphQLContext,
  activityInput: IActivityInput
): Promise<void> => {
  const { model, user } = context;

  await model.Activity.create({
    ...activityInput,
    user: user.id
  });
};

export default registerActivity;
