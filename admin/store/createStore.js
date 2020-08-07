import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import getConfig from 'next/config';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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

const persistConfig = {
  key: 'root',
  storage,
}
const enhancer = createEnhancer();
const rootReducer = (state, action) => reducer(state, action);
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, {}, enhancer);
const persistor = persistStore(store);

export default { store, persistor };
