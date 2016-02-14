/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import rootReducer from '../reducers';

const reduxRouterMiddleware = syncHistory(hashHistory);
const enhancer = compose(
  applyMiddleware(thunk, reduxRouterMiddleware)
);

export default function configureStore(initialState: State): Store {
  const store = createStore(rootReducer, initialState, enhancer);
  reduxRouterMiddleware.listenForReplays(store);
  return store;
}
