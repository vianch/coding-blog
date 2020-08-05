import { httpPut } from "~/services/api/rest.api";
import { endpoints } from "~/services/api/constants";

const requestLogin = async credentials => {
  return await httpPut(
    endpoints.login(),
    credentials,
  );
};

export default {
  requestLogin,
}
