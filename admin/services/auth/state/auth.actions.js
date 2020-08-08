import get from 'lodash/get';

import { actionTypes } from "~/services/auth/constasnts";
import authApi from '../auth.api';
import { logger } from '~/config/logger';

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
      logger.error(`Login fail.`);
      return dispatch(loginFailure(serviceResponsePayLoad));
    }
  };
};

const logOut = () => {
  return async dispatch => {
    const response = await authApi.requestLogOut();
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
