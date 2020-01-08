import { IUser } from "@data-science-platform/shared";

declare global {
  type GraphQLContext = {
    provider: {
      storage: StorageProvider;
      email: EmailProvider;
    };
    model: Models;
    user: IUser;
  };
}

export {};
