import { actionTypes } from "~/services/auth/constasnts";

const loginSuccess = authInfo => ({
  payload: authInfo,
  type: actionTypes.SIGN_IN_SUCCESS,
});

const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT,
});

const loginFailure = authError => ({
  payload: authError,
  type: actionTypes.SIGN_IN_ERROR,
});

const resetLoginFailure = () => ({
  payload: null,
  type: actionTypes.SIGN_IN_RESET_STATE,
});

export default {
  loginSuccess,
  signOutSuccess,
  loginFailure,
  resetLoginFailure,
};
