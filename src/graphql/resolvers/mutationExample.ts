type MutationExampleArguments = {
  message: string;
};

export default (
  mutationExampleArguments: MutationExampleArguments
): MutationExampleArguments => {
  console.log(mutationExampleArguments);

  return mutationExampleArguments;
};
