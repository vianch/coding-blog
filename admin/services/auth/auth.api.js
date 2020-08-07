import { httpGet, httpPut } from "~/services/api/rest.api";
import { endpoints } from "~/services/api/constants";

const requestLogin = async credentials => {
  return await httpPut(
    endpoints.login(),
    credentials,
    {},
    true,
  );
};

const requestAuthentication = async cookie => {
  const requestHeaders = {
    Accept: "application/json",
    headers: cookie,
  };

  return await httpGet(
    endpoints.authentication(),
    requestHeaders,
    true,
  );
};

export default {
  requestLogin,
  requestAuthentication,
}
