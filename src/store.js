import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/accounts';
import data from './data/sample-data';

const defaultState = {
  entree: data.entree,
  light: data.light,
  dessert: data.dessert
};

export const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;