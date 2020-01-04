import { URL } from "url";
import { createPath, RoutePath } from "@data-science-platform/shared";
import config from "../config";

const createUrl = (
  route: RoutePath,
  parameters: { [name: string]: string }
): string => {
  const url = new URL(createPath(route, parameters), config.server.origin);

  return url.href;
};

export default createUrl;
