import get from 'lodash/get';

import { actionTypes } from "~/services/auth/constasnts";
import authApi from '../auth.api';
import { logger } from '~/config/logger';
import { deleteCookies } from "~/utils/cookie.utils";

// ACTION CREATORS
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

// ACTIONS

const logIn = credentials => {
  return async dispatch => {
    const response = await authApi.requestLogin(credentials);
    const callResponse = get(response, 'success');
    const serviceResponse = get(response, 'payload.success');
    const serviceResponsePayLoad = get(response, 'payload', {});

    dispatch(resetLoginFailure());

    if (callResponse && serviceResponse ) {
      return dispatch(loginSuccess(serviceResponsePayLoad));
    } else  {
      logger.warn(`Login fail.`);
      return dispatch(loginFailure(serviceResponsePayLoad));
    }
  };
};

const logOut = () => {
  return async dispatch => {
    const response = await authApi.requestLogOut();
    const callResponse = get(response, 'success');
    const serviceResponse = get(response, 'payload.success');

    if (callResponse && serviceResponse ) {
      deleteCookies();
      dispatch(signOutSuccess());
      return true;
    } else {
      const errorResponse = `Logout fail.`;
      logger.error(errorResponse);
      dispatch(loginFailure(errorResponse))
      return false;
    }
  };
};

export default {
  logIn,
  logOut,
  loginSuccess,
  signOutSuccess,
  loginFailure,
  resetLoginFailure,
};
