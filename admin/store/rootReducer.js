import { combineReducers } from 'redux';

import { authReducer as auth } from "~/services/auth";

const reducer = combineReducers({
  auth,
});

export default reducer;
