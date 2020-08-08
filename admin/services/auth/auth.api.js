import { httpGet, httpPut } from "~/services/api/rest.api";
import { endpoints } from "~/services/api/constants";

const requestLogin = async credentials => {
  return httpPut(
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

  return httpGet(
    endpoints.authentication(),
    requestHeaders,
    true,
  );
};

const requestLogOut = async () => {
  return httpPut(endpoints.logout());
};

export default {
  requestLogin,
  requestAuthentication,
  requestLogOut,
}
