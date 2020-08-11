import { createSelector } from 'reselect';
import get from 'lodash/get';

const selectAuthData = state => get(state, 'auth', {});

const selectSignInStatus = createSelector(selectAuthData, authData =>
  get(authData, 'signIn', {}),
);

const isLoggedIn = (state, cacheData) => {
  const logInStateData = selectSignInStatus(state);

  const stateAuthToken = get(logInStateData, 'data.authToken');
  const stateUserId = get(logInStateData, 'data.userId');
  const cookieAuthToken = get(cacheData, 'authToken');
  const cookieUserId = get(cacheData, 'id');

  return (
    stateAuthToken &&
    cookieAuthToken &&
    stateUserId &&
    cookieUserId &&
    stateAuthToken === cookieAuthToken &&
    stateUserId === cookieUserId
  );
};

export default {
  selectAuthData,
  selectSignInStatus,
  isLoggedIn,
};
