import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import app from './reducers/app';

import appSagas from './effects/app';

const rootReducer = combineReducers({
  app,
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

[...appSagas].forEach(saga => sagaMiddleware.run(saga));
