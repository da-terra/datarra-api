import { URL } from "url";
import config from "../config";
import RoutePath from "../data/RoutePath";

const createUrl = (
  route: RoutePath,
  parameters: { [name: string]: string }
) => {
  const path = route.replace(
    /:[a-z]+/gi,
    parameterKey => parameters[parameterKey.substr(1)]
  );

  const url = new URL(path, config.server.origin);

  return url.href;
};

export default createUrl;
