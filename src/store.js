import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/root';
import DataAdapter from './helpers/DataAdapter';
import { newAccountValues } from './helpers/FormFields';

const accounts = new DataAdapter().getAccounts();
accounts.newAccount = newAccountValues();

const defaultState = {
  accounts
};

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;