import produce from 'immer';

import { actionTypes, requestStatus } from "~/services/auth/constasnts";

const {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_IN_RESET_STATE,
  SIGN_OUT,
} = actionTypes;

const initialState = {
  signIn: {
    error: null,
    state: null,
    data: null,
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signIn: {
          error: null,
          state: requestStatus.success,
          data: action.payload,
        }
      }

    case SIGN_IN_ERROR:
      return {
        ...state,
        signIn: {
          error: action.payload,
          state: requestStatus.error,
          data: null
        },
      };

    case SIGN_IN_RESET_STATE:
      return {
        ...state,
        signIn: {
          error: action.payload,
          state: null,
          data: null,
        },
      };

    case SIGN_OUT:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

export default produce(authReducer, initialState);
