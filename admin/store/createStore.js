import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import getConfig from 'next/config';

/* Config */
import { environments, logs } from '~/config/constants';
import reducer from './rootReducer';

/* environment variables */
const { publicRuntimeConfig } = getConfig();
const { REDUX_LOGS_DISPLAY_MODE } = publicRuntimeConfig;

const createEnhancer = () => {
  const defaultMiddleware = applyMiddleware(thunkMiddleware);
  let enhancer = compose(defaultMiddleware);

  if (process.env.NODE_ENV === environments.DEVELOPMENT) {
    enhancer = composeWithDevTools(defaultMiddleware);

    if (REDUX_LOGS_DISPLAY_MODE === logs.SHOW_LOGS) {
      enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
    }
  }

  return enhancer;
};

const configureStore = (initialState = {}) => {
  const enhancer = createEnhancer();
  const rootReducer = (state, action) => reducer(state, action);

  return createStore(rootReducer, initialState, enhancer);
};

export default configureStore;
