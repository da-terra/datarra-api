import { IUser } from "@data-science-platform/shared";

declare global {
  type IGraphQLContext = {
    provider: {
      storage: IStorageProvider;
      email: IEmailProvider;
    };
    model: IModels;
    user?: IUser;
  };
}

export {};
